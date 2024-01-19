import TelegramBot from 'node-telegram-bot-api'
import BasedLabs from 'basedlabs'

interface ImageResponse {
  status: string
  output: string[]
  metrics: {
    predict_time: number
  }
}

async function initializeBot() {
  await import('dotenv/config')

  const token = process.env.TELEGRAM_BOT_TOKEN

  if (!token) {
    throw new Error('Telegram Bot Token not provided!')
  }

  // Create a bot that uses 'polling' to fetch new updates
  const bot = new TelegramBot(token, { polling: true })

  // Create a BasedLabs instance
  const basedlabs = new BasedLabs({
    apiKey: process.env.BASEDLABS_API_KEY || '',
  })

  // Listen for any kind of message
  bot.on('message', async (msg) => {
    // handle incoming messages
    console.log({ msg })

    if (msg.text && msg.text.startsWith('/test')) {
      try {
        // Split the message into command and prompt parts
        const parts = msg.text.split(' ')
        const customPrompt = parts.slice(1).join(' ')

        // Check if a custom prompt was provided
        if (!customPrompt) {
          bot.sendMessage(
            msg.chat.id,
            'Please provide a prompt after the command.',
          )
          return
        }

        const createResponse = await basedlabs.createImage({
          prompt: `${customPrompt}, cinematic, ultra detailed, 8K, <lora:ral-jeans-sdxl:1> ral-jeans`,
          modelId:
            'ac8f3442feb931a2658a8c7c58dbadba8947dc58a5ccb81be26473de2f109aaa',
          negativePrompt:
            '(worst quality, low quality, normal quality, lowres, low details, oversaturated, undersaturated, overexposed, underexposed, grayscale, bw, bad photo, bad photography, bad art:1.4), (watermark, signature, text font, username, error, logo, words, letters, digits, autograph, trademark, name:1.2), (blur, blurry, grainy), morbid, ugly, asymmetrical, mutated malformed, mutilated, poorly lit, bad shadow, draft, cropped, out of frame, cut off, censored, jpeg artifacts, out of focus, glitch, duplicate, (airbrushed, cartoon, anime, semi-realistic, cgi, render, blender, digital art, manga, amateur:1.3), (3D ,3D Game, 3D Game Scene, 3D Character:1.1), (bad hands, bad anatomy, bad body, bad face, bad teeth, bad arms, bad legs, deformities:1.3)',
        })

        await bot.sendMessage(
          msg.chat.id,
          'Processing your image, please wait, should take around 20s-30s...',
        )

        const pollForImage = async (): Promise<ImageResponse> => {
          try {
            const imageResponse = await basedlabs.getImage({
              id: createResponse.id,
            })
            console.log({
              imageResponse,
            })
            if (imageResponse.status === 'succeeded') {
              return imageResponse
            } else {
              // Use a new Promise to recursively call pollForImage after a delay
              return new Promise<ImageResponse>((resolve) =>
                setTimeout(() => resolve(pollForImage()), 2000),
              )
            }
          } catch (pollError) {
            console.error('Error polling for image:', pollError)
            throw pollError // Make sure to throw an error to be caught by the caller
          }
        }

        const finalImage = await pollForImage()

        console.log({
          finalImage,
        })

        // Sending image to user
        if (finalImage && finalImage.output[0]) {
          bot.sendPhoto(msg.chat.id, finalImage.output[0], {
            caption: `Your image completed in ${finalImage.metrics.predict_time.toFixed(2)}s`,
          })
        } else {
          bot.sendMessage(msg.chat.id, "Sorry, I couldn't get the image.")
        }
      } catch (error) {
        console.error('Error processing image request:', error)
        bot.sendMessage(
          msg.chat.id,
          'An error occurred while processing your request.',
        )
      }
    }
  })
}

initializeBot().catch((error) => console.error(error))

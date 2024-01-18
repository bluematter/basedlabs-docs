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
          prompt: `In the style of TOK (${customPrompt}) wearing jeans, masterpiece, best quality, high detail, sharp focus, soft lighting, high quality,(photorealistic:1.4), 8K, (masterpiece*high detailed*highres), 8k, cinematic quality, in the style of jeans on everything`,
          modelId:
            'ba6dc00f757ac2833db3466d8e3b4a74671207ff16044663758e86826002260b',
          negativePrompt:
            '(worst quality:2), (multiple people), (low quality:2),(blurry:2),bad_prompt,text, (bad and mutated hands:1.3),(bad hands),badhandv4,mutated hands, bad anatomy, missing fingers,extra fingers,fused fingers,too many fingers,(interlocked fingers:1.2), extra limbs,malformed limbs,multiple limbs, extra arms, extra legs, long neck, cross-eyed, negative_hand, negative_hand-neg, text, label, caption',
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

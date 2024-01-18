---
title: BasedLabs.createImage()
nextjs:
  metadata:
    title: BasedLabs.createImage()
    description: Create images with custom prompts using the BasedLabs API.
---

The `createImage` method in the `BasedLabs` class allows you to create images by specifying prompts and model IDs. This function makes a POST request to the BasedLabs API and returns the created image's details.

---

## Using the createImage Method

The `createImage` method requires an options object with `prompt`, `modelId`, and `negativePrompt` properties. This method returns a promise that resolves to the response from the BasedLabs API.

### Parameters

- `options`: An object containing:
  - `prompt` (string): The prompt based on which the image is created.
  - `modelId` (string): The ID of the model to use for image creation.
  - `negativePrompt` (string): A prompt to specify what the image should not contain.

### Example Usage

Below is an example of how to use the `createImage` method:

```js
import BasedLabs from '@basedlabs'

const basedLabs = new BasedLabs({ apiKey: 'YOUR_API_KEY' })

async function generateImage() {
  const options = {
    prompt: 'A scenic mountain landscape',
    modelId: 'model-123',
    negativePrompt: 'No watermarks',
  }

  try {
    const response = await basedLabs.createImage(options)
    console.log(response)
    // Handle the response
  } catch (error) {
    console.error('Error creating image:', error)
  }
}

generateImage()
```

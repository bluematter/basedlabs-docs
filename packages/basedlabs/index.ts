// index.ts

interface ICreateImageOptions {
  prompt: string
  modelId: string
  negativePrompt: string
}

interface IGetImageOptions {
  id: string
}

const API_ENDPOINT = 'https://www.basedlabs.ai/api/v1'

class BasedLabs {
  private apiKey: string

  constructor(config: { apiKey: string }) {
    this.apiKey = config.apiKey
  }

  async createImage(options: ICreateImageOptions) {
    const response = await fetch(`${API_ENDPOINT}/create/image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.apiKey,
      },
      body: JSON.stringify(options),
    })

    return await response.json()
  }

  async getImage(options: IGetImageOptions) {
    const response = await fetch(`${API_ENDPOINT}/read/image/${options.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.apiKey,
      },
      body: JSON.stringify(options),
    })

    return await response.json()
  }
}

export default BasedLabs

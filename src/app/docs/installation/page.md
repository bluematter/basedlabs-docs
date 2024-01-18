---
title: Installation Guide for BasedLabs SDK
nextjs:
  metadata:
    title: Installing BasedLabs SDK
    description: Learn how to install and use the BasedLabs SDK in your application.
---

This guide provides detailed instructions on how to install the BasedLabs SDK and integrate it into your project. The BasedLabs SDK allows you to interact with BasedLabs APIs seamlessly in your JavaScript or TypeScript applications.

---

## Installation

To start using the BasedLabs SDK, you need to first install the package in your project. Ensure that you have Node.js and npm (or yarn) installed in your environment. Then, run the following command in your project directory:

```shell
npm install basedlabs
```

Or if you are using Yarn, run:

```shell
yarn add basedlabs
```

This command installs the BasedLabs SDK and adds it to your project's dependencies.

---

## Setting Up Your API Key

Before you can use the BasedLabs SDK, you need to obtain an API key from BasedLabs. This key is essential for authenticating your requests to the BasedLabs APIs. [Find your keys here](https://www.basedlabs.ai/dashboard/api-keys)

1. **Obtain an API Key**: Log in to your BasedLabs account and navigate to the API section to generate your API key.
2. **Securely Store the API Key**: It's crucial to keep your API key secure. Store it in an environment variable instead of hardcoding it in your application. For example, add it to your .env file:

```shell
BASEDLABS_API_KEY=your_api_key_here
```

3. **Access the API Key in Your Application**: Use process.env to access your API key within your application. This method ensures your key remains secure and isn't exposed in your source code.

---

## Using the BasedLabs SDK

After installing the SDK and setting up your API key, you can now instantiate and use the BasedLabs class in your application.

```js
import BasedLabs from 'basedlabs'

// Instantiate the BasedLabs class with your API key
const basedlabs = new BasedLabs({
  apiKey: process.env.BASEDLABS_API_KEY || '',
})

// Now you can use the `basedlabs` instance to interact with BasedLabs APIs
```

In the above example, we import the BasedLabs class from the basedlabs package and create an instance of it by passing an object containing the API key. This instance can then be used to call methods corresponding to various BasedLabs API endpoints.

---

## Conclusion

You have successfully installed the BasedLabs SDK and learned how to securely integrate it into your project using your API key. Now you can leverage the full power of BasedLabs APIs in your application. For more detailed information on using specific features of the BasedLabs SDK, refer to the subsequent sections of this documentation.

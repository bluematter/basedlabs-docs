---
title: Getting started
---

Learn how to get BasedLabs set up in your project in under thirty minutes. {% .lead %}

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/installation" description="Step-by-step guides to setting up and installing the library." /%}

<!-- {% quick-link title="Architecture guide" icon="presets" href="/" description="Learn how the internals work and contribute." /%}

{% quick-link title="Plugins" icon="plugins" href="/" description="Extend the library with third-party plugins or write your own." /%}

{% quick-link title="API reference" icon="theming" href="/" description="Learn to easily customize and modify your app's visual design to fit your brand." /%} -->

{% /quick-links %}

In these docs you will learn how to quickly setup BasedLabs SDK and how you can interact with methods that give you AI capabilities.

---

## Quick start

Welcome to the BasedLabs SDK documentation! This guide will help you get up and running with BasedLabs SDK in no time. You'll learn how to install the SDK, how to initialize it, and start using its AI capabilities.

### Installing dependencies

To use BasedLabs SDK, you first need to install it in your project. Run the following command in your project directory:

```shell
npm install basedlabs
```

Or if you are using Yarn, run:

```shell
yarn add basedlabs
```

This command installs the BasedLabs SDK and adds it to your project's dependencies.

<!-- {% callout type="warning" title="Oh no! Something bad happened!" %}
This is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link](/) in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.
{% /callout %}

### Configuring the library

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

```js
// cache-advance.config.js
export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}
```

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

{% callout title="You should know!" %}
This is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link](/) in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.
{% /callout %} -->

---

## Basic Usage

Once you have the SDK installed, you can start using it to access the powerful AI features provided by BasedLabs. Here's a quick example to get you started:

1. **Import BasedLabs**: Import the BasedLabs module in your application.

```js
import BasedLabs from 'basedlabs'
```

2. **Initialize with API Key**: Create an instance of BasedLabs with your API key.

```js
const basedLabs = new BasedLabs({ apiKey: 'YOUR_API_KEY' })
```

3. **Use BasedLabs Methods**: Now you can use the methods provided by BasedLabs to interact with AI services.

```js
// Example usage
basedLabs.createImage({
  /* parameters */
})
```

---

## Getting help

If you encounter any issues or have questions, there are several ways to get help:

### Submit an issue

If you find a bug or have a feature request, feel free to open an issue on our GitHub repository. Provide as much detail as possible to help us understand and address your concern.

### Join the community

Connect with other developers using BasedLabs SDK and share your experiences. Join our community forums or chat channels to discuss, learn, and get help from fellow users and the BasedLabs team. [Join our Discord](https://discord.gg/D8wYxUvwTD)

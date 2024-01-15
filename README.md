# figma-supabase-js-demo

## Quickstart

This plugin was created with [Plugma](https://github.com/gavinmcfarland/plugma) using the [Svelte](https://svelte.dev/) framework.

### Requirements

- [Node.js](https://nodejs.org/en)
- [Figma desktop app](https://www.figma.com/downloads/)

### Develop

Install the dependencies and watch for changes while developing:

```shell
npm install
npm run dev
```

Open the Figma desktop app, import the plugin and run.

### Env variables

Create a `.env` file in the root of the project with the following variables:

```js
VITE_PUBLIC_SUPABASE_API_URL = ''
VITE_PUBLIC_SUPABASE_ANON_KEY = ''
```

### Import the plugin

1. Open the Figma desktop app and open a file
2. Search for "Import plugin from manifest..." using the [Quick Actions](https://help.figma.com/hc/en-us/articles/360040328653-Use-shortcuts-and-quick-actions#Use_quick_actions) bar.
3. Choose the `manifest.json` file from the `dist` folder.

### Preview

Open [http://localhost:\<port\>](http://localhost:3000) to preview your plugin in different browsers.

_Make sure the plugin is open in the Figma desktop app._

### Publish

Before publishing, make sure to create a build:

```
npm run build
```

Now you can publish the plugin from the Figma desktop app.

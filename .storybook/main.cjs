const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  svelteOptions: {
    preprocess: sveltePreprocess(),
  },
  "stories": [
    "../src/stories/Introduction/GettingStarted.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/lib/**/*.stories.svelte",
  ],
  "addons": [
    "@storybook/addon-links",{
    name: "@storybook/addon-essentials",
    options: {
      viewport: false,
      measure: false,
      backgrounds: false,
      outline: false
    }
  },
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": false
  }
}
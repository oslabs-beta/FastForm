const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  svelteOptions: {
    preprocess: sveltePreprocess(),
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/lib/**/*.stories.svelte"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
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
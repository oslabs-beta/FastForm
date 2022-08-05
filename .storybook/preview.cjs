export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'FastForm', ['FastForm'], 'Field', ['Field'], 'Validators', ['Validators'], 'More Information'],
      locals: 'en-US'
    }
  }
}
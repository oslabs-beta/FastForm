module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    'indent': ['warn', 2],
    'no-unused-vars': ['off', { 'vars': 'local' }],
    'prefer-const': 'warn',
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'space-infix-ops': 'warn'
  },
  settings: {
    'svelte3/typescript': () => require('typescript')
  }
}
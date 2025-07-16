import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  jsonc: false,
  yaml: false,
  ignores: [
    'android',
    'dist',
  ],
})

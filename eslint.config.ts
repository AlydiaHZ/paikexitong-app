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
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
  },
})

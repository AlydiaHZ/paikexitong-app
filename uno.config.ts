import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist', '.vscode', 'public', 'build', 'src-tauri'],
    },
  },
  presets: [
    presetWind4({
      dark: {
        dark: '[data-theme=\'dark\']',
        light: '[data-theme=\'light\']',
      },
      preflights: {
        reset: true,
      },
    }),
    presetIcons({}),
    presetAttributify(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
  },
})

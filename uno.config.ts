import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  shortcuts: [
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'
    ]
  ],
  presets: [
    presetUno(),
    presetDaisy({
      themes: ['light', 'dark']
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ]
})

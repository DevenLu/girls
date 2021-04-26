import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import paths from 'vite-tsconfig-paths'
import windicss from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [solid(), paths(), windicss()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false
  }
})

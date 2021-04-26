import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extract: {
      include: ['src/**/*.{html,ts,tsx}'],
      exclude: ['node_modules', '.git']
    },
    extend: {}
  }
})

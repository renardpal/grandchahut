import { defineConfig } from 'vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

// `base` lets the site work both locally (base "/") and on GitHub Pages
// project sites (base "/repo-name/"). The build script in
// .github/workflows/deploy.yml sets BASE_PATH automatically — no need to
// edit this file for that. Only touch this if you deploy somewhere else
// with different path requirements.
const config = defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
  ],
})

export default config

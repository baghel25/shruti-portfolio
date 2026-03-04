import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    outDir: 'dist',
    minify: 'esbuild',
    assetsInlineLimit: 4096,
    sourcemap: false,
  },

  server: {
    port: 5173,
    open: true,
  },
})
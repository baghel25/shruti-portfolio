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
    // Output to dist/ (default — works for Vercel, Netlify, GitHub Pages)
    outDir: 'dist',

    // Minify with esbuild (fast, no extra deps)
    minify: 'esbuild',

    // Inline assets smaller than 4kb as base64
    assetsInlineLimit: 4096,

    // Generate source maps for production debugging (set false to reduce bundle size)
    sourcemap: false,

    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          vue: ['vue'],
        },
        // Clean asset filenames
        chunkFileNames:  'assets/js/[name]-[hash].js',
        entryFileNames:  'assets/js/[name]-[hash].js',
        assetFileNames:  'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  // Dev server config
  server: {
    port: 5173,
    open: true,
  },
})
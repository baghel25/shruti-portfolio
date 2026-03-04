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
    rollupOptions: {
      output: {
        // ✅ Function form — required for Vite 6 / rolldown
        manualChunks(id) {
          if (id.includes('node_modules/vue')) {
            return 'vue'
          }
        },
        chunkFileNames:  'assets/js/[name]-[hash].js',
        entryFileNames:  'assets/js/[name]-[hash].js',
        assetFileNames:  'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  server: {
    port: 5173,
    open: true,
  },
})
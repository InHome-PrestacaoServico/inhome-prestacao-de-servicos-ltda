import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Usar esbuild que já vem com Vite (não precisa instalar)
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      }
    },
    assetsInlineLimit: 0,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
    open: false,
    host: '0.0.0.0'
  },
  preview: {
    port: 4173,
    open: false
  }
})
import { splitVendorChunkPlugin, defineConfig } from 'vite';

export default defineConfig({
  plugins: [ splitVendorChunkPlugin() ],
  root: 'src',
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/journal': {
        target: 'http://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    target: 'esnext',
    outDir: '../build',
    emptyOutDir: true,
    sourcemap: true
  }
});

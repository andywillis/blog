import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcssNesting from 'postcss-nesting';
import compress from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    splitVendorChunkPlugin(),
    compress()
  ],
  publicDir: '../public',
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ]
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'esnext',
    emptyOutDir: true,
    outDir: './build',
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})

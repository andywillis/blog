import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import compress from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		vue(),
		splitVendorChunkPlugin(),
		compress()
	],
	// root: 'src',
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
		open: true,
		// proxy: {
		//   '/endpoint': {
		//     target: 'http://localhost:4000',
		//     secure: false,
		//     changeOrigin: true
		//   },
		// }
	},
	build: {
		target: 'esnext',
		emptyOutDir: true,
		outDir: '../../build',
		sourcemap: true
	}
});

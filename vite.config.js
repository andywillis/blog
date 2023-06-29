import { defineConfig, splitVendorChunkPlugin } from 'vite';
import postcssNesting from 'postcss-nesting';
import compress from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		splitVendorChunkPlugin(),
		compress()
	],
	root: 'src',
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
		outDir: '../build',
		sourcemap: true
	}
});

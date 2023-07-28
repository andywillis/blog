import { defineConfig, splitVendorChunkPlugin } from 'vite';
import preact from '@preact/preset-vite';
import postcssNesting from 'postcss-nesting';
import compress from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		preact(),
		splitVendorChunkPlugin(),
		compress()
	],
	// root: 'src',
	publicDir: '../public',
	resolve: {
		alias: {
			react: 'preact/compat'
		}
	},
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
		sourcemap: true
	}
});

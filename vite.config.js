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
		// modules: {
		// 	generateScopedName: (name) => name
		// },
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
		sourcemap: true,
		rollupOptions: {
			output: {
				entryFileNames: 'assets/[name].js',
				chunkFileNames: 'assets/[name].js',
				assetFileNames: 'assets/[name].[ext]'
			}
		}
	}
});

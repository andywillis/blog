import { defineConfig, splitVendorChunkPlugin } from 'vite';
import resolve from '@rollup/plugin-node-resolve';
import nesting from 'postcss-nesting';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import compress from 'vite-plugin-compression';
import path from 'path';

export default defineConfig({
	plugins: [
		splitVendorChunkPlugin(),
		compress()
	],
	root: 'src',
	// css: {
	// 	modules: {
	// 		generateScopedName: (name) => name
	// 	},
	// 	postcss: {
	// 		plugins: [
	// 			postcssNesting
	// 		]
	// 	}
	// },
	// server: {
	// 	port: 3000,
	// 	open: false
	// },
	build: {
		// target: 'esnext',
		// emptyOutDir: true,
		// outDir: '../build',
		// sourcemap: true,
		rollupOptions: {

			input: {
				app: 'src/index_placeholder.html'
			},

			output: {
				dir: 'build',
		    format: 'esm'
			},

			plugins: [
		    postcss({
		      extract: true,
		      modules: {
		  			generateScopedName: function (name) {
		  				return name;
		  			}
		  		},
		      plugins: [
		      	nesting()
		      ]
		    }),
		    json(),
		    resolve()
		  ]

    }

	}
});

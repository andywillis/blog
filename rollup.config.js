import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import importUrl from 'postcss-import-url';
import nesting from 'postcss-nesting';
import cssimport from 'postcss-import';
import gzipPlugin from 'rollup-plugin-gzip';

export default {

	input: 'src/compileJournal.js',

	output: {
		file: 'src/tools/temp/extractHtml.js',
		format: 'esm'
	},

	plugins: [

		resolve(),

		json(),

		postcss({

			extract: 'journal.css',

			modules: {
				generateScopedName: '[local]_[hash:base64:5]'
			},

			plugins: [
				cssimport(),
				importUrl(),
				nesting()
			]

		}),

		gzipPlugin({
			filter: /\.(css)$/
		})
	
	]

};

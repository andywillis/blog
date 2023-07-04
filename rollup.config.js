import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
// import cssmodules from 'postcss-modules';
import importUrl from 'postcss-import-url';
import nesting from 'postcss-nesting';
import cssimport from 'postcss-import';

export default {

	input: 'src/main_node.js',

	output: {
		file: 'build/bundle.js',
    format: 'esm'
	},

	plugins: [
    resolve(),
    json(),
    postcss({

      extract: true,

      extensions: ['.css', '.modules.css', '.min.css'],
      modules: {
  			generateScopedName: function (name) {
  				return name;
  			}
  		},

      plugins: [
        cssimport(),
        importUrl(),
      	nesting(),
      ]
    })
  ]

};

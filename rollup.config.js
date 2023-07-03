import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
// import cssmodules from 'postcss-modules';
import nesting from 'postcss-nesting';

export default {

	input: 'src/main_node.js',

	output: {
		file: 'build/bundle.js',
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

};

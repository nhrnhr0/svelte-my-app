/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from "svelte-preprocess"

const config = {
    preprocess: sveltePreprocess({
        babel: {
            presets: [
              [
                '@babel/preset-env',
                {
                  loose: true,
                  // No need for babel to resolve modules
                  modules: false,
                  targets: {
                    // ! Very important. Target es6+
                    esmodules: true,
                  },
                },
              ],
            ],
          },
    }),
	kit: {
		/*paths: {
            base: '/sveltekit',
            assets: '/sveltekit'
        },     */ 

        adapter: adapter({
            pages: 'build',  // path to public directory
            assets: 'build',  // path to public directory
            fallback: null
        }),
		appDir: 'static',
	}
};

export default config;

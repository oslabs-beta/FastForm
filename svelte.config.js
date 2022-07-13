import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    package: {
      exports: (filepath) => !/./.test(filepath)
    },
		adapter: adapter()
	}
};

export default config;

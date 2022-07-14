import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    package: {
      exports: () => false
    },
		adapter: adapter()
	}
};

export default config;

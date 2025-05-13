import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			strict: false,           // ✅ allows dynamic routes without error
			fallback: 'index.html'   // ✅ enables client-side fallback routing (for GitHub Pages)
		}),
		paths: {
			base: dev ? '' : '/Trend-Hunt-Web-Page-Recreation' // ✅ your GitHub repo name
		}
	}
};

export default config;

import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess(),
  onwarn: (warning, handler) => {
    if (warning.code === 'css_unused_selector') return;
    handler(warning);
  }
};

export default config;
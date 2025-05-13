import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs';

// Set the base path for GitHub Pages deployment
const dev = process.env.NODE_ENV === 'development';
const basePath = dev ? '/' : '/Trend-Hunt-Web-Page-Recreation/'; // Replace with your GitHub repo name

export default defineConfig({
	plugins: [sveltekit()],
	base: basePath, // Set base path for GitHub Pages
	server: {
		https: dev ? {
			key: fs.readFileSync('./dev.kecd y'),
			cert: fs.readFileSync('./dev.crt')
		} : false, // Only use HTTPS in development
	},
});
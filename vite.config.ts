import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [],
	clearScreen: false,
	base: './',
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		}
	},
	server: {
		host: '0.0.0.0',
		port: 8000,
		open: true,
	},
	build: {
		assetsInlineLimit: 0,
		chunkSizeWarningLimit: 1500,
	}
});
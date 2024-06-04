import Confstellation from '@astrolicious/confstellation';
import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'server',
	// adapter: ADD_YOUR_ADAPTER_HERE,
	experimental: {
		actions: true,
	},
	integrations: [
		Confstellation({
			config: {
				conferenceName: 'AstroConf',
				conferenceSlogan: 'Blazingly fast lightning talks',
				conferenceDate: '2024-09-16T14:00:00Z',
				nav: [
					{ label: 'Home', link: '/' },
					{ label: 'Speakers', link: '#speakers' },
				],
			},
		}),
	],
});

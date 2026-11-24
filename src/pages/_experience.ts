export const experience: Array<{
	title: string;
	company: string;
	desc: string;
	links?: Array<{ name: string; href: string }>;
	note?: string;
}> = [
	{
		title: 'Staff Software Engineer',
		company: 'Gravity Wiz',
		desc: 'Owned end-to-end product development and iteration as lead engineer during a multi-year growth push. 74% ARR and 47% user-base increase during tenure.',
		links: [{ name: 'Gravity Wiz', href: 'https://gravitywiz.com/' }],
	},
	{
		title: 'Staff Software Engineer',
		company: 'Gatsby',
		desc: "Built integrations between the open-source Gatsby static site framework, Gatsby Cloud hosting platform, and third-party services.",
		links: [{ name: 'Gatsby', href: 'https://www.gatsbyjs.com/' }],
		note: '(acquired by Netlify)',
	},
	{
		title: 'Founder (technical)',
		company: 'Hello Deco',
		desc: 'Built a monetized side project that turned Notion into a (nearly) full-fledged email inbox and contact-management platform.',
		links: [{ name: 'Hello Deco', href: 'https://github.com/hellodeco/deco-api' }],
		note: '(archived)',
	},
	{
		title: 'Software Engineer',
		company: 'WP Engine / LocalWP',
		desc: "Owned end-to-end add-on development for Local WP (Electron/TypeScript desktop app) with 90K+ monthly active users.",
		links: [
			{ name: 'WP Engine', href: 'https://wpengine.com/' },
			{ name: 'LocalWP', href: 'https://localwp.com/' },
		],
	},
	{
		title: 'Software Engineer',
		company: 'ISYS Technologies',
		desc: 'Built data visualization library that saved company 400K annually. Built frontends in React and Angular.',
	},
	{
		title: 'Junior Software Engineer',
		company: 'Groundbreaker',
		desc: 'Built frontend, component library and APIs for a complete product rebuild.',
		links: [{ name: 'Groundbreaker', href: 'https://groundbreaker.co' }],
		note: '(acquired by Janover)',
	},
];

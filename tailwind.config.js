/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./sections/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				gold: "#F8DDA4",
				roux: "#813405",
			},
			backgroundImage: {
				"background-sand": "url('/images/backgroundSand.jpg')",
				"background-bar": "url('/images/barBackground.jpg')",
			},
		},
	},
	plugins: [],
}

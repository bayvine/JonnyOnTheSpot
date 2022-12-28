import { SliceZone } from "@prismicio/react"
import Script from "next/script"

import { createClient } from "../prismicio"
import { components } from "../slices"
import Navigation from "../sections/Navigation"
import Footer from "../sections/Footer"
import Head from "next/head"

const Page = ({ page, navigation, settings }) => {
	console.log(page.data.site_image)
	return (
		<div className="overflow-x-hidden">
			<Head>
				<title>{page.data.site_title}</title>
				<meta property="og:locale" content="en_US"></meta>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
				<meta name="description" content={page.data.site_description}></meta>
				<meta
					property="og:url"
					content="https://jonnyonthespot.netlify.app/"
				></meta>
				<meta
					name="robots"
					content="index, follow, max-video-preview:-1, max-snippet:-1, max-image-preview:large"
				></meta>
				<meta property="og:image:type" content="image/png"></meta>
				<meta property="og:image" content={page.data.site_image.url}></meta>
				<meta
					property="og:image:width"
					content={page.data.site_image.dimensions.width}
				></meta>
				<meta
					property="og:image:height"
					content={page.data.site_image.dimensions.height}
				></meta>
			</Head>
			<Navigation pageData={page.data} />
			<SliceZone
				slices={page.data.slices}
				components={components}
				context={page.data}
			/>
			<Script
				src="https://static.cdn.prismic.io/prismic.js?new=true&repo=jonnyonthespot"
				async
				defer
			/>
			<Footer pageData={page.data} />
		</div>
	)
}

export default Page

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData })

	const page = await client.getSingle("home_page")

	return {
		props: {
			page,
		},
	}
}

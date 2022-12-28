import { SliceZone } from "@prismicio/react"
import Script from "next/script"

import { createClient } from "../prismicio"
import { components } from "../slices"
import Navigation from "../sections/Navigation"
import Footer from "../sections/Footer"
import Head from "next/head"

const Page = ({ page, navigation, settings }) => {
	return (
		<div className="overflow-x-hidden">
			<Head>
				<title>{page.data.site_title}</title>
				<meta name="description" content={page.data.site_description}></meta>
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

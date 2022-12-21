import { SliceZone } from "@prismicio/react"
import Script from "next/script"

import { createClient } from "../prismicio"
import { components } from "../slices"

const Page = ({ page, navigation, settings }) => {
	return (
		<div className="overflow-x-hidden">
			<SliceZone slices={page.data.slices} components={components} />
			<Script
				src="https://static.cdn.prismic.io/prismic.js?new=true&repo=jonnyonthespot"
				async
				defer
			/>
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

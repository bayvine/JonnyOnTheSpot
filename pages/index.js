import { PrismicRichText, SliceZone } from "@prismicio/react"
import Script from "next/script"
import * as prismicH from "@prismicio/helpers"
import { createClient } from "../prismicio"
import { components } from "../slices"
import Navigation from "../sections/Navigation"
import Footer from "../sections/Footer"
import Head from "next/head"

const Page = ({ page, navigation, settings }) => {
	const localBusinessFromPrismic = page.data.localbusiness[0]
	const faqs =
		(Array.isArray(page.data.slices3[0].items) && page.data.slices3[0].items) ||
		[]
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: localBusinessFromPrismic.name,
		image: prismicH.asImageSrc(localBusinessFromPrismic.image),
		paymentAccepted: localBusinessFromPrismic.paymentaccepted,
		areaServed: localBusinessFromPrismic.areaserved,
		telephone: localBusinessFromPrismic.telephone,
		priceRange: localBusinessFromPrismic.pricerange,
		email: localBusinessFromPrismic.email,
		sameAs: localBusinessFromPrismic.sameas,
		sameAs: localBusinessFromPrismic.sameas2,
		openingHours: localBusinessFromPrismic.openinghours,
		address: localBusinessFromPrismic.address,
	}

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			faqs.map((item, _) => {
				return {
					"@type": "Question",
					name: prismicH.asText(item.question),
					acceptedAnswer: {
						"@type": "Answer",
						text: prismicH.asHTML(item.answer),
					},
				}
			}),
		],
	}

	return (
		<div className="overflow-x-hidden">
			<Head>
				<link rel="icon" href="/favicon.ico"></link>
				<title>{page.data.site_title}</title>

				<meta property="og:locale" content="en_US"></meta>
				<meta property="og:title" content={page.data.site_title}></meta>
				<meta
					property="og:description"
					content={page.data.site_description}
				></meta>
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

				<meta name="twitter:card" content="summary_large_image"></meta>
				<meta name="twitter:image" content={page.data.site_image.url}></meta>
				<meta
					name="twitter:description"
					content={page.data.site_description}
				></meta>
				<meta property="twitter:title" content={page.data.site_title}></meta>
				<meta
					property="og:image:width"
					content={page.data.site_image.dimensions.width}
				></meta>
				<meta
					property="og:image:height"
					content={page.data.site_image.dimensions.height}
				></meta>
				<link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(localBusinessSchema),
					}}
				></script>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(faqSchema),
					}}
				></script>
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

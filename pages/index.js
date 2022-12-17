import Head from "next/head"
import AboutSection from "../sections/AboutSection"
import ContactSection from "../sections/ContactSection"
import Footer from "../sections/Footer"
import GallerySection from "../sections/GallerySection"
import IntroSection from "../sections/IntroSection"
import Navigation from "../sections/Navigation"
import PriceSection from "../sections/PriceSection"
import ServicesSection from "../sections/ServicesSection"
import TestimonialSection from "../sections/TestimonialSection"

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<Head>
				<title>JonnyOnTheSpot | Mobile Bar serving Bay Area, CA</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navigation />
			<IntroSection />
			<AboutSection />
			<ServicesSection />
			<PriceSection />
			<TestimonialSection />
			<GallerySection />
			<ContactSection />
			<Footer />
		</div>
	)
}

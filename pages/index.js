import AboutSection from "../sections/AboutSection"
import GallerySection from "../sections/GallerySection"
import IntroSection from "../sections/IntroSection"
import PriceSection from "../sections/PriceSection"
import ServicesSection from "../sections/ServicesSection"
import TestimonialSection from "../sections/TestimonialSection"

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<IntroSection />
			<AboutSection />
			<ServicesSection />
			<PriceSection />
			<TestimonialSection />
			<GallerySection />
		</div>
	)
}

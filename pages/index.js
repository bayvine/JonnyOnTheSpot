import AboutSection from "../sections/AboutSection"
import IntroSection from "../sections/IntroSection"
import PriceSection from "../sections/PriceSection"
import ServicesSection from "../sections/ServicesSection"

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<IntroSection />
			<AboutSection />
			<ServicesSection />
			<PriceSection />
		</div>
	)
}

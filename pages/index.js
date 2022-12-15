import AboutSection from "../sections/AboutSection"
import IntroSection from "../sections/IntroSection"
import PriceSection from "../sections/PriceSection"
import ServicesSection from "../sections/ServicesSection"

export default function Home() {
	return (
		<>
			<IntroSection />
			<AboutSection />
			<ServicesSection />
			<PriceSection />
		</>
	)
}

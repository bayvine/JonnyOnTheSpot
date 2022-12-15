import React from "react"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"

const PriceSection = () => {
	return (
		<SectionWrapper className="px-4 py-8 mt-20 bg-background-bar">
			<SectionTitle
				subtitle="Price sheet"
				title="Tailored Price list"
				negative
			/>
		</SectionWrapper>
	)
}

export default PriceSection

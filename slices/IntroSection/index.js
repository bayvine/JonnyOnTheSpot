import React from "react"
import IntroSectionTemplate from "../../sections/IntroSection"
/**
 * @typedef {import("@prismicio/client").Content.IntroSectionSlice} IntroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IntroSectionSlice>} IntroSectionProps
 * @param { IntroSectionProps }
 */
const IntroSection = ({ slice, context }) => {
	return <IntroSectionTemplate slice={slice} pageData={context} />
}

export default IntroSection

import React from "react"
import TestimonialSectionTemplate from "../../sections/TestimonialSection"
/**
 * @typedef {import("@prismicio/client").Content.TestimonialSectionSlice} TestimonialSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSectionSlice>} TestimonialSectionProps
 * @param { TestimonialSectionProps }
 */
const TestimonialSection = ({ slice }) => (
	<TestimonialSectionTemplate slice={slice} />
)

export default TestimonialSection

import React from "react"
import AboutSectionTemplate from "../../sections/AboutSection"

/**
 * @typedef {import("@prismicio/client").Content.AboutSectionSlice} AboutSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSectionSlice>} AboutSectionProps
 * @param { AboutSectionProps }
 */
const AboutSection = ({ slice }) => <AboutSectionTemplate slice={slice} />

export default AboutSection

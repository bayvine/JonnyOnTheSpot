import React from "react"
import ServicesSectionTemplate from "../../sections/ServicesSection"
/**
 * @typedef {import("@prismicio/client").Content.ServicesSectionSlice} ServicesSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSectionSlice>} ServicesSectionProps
 * @param { ServicesSectionProps }
 */
const ServicesSection = ({ slice }) => <ServicesSectionTemplate slice={slice} />

export default ServicesSection

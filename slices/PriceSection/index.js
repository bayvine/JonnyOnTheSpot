import React from "react"
import PriceSectionTemplate from "../../sections/PriceSection"
/**
 * @typedef {import("@prismicio/client").Content.PriceSectionSlice} PriceSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PriceSectionSlice>} PriceSectionProps
 * @param { PriceSectionProps }
 */
const PriceSection = ({ slice }) => <PriceSectionTemplate slice={slice} />

export default PriceSection

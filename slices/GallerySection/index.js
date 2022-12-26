import React from "react"
import GallerySectionTemplate from "../../sections/GallerySection"
/**
 * @typedef {import("@prismicio/client").Content.GallerySectionSlice} GallerySectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySectionSlice>} GallerySectionProps
 * @param { GallerySectionProps }
 */
const GallerySection = ({ slice, context }) => (
	<GallerySectionTemplate slice={slice} pageData={context} />
)

export default GallerySection

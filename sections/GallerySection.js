import React from "react"
import { FaInstagram } from "react-icons/fa"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"

const GallerySection = () => {
	return (
		<SectionWrapper className="px-4 py-8 mt-15">
			<div className="flex flex-col-reverse gap-8">
				<a
					target="_blank"
					rel="noreferrer noopener"
					className="flex items-center gap-2 text-xl underline w-fit text-roux"
					href="https://www.instagram.com/jonnyonthespot_mobilebar/"
				>
					<FaInstagram className="text-roux" size={30} />
					Visit our Instagram!
				</a>
				<SectionTitle title="Previous events" subtitle="gallery" />
			</div>

			<div className="grid grid-cols-2 gap-2 my-8">
				<img src="images/serviceMojito.jpg" />
				<img src="images/serviceMojito.jpg" />
				<img src="images/serviceMojito.jpg" className="col-span-2 row-span-2" />
				<img src="images/serviceMojito.jpg" />
				<img src="images/serviceMojito.jpg" />
				<img src="images/serviceMojito.jpg" className="col-span-2 row-span-2" />
			</div>
		</SectionWrapper>
	)
}

export default GallerySection

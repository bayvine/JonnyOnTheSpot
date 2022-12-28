import { PrismicRichText, PrismicText } from "@prismicio/react"
import clsx from "clsx"
import React from "react"
import { FaInstagram } from "react-icons/fa"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"

const GallerySection = ({ slice, pageData }) => {
	return (
		<SectionWrapper className="px-4 py-8 mt-15">
			<div className="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between lg:items-end">
				{slice.primary.instagram_text && pageData.instagram_link?.url && (
					<a
						target="_blank"
						rel="noreferrer noopener"
						className="flex items-center gap-2 text-xl underline w-fit text-roux"
						href={pageData.instagram_link?.url}
					>
						<FaInstagram className="text-roux" size={30} />
						{slice.primary.instagram_text}
					</a>
				)}

				<SectionTitle
					title={<PrismicText field={slice.primary.title} />}
					subtitle={slice.primary.subtitle}
				/>
			</div>

			{Array.isArray(slice.items) && (
				<div className="grid grid-cols-2 gap-2 my-8 lg:grid-cols-3">
					{slice.items.map(({ gallery_item }, index) => {
						return (
							<img
								alt="Gallery item"
								src={gallery_item.url}
								width={gallery_item.width}
								height={gallery_item.height}
								key={index}
								className={clsx([
									index !== 0 &&
										index % 2 === 0 &&
										"col-span-2 row-span-2 lg:col-span-1 lg:row-span-1",
									index !== 0 && index % 3 === 0 && "lg:col-span-3",
								])}
							/>
						)
					})}
				</div>
			)}
		</SectionWrapper>
	)
}

export default GallerySection

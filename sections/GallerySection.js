import { PrismicText } from "@prismicio/react"
import clsx from "clsx"
import Image from "next/image"
import React from "react"
import { FaInstagram } from "react-icons/fa"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const GallerySection = ({ slice, pageData }) => {
	const cardWrapper = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.3,
				staggerChildren: 0.8,
			},
		},
	}

	return (
		<SectionWrapper className="px-4 py-8 mt-15">
			<motion.div
				initial="hidden"
				viewport={{ once: true }}
				whileInView="visible"
				variants={fadeIn}
				className="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between lg:items-end"
			>
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
			</motion.div>

			{Array.isArray(slice.items) && (
				<motion.div
					viewport={{ once: true }}
					initial="hidden"
					whileInView="visible"
					variants={cardWrapper}
					className="grid grid-cols-2 gap-2 my-8 lg:grid-cols-3"
				>
					{slice.items.map(({ gallery_item }, index) => {
						return (
							<motion.div
								transition={{
									duration: 0.8,
								}}
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className={clsx([
									index !== 0 &&
										index % 2 === 0 &&
										"sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-1",
									index !== 0 && index % 3 === 0 && "lg:col-span-3",
									"overflow-hidden",
								])}
								key={index}
							>
								<img
									loading="lazy"
									alt="Gallery item"
									src={gallery_item.url}
									width={gallery_item.width}
									height={gallery_item.height}
									className={clsx([
										"transition-all ease-in-out duration-75 hover:scale-[1.1]",
									])}
								/>
							</motion.div>
						)
					})}
				</motion.div>
			)}
		</SectionWrapper>
	)
}

export default GallerySection

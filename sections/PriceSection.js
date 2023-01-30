import { PrismicRichText, PrismicText } from "@prismicio/react"
import React, { useEffect } from "react"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"
import useIsMobile from "../utils/useIsMobile"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const PriceItem = ({
	imgSrc,
	imgAlt,
	title,
	description,
	price,
	height,
	width,
}) => {
	const card = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
		},
	}
	return (
		<motion.div
			variants={card}
			className="flex flex-col gap-8 lg:flex-row lg:items-center "
		>
			<img
				src={imgSrc}
				alt={imgAlt}
				className="w-20 h-20 bg-white "
				height={height}
				width={width}
			/>
			<div className=" lg:max-w-[420px] lg:w-[420px] lg:h-full">
				<span className="text-2xl uppercase text-gold font-title">{title}</span>
				<span className="max-w-xs text-lg lg:inline-block text-bold">
					{description}
				</span>
			</div>
			<div className="text-2xl uppercase  text-gold font-title lg:w-[200px]">
				<span>{price}</span>
			</div>
		</motion.div>
	)
}

const PriceSection = ({ slice }) => {
	const isMobile = useIsMobile()
	useEffect(() => {}, [isMobile])

	const priceSection = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.3,
				staggerChildren: 0.1,
			},
		},
	}
	return (
		<SectionWrapper
			className="relative px-4 py-8 mt-20 bg-right bg-background-bar lg:py-12"
			id="pricesheet"
		>
			<SectionTitle
				subtitle={slice.primary.subtitle}
				title={<PrismicText field={slice.primary.title} />}
				negative
				hasUnderline
				align={isMobile ? "left" : "center"}
			/>
			<motion.div
				viewport={{ once: true }}
				initial="hidden"
				whileInView="visible"
				variants={priceSection}
				className="relative z-10 flex flex-wrap my-8 text-white gap-14 sm:w-full lg:grid lg:grid-cols-2 lg:my-16 lg:justify-center"
			>
				{Array.isArray(slice.items) &&
					slice.items.map((price, index) => {
						return (
							<PriceItem
								key={index}
								imgSrc={price.price_item_image?.url || ""}
								imgAlt={price.price_item_image?.alt || ""}
								height={price.price_item_image?.dimensions?.height || ""}
								width={price.price_item_image?.dimensions?.width || ""}
								title={price.price_item_title}
								description={
									<PrismicRichText field={price.price_item_description} />
								}
								price={price.price_item_price}
							/>
						)
					})}
			</motion.div>

			<motion.div
				initial="hidden"
				viewport={{ once: true }}
				whileInView="visible"
				variants={fadeIn}
				className="relative z-10 flex flex-col gap-4 text-white lg:flex-row lg:justify-between"
			>
				{slice.primary.accepted_payment_method_text && (
					<span>{slice.primary.accepted_payment_method_text}</span>
				)}
				{slice.primary.disclaimer_text && (
					<span>{slice.primary.disclaimer_text}</span>
				)}
			</motion.div>

			<div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
		</SectionWrapper>
	)
}

export default PriceSection

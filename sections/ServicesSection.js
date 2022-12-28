import React, { useEffect } from "react"
import SectionTitle from "../components/SectionTitle"
import useIsMobile from "../utils/useIsMobile"
import SectionWrapper from "../components/SectionWrapper"
import { PrismicRichText, PrismicText } from "@prismicio/react"
import Image from "next/image"
import Button from "../components/Button"
import { fadeIn } from "../utils/animations"
import { motion } from "framer-motion"

const ServiceCard = ({
	imgSrc,
	imgAlt,
	serviceTitle,
	serviceDescr,
	width,
	height,
}) => {
	const card = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
		},
	}
	const isMobile = useIsMobile()
	useEffect(() => {}, [isMobile])

	return (
		<motion.div
			variants={card}
			className="flex flex-col text-white bg-black rounded-lg h-80 xl:max-h-max xl:h-full lg:hover:!-translate-y-3 lg:!transition-all lg:hover:shadow-xl lg:!duration-100 lg:cursor-default"
		>
			<div className="relative flex items-center justify-center w-full rounded-t-lg h-1/2 xl:h-48 2xl:h-36">
				<h3 className="relative z-10 text-4xl text-center text-white uppercase font-title ">
					{serviceTitle}
				</h3>
				<div>
					<div className="absolute top-0 z-[5] left-0 w-full h-full bg-black/40 rounded-t-lg"></div>
					<Image
						placeholder="blur"
						blurDataURL={`${imgSrc}&blur=200`}
						width={width}
						height={height}
						aria-hidden
						src={imgSrc}
						alt={imgAlt}
						className="absolute top-0 left-0 object-cover object-center w-full h-full rounded-t-lg "
					/>
				</div>
			</div>
			<article className="w-full text-white bg-black rounded-b-lg h-1/2 xl:h-fit">
				<p className="p-4 xl:py-12 xl:text-lg">{serviceDescr}</p>
			</article>
		</motion.div>
	)
}
const ServicesSection = ({ slice }) => {
	const cardWrapper = {
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
		<SectionWrapper className="px-4 py-20 bg-white xl:py-8" id="services">
			<motion.div
				initial="hidden"
				viewport={{ once: true }}
				whileInView="visible"
				variants={fadeIn}
				className="xl:flex xl:flex-row xl:justify-between xl:items-baseline"
			>
				<SectionTitle
					title={<PrismicText field={slice.primary.title} />}
					subtitle={slice.primary.subtitle}
					className="xl:max-w-xl 2xl:max-w-2xl"
				/>
				<div className="py-8">
					<div className="lg:text-lg xl:max-w-lg 2xl:max-w-xl">
						<PrismicRichText field={slice.primary.service_description} />
					</div>
					{slice.primary.price_button_label && (
						<Button
							className="my-4"
							type="primary"
							onClick={() =>
								document
									.getElementById("pricesheet")
									.scrollIntoView({ behavior: "smooth" })
							}
						>
							{slice.primary.price_button_label}
						</Button>
					)}
				</div>
			</motion.div>

			<motion.div
				viewport={{ once: true }}
				initial="hidden"
				whileInView="visible"
				variants={cardWrapper}
				className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				{Array.isArray(slice.items) &&
					slice.items.map((service, index) => {
						return (
							<ServiceCard
								key={index}
								imgAlt={service.service_card_image.alt}
								imgSrc={service.service_card_image.url}
								serviceDescr={
									<PrismicText field={service.service_card_description} />
								}
								serviceTitle={service.service_card_title}
								height={service.service_card_image?.dimensions?.height || ""}
								width={service.service_card_image?.dimensions?.width || ""}
							/>
						)
					})}
			</motion.div>
		</SectionWrapper>
	)
}

export default ServicesSection

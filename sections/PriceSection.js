import { PrismicRichText, PrismicText } from "@prismicio/react"
import React, { useEffect } from "react"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"
import useIsMobile from "../utils/useIsMobile"

const PriceItem = ({ imgSrc, imgAlt, title, description, price }) => {
	return (
		<div className="flex flex-col gap-4 lg:flex-row lg:items-center">
			<img src={imgSrc} alt={imgAlt} className="w-20 h-20 bg-white " />
			<div>
				<h4 className="text-2xl uppercase text-gold font-title ">{title}</h4>
				<span className="text-lg text-bold">{description}</span>
			</div>
			<div className="text-3xl uppercase text-gold font-title ">{price}</div>
		</div>
	)
}

const PriceSection = ({ slice }) => {
	const isMobile = useIsMobile()
	useEffect(() => {}, [isMobile])
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
			<div className="relative z-10 flex flex-wrap gap-8 my-8 text-white sm:w-full lg:grid lg:grid-cols-2 lg:my-16 lg:justify-center">
				{Array.isArray(slice.items) &&
					slice.items.map((price, index) => {
						return (
							<PriceItem
								key={index}
								imgSrc={price.price_item_image?.url || ""}
								imgAlt={price.price_item_image?.alt || ""}
								title={price.price_item_title}
								description={
									<PrismicRichText field={price.price_item_description} />
								}
								price={price.price_item_price}
							/>
						)
					})}
			</div>

			<div className="relative z-10 flex flex-col gap-4 text-white lg:flex-row lg:justify-between">
				{slice.primary.accepted_payment_method_text && (
					<span>{slice.primary.accepted_payment_method_text}</span>
				)}
				{slice.primary.disclaimer_text && (
					<span>{slice.primary.disclaimer_text}</span>
				)}
			</div>

			<div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
		</SectionWrapper>
	)
}

export default PriceSection

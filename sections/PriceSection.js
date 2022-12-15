import React from "react"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"

const PriceItem = ({ imgSrc, imgAlt, title, description, price }) => {
	return (
		<div className="flex flex-col gap-4">
			<img src={imgSrc} alt={imgAlt} className="w-20 h-20 bg-white " />
			<div>
				<h4 className="text-2xl uppercase text-gold font-title ">{title}</h4>
				<span className="text-lg text-bold">{description}</span>
			</div>
			<div className="text-3xl uppercase text-gold font-title ">{price}</div>
		</div>
	)
}

const PriceSection = () => {
	const prices = [
		{
			image: {
				imgSrc: "",
				imgAlt: "",
			},
			priceTitle: "Price Item",
			priceDescription: "Price description",
			price: "$100/H",
		},
		{
			image: {
				imgSrc: "",
				imgAlt: "",
			},
			priceTitle: "Price Item",
			priceDescription: "Price description",
			price: "$100/H",
		},
		{
			image: {
				imgSrc: "",
				imgAlt: "",
			},
			priceTitle: "Price Item",
			priceDescription: "Price description",
			price: "$100/H",
		},
		{
			image: {
				imgSrc: "",
				imgAlt: "",
			},
			priceTitle: "Price Item",
			priceDescription: "Price description",
			price: "$100/H",
		},
		{
			image: {
				imgSrc: "",
				imgAlt: "",
			},
			priceTitle: "Price Item",
			priceDescription: "Price description",
			price: "$100/H",
		},
		{
			image: {
				imgSrc: "",
				imgAlt: "",
			},
			priceTitle: "Price Item",
			priceDescription: "Price description",
			price: "$100/H",
		},
		{
			image: {
				imgSrc: "",
				imgAlt: "",
			},
			priceTitle: "Price Item",
			priceDescription: "Price description",
			price: "$100/H",
		},
	]
	return (
		<SectionWrapper
			className="relative px-4 py-8 mt-20 bg-right bg-background-bar"
			id="pricesheet"
		>
			<SectionTitle
				subtitle="Price sheet"
				title="Tailored Price list"
				negative
				hasUnderline
			/>
			<div className="relative z-10 flex flex-wrap gap-8 my-8 text-white">
				{prices.map((price, index) => {
					return (
						<PriceItem
							key={index}
							imgSrc={price.image?.imgSrc || ""}
							imgAlt={price.image?.imgAlt || ""}
							title={price.priceTitle}
							description={price.priceDescription}
							price={price.price}
						/>
					)
				})}
			</div>

			<div className="relative z-10 flex flex-col gap-4 text-white">
				<span>We accept payments via Venmo, Paypal, Cash, or Check.</span>
				<span>Not including $100 deposit</span>
			</div>

			<div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
		</SectionWrapper>
	)
}

export default PriceSection

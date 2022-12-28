import { PrismicRichText, PrismicText } from "@prismicio/react"
import clsx from "clsx"
import React from "react"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"

const TestimonialCard = ({
	imgSrc,
	imgAlt,
	subtitle,
	quote,
	clientDescr,
	className,
}) => {
	return (
		<div
			className={clsx([
				"flex flex-col items-center gap-8 sm:items-start md:grid md:grid-cols-2 xl:flex xl:flex-row xl:gap-12",
				className,
			])}
		>
			<img
				src={imgSrc}
				alt={imgAlt}
				width={250}
				height={250}
				className="object-cover aspect-square lg:h-full xl:aspect-auto w-[250px] h-[265px]"
			/>
			<div className="flex flex-col gap-4 xl:max-w-xs">
				<span className="text-2xl font-bold uppercase text-roux font-title ">
					{subtitle}
				</span>
				<div>{quote}</div>
				<div className="flex items-center gap-4 text-lg">
					<hr className="w-1/4 h-1 bg-roux" />
					{clientDescr}
				</div>
			</div>
		</div>
	)
}
const TestimonialSection = ({ slice }) => {
	return (
		<SectionWrapper className="px-4 py-8 mt-20" id="testimonials">
			<SectionTitle
				subtitle={slice.primary.subtitle}
				title={<PrismicText field={slice.primary.title} />}
			/>
			<div className="grid grid-cols-1 gap-8 my-12 lg:grid-cols-1 xl:flex xl:flex-col xl:gap-24">
				{Array.isArray(slice.items) &&
					slice.items.map((item, index) => {
						return (
							<TestimonialCard
								key={index}
								imgSrc={item.testimonial_image.url}
								imgAlt={item.testimonial_image.alt}
								subtitle={item.testimonial_one_liner}
								quote={<PrismicRichText field={item.testimonial_description} />}
								clientDescr={item.testimonial_author}
								className={`${index == 1 && "xl:self-end"} ${
									index == slice.items.length - 1 && "xl:ml-14"
								}`}
							/>
						)
					})}
			</div>
		</SectionWrapper>
	)
}

export default TestimonialSection

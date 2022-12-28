import { PrismicRichText, PrismicText } from "@prismicio/react"
import React from "react"
import Check from "../components/Check"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"
import Image from "next/image"
import Button from "../components/Button"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const AboutSection = ({ slice }) => {
	const variant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				delay: 0.5,
			},
		},
	}
	return (
		<SectionWrapper className="py-24 bg-white 2xl:mt-12 xl:pt-44" id="about-us">
			<div className="xl:flex">
				<motion.div
					initial="hidden"
					viewport={{ once: true }}
					variants={variant}
					whileInView="visible"
					className="relative hidden overflow-hidden xl:block xl:shrink-0 xl:-mt-20 xl:-mr-16 2xl:-mt-24 xl:aspect-[896/1344] w-[400px] 2xl:w-[380px]"
				>
					<Image
						placeholder="blur"
						blurDataURL={`${slice.primary.about_us_image.url}&blur=200`}
						className="object-cover hover:scale-[1.1] transition-all duration-150 ease-in"
						src={slice.primary.about_us_image.url}
						width={slice.primary.about_us_image.dimensions.width}
						height={slice.primary.about_us_image.dimensions.height}
						alt={slice.primary.about_us_image.alt}
					/>
				</motion.div>
				<motion.div
					initial="hidden"
					viewport={{ once: true }}
					whileInView="visible"
					variants={fadeIn}
					className="relative px-4 py-8 text-white shadow-xl drop-shadow-xl md:px-12 bg-background-sand xl:py-10 2xl:p-20"
				>
					<SectionTitle
						hasUnderline
						title={slice.primary.title}
						subtitle={slice.primary.subtitle}
						align="left"
						negative
					/>

					<div className="relative z-10 py-10 xl:py-8">
						<PrismicRichText
							components={{
								list: ({ children }) => (
									<ul className="relative z-10 py-2">{children}</ul>
								),
								listItem: ({ children }) => (
									<li className="py-2">
										<span className="flex items-center gap-2 text-gold">
											<Check className="flex-shrink-0" /> {children}
										</span>
									</li>
								),
							}}
							field={slice.primary.about_us_description}
						/>
					</div>

					<div className="relative z-10 flex items-center gap-8 mt-4 2xl:mt-8">
						<Button
							type="primary"
							onClick={() =>
								document
									.getElementById("contact-us")
									.scrollIntoView({ behavior: "smooth" })
							}
						>
							{slice.primary.primary_button || "Contact us"}
						</Button>
						<Button
							type="secondary"
							onClick={() =>
								document
									.getElementById("pricesheet")
									.scrollIntoView({ behavior: "smooth" })
							}
						>
							{slice.primary.secondary_button || "Contact us"}
						</Button>
					</div>
					<div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
				</motion.div>
			</div>
		</SectionWrapper>
	)
}

export default AboutSection

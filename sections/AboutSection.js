import { PrismicRichText, PrismicText } from "@prismicio/react"
import clsx from "clsx"
import React from "react"
import Check from "../components/Check"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"

const AboutSection = ({ slice }) => {
	return (
		<SectionWrapper className="py-24 bg-white 2xl:mt-12 xl:pt-44" id="about-us">
			<div className="xl:flex">
				<div className="hidden xl:block xl:shrink-0 xl:-mt-20 xl:-mr-16 2xl:-mt-24">
					<img
						className="xl:aspect-[896/1344] w-[400px] 2xl:w-[380px]"
						src={slice.primary.about_us_image.url}
						alt={slice.primary.about_us_image.alt}
					/>
				</div>
				<div className="relative px-4 py-8 text-white md:px-12 bg-background-sand xl:py-10 2xl:p-20">
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
						<button
							className="px-6 py-3 text-black uppercase border border-transparent rounded-md font-title bg-gold"
							onClick={() =>
								document
									.getElementById("contact-us")
									.scrollIntoView({ behavior: "smooth" })
							}
						>
							{slice.primary.primary_button || "Contact us"}
						</button>
						<button
							className="px-6 py-3 uppercase border-2 rounded-md border-gold font-title text-gold bg-none"
							onClick={() =>
								document
									.getElementById("pricesheet")
									.scrollIntoView({ behavior: "smooth" })
							}
						>
							{slice.primary.secondary_button || "Contact us"}
						</button>
					</div>
					<div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
				</div>
			</div>
			<img
				className="relative hidden"
				src="images/pourIn.jpg"
				alt="Hand pouring in Jack daniels in cup"
			/>
		</SectionWrapper>
	)
}

export default AboutSection

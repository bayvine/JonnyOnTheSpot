import clsx from "clsx"
import React from "react"
import Check from "../components/Check"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"

const AboutSection = () => {
	const checks = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	]
	return (
		<SectionWrapper className="py-24 bg-white xl:pt-44" id="about-us">
			<div className="xl:flex">
				<div className="hidden xl:block xl:shrink-0 xl:-mt-20 xl:-mr-16">
					<img
						className=" xl:aspect-[896/1344] w-[400px] "
						src="images/pourIn.jpg"
						alt="Bartender pouring Jack daniels in a glass"
					/>
				</div>
				<div className="relative px-4 py-8 text-white md:px-12 bg-background-sand xl:py-10">
					<SectionTitle
						hasUnderline
						title="About us"
						subtitle="about us"
						align="left"
						negative
					/>
					<p className="relative z-10 py-10 xl:py-4">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<ul className="relative z-10 py-4">
						{checks.map((item, key) => (
							<li key={key}>
								<span className="flex items-center gap-2 text-gold">
									<Check className="flex-shrink-0" /> {item}
								</span>
							</li>
						))}
					</ul>
					<p className="relative z-10 py-10 xl:py-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam!
					</p>

					<div className="relative z-10 flex items-center gap-8 ">
						<button
							className="px-6 py-3 text-black uppercase border border-transparent rounded-md font-title bg-gold"
							onClick={() =>
								document
									.getElementById("contact-us")
									.scrollIntoView({ behavior: "smooth" })
							}
						>
							Contact us
						</button>
						<button
							className="px-6 py-3 uppercase border-2 rounded-md border-gold font-title text-gold bg-none"
							onClick={() =>
								document
									.getElementById("pricesheet")
									.scrollIntoView({ behavior: "smooth" })
							}
						>
							View prices
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

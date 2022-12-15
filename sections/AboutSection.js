import clsx from "clsx"
import React from "react"
import Check from "../components/Check"
import SectionWrapper from "../components/SectionWrapper"

const SectionTitle = ({
	subtitle,
	title,
	align = "left" || "center" || "right",
	negative = false,
	hasUnderline = false,
	className,
}) => {
	return (
		<h2
			className={clsx([
				`relative z-10 flex flex-col text-6xl uppercase gap-2`,
				align == "left" && "text-left",
				align == "center" && "text-center",
				align == "right" && "text-right",
				negative && "text-white",
				className,
			])}
		>
			<span className={clsx([`text-3xl`, negative && "text-gold"])}>
				{subtitle}
			</span>
			{title}
			{hasUnderline && (
				<hr
					className={clsx([
						negative && "bg-gold",
						"h-0.5 w-full bg-white mt-2",
					])}
				/>
			)}
		</h2>
	)
}
const AboutSection = () => {
	const checks = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	]
	return (
		<SectionWrapper className="gap-8 py-20 bg-white ">
			<div className="relative px-4 py-8 text-white bg-background-sand">
				<SectionTitle
					hasUnderline
					title="About us"
					subtitle="about us"
					align="left"
					negative
				/>
				<p className="relative z-10 py-10">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
				<p className="relative z-10 py-10">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam!
				</p>

				<div className="relative z-10 flex items-center gap-8 ">
					<button className="px-6 py-3 text-black uppercase border border-transparent rounded-md bg-gold">
						Contact us
					</button>
					<button className="px-6 py-3 uppercase border-2 rounded-md border-gold text-gold bg-none">
						View prices
					</button>
				</div>
				<div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
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

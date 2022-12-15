import React, { useEffect } from "react"
import SectionTitle from "../components/SectionTitle"
import useIsMobile from "../utils/useIsMobile"
import SectionWrapper from "../components/SectionWrapper"

const ServiceCard = ({ imgSrc, imgAlt, serviceTitle, serviceDescr }) => {
	const isMobile = useIsMobile()
	useEffect(() => {}, [isMobile])

	return (
		<div className="flex flex-col text-white bg-black rounded-lg h-80">
			<div className="relative flex items-center justify-center w-full rounded-t-lg h-1/2">
				<h3 className="relative z-10 text-4xl text-center text-white uppercase">
					{serviceTitle}
				</h3>
				<div>
					<div className="absolute top-0 z-[5] left-0 w-full h-full bg-black/40 rounded-t-lg"></div>
					<img
						src={imgSrc}
						alt={imgAlt}
						className="absolute top-0 left-0 object-cover object-center w-full h-full rounded-t-lg "
					/>
				</div>
			</div>
			<article className="w-full text-white bg-black rounded-b-lg h-1/2">
				<p className="p-4">{serviceDescr}</p>
			</article>
		</div>
	)
}
const ServicesSection = () => {
	const services = [
		{
			title: "service",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			image: {
				imgSrc: "images/serviceBottles.jpg",
				imgAlt: "Winebottles in a bucket of ice",
			},
		},
		{
			title: "service",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			image: {
				imgSrc: "images/serviceChatter.jpg",
				imgAlt:
					"Partying people talking to each other while holding drinks in their hands",
			},
		},
		{
			title: "service",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			image: {
				imgSrc: "images/serviceCheers.jpg",
				imgAlt: "People cheering each other by raising their glasses",
			},
		},
		{
			title: "service",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			image: {
				imgSrc: "images/serviceMojito.jpg",
				imgAlt: "Glass of Mojito drink",
			},
		},
	]
	return (
		<SectionWrapper className="px-4 py-20 bg-white" id="services">
			<SectionTitle
				title="BARTENDING SERVICES TAILORED TO YOUR NEEDS"
				subtitle="our services"
			/>
			<div className="py-8">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				</p>
				<button
					onClick={() =>
						document
							.getElementById("pricesheet")
							.scrollIntoView({ behavior: "smooth" })
					}
					className="px-6 py-3 mt-4 text-black uppercase border border-transparent rounded-md bg-gold"
				>
					View prices
				</button>
			</div>
			<div className="flex flex-col gap-4">
				{services.map((service, index) => {
					return (
						<ServiceCard
							key={index}
							imgAlt={service.image.imgAlt}
							imgSrc={service.image.imgSrc}
							serviceDescr={service.description}
							serviceTitle={service.title}
						/>
					)
				})}
			</div>
		</SectionWrapper>
	)
}

export default ServicesSection

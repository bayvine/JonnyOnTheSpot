import React, { useEffect, useRef } from "react"
import GoldenHorizontalLine from "../components/GoldenHorizontalLine"
import SectionWrapper from "../components/SectionWrapper"
import { FaFacebook, FaYelp, FaInstagram } from "react-icons/fa"
import { PrismicRichText, PrismicText } from "@prismicio/react"
import * as prismicH from "@prismicio/helpers"
import Button from "../components/Button"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const IntroSection = ({ slice, pageData }) => {
	const videoRef = useRef(null)
	const title = prismicH.asText(slice.primary.title)
	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.3,
				staggerChildren: 0.08,
			},
		},
	}
	const letter = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
		},
	}

	const videoAnimation = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.8,
			},
		},
	}

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.5
			videoRef.current.play()
		}
	}, [])
	return (
		<SectionWrapper className="relative top-0 left-0 min-h-screen sm:min-h-[750px] sm:flex sm:justify-center sm:items-center bg-black md:py-20">
			<div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-2 p-4 lg:gap-4 xl:max-w-4xl xl:mx-auto">
				<motion.h1
					variants={sentence}
					initial="hidden"
					animate="visible"
					className="mt-auto overflow-hidden text-4xl font-black text-white uppercase w-fit font-title md:text-6xl xl:text-9xl xl:font-black"
				>
					{title.split("").map((char, index) => {
						return (
							<motion.span key={char + "-" + index} variants={letter}>
								{char}
							</motion.span>
						)
					})}
				</motion.h1>
				<GoldenHorizontalLine />
				<motion.span
					className="text-center text-white uppercase font-title xl:text-4xl"
					variants={fadeIn}
					initial="hidden"
					animate="visible"
				>
					<PrismicRichText
						field={slice.primary.subtitle}
						components={{
							strong: ({ children }) => (
								<span className="text-gold">{children}</span>
							),
							em: ({ children }) => (
								<span className="underline">{children}</span>
							),
						}}
					/>
				</motion.span>
				<motion.div
					className="pt-12 text-white 2xl:text-xl"
					variants={fadeIn}
					initial="hidden"
					animate="visible"
				>
					{Array.isArray(slice.items) &&
						slice.items.map((service, index) => {
							return (
								<span key={index}>
									<PrismicText field={service.summarized_service} />
									{index != slice.items.length - 1 && " • "}
								</span>
							)
						})}
				</motion.div>
				<motion.div
					className="flex items-center gap-8 pt-12"
					variants={fadeIn}
					initial="hidden"
					animate="visible"
				>
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
						{slice.primary.secondary_button || "View prices"}
					</Button>
				</motion.div>
				<div className="flex justify-center gap-2 mt-auto justify-self-end md:gap-4">
					{pageData.instagram_link?.url && (
						<a
							href={pageData.instagram_link?.url}
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Instagram"
						>
							<FaInstagram size={30} color="#F8DDA4" />
						</a>
					)}

					{pageData.facebook_link?.url && (
						<a
							href={pageData.facebook_link?.url}
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Facebook"
						>
							<FaFacebook size={30} color="#F8DDA4" />
						</a>
					)}

					{pageData.yelp_link?.url && (
						<a
							href={pageData.yelp_link?.url}
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Yelp"
						>
							<FaYelp size={30} color="#F8DDA4" />
						</a>
					)}
				</div>
			</div>
			<div className="overflow-x-hidden overflow-y-hidden">
				<div className="absolute right-0 bottom-0 bg-black/50 z-[1] min-w-full min-h-full overflow-hidden"></div>
				<motion.video
					variants={videoAnimation}
					initial="hidden"
					animate="visible"
					preload="auto"
					ref={videoRef}
					autoPlay
					muted
					loop
					id="myVideo"
					className="absolute bottom-0 right-0 object-cover min-w-full min-h-full overflow-hidden background-black"
				>
					<source src={slice.primary.video_background.url} type="video/webm" />
					<p>
						To view this video please enable JavaScript, and consider upgrading
						to a web browser that{" "}
						<a href="https://videojs.com/html5-video-support/" target="_blank">
							supports HTML5 video
						</a>
					</p>
				</motion.video>
			</div>
		</SectionWrapper>
	)
}

export default IntroSection

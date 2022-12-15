import React, { useEffect, useRef } from "react"
import GoldenHorizontalLine from "../components/GoldenHorizontalLine"
import SectionWrapper from "../components/SectionWrapper"
import { FaFacebook, FaYelp, FaInstagram } from "react-icons/fa"

const IntroSection = () => {
	const videoRef = useRef(null)
	const services = ["Cocktails", "Non-alcoholic drinks", "Full-setup"]

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.5
		}
	}, [])
	return (
		<SectionWrapper className="relative top-0 left-0 flex items-center justify-center min-h-screen bg-black ">
			<div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-2 p-4">
				<h1 className="mt-auto overflow-hidden text-4xl font-black text-white uppercase w-fit">
					JonnyOnTheSpot
				</h1>
				<GoldenHorizontalLine />
				<p className="font-bold text-center text-white uppercase">
					on the spot bartending for weddings and private events serving the bay
					area, ca
				</p>
				<div className="pt-12 text-white">
					{services.map((service, index) => {
						return (
							<span key={index}>
								{service}
								{index != services.length - 1 && " • "}
							</span>
						)
					})}
				</div>
				<div className="flex items-center gap-8 pt-12">
					<button className="uppercase rounded-md bg-[#F8DDA4] px-6 py-3 border border-transparent">
						Contact us
					</button>
					<button className="uppercase rounded-md border-2 border-[#F8DDA4] text-[#F8DDA4] px-6 py-3 bg-none">
						View prices
					</button>
				</div>
				<div className="flex justify-center gap-2 mt-auto justify-self-end">
					<FaInstagram size={30} color="#F8DDA4" />
					<FaFacebook size={30} color="#F8DDA4" />
					<FaYelp size={30} color="#F8DDA4" />
				</div>
			</div>
			<div className="overflow-x-hidden overflow-y-hidden">
				<div className="absolute right-0 bottom-0 bg-black/50 z-[1] min-w-full min-h-full overflow-hidden"></div>
				<video
					ref={videoRef}
					autoPlay
					muted
					loop
					id="myVideo"
					className="absolute bottom-0 right-0 object-cover min-w-full min-h-full overflow-hidden"
				>
					<source src="videos/shaking-cocktail.mp4" type="video/mp4" />
				</video>
			</div>
		</SectionWrapper>
	)
}

export default IntroSection

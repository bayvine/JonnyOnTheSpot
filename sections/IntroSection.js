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
		<SectionWrapper className="min-h-screen relative top-0 left-0 bg-black flex items-center justify-center border ">
			<div className="flex relative z-20 justify-center min-h-screen flex-col gap-2 items-center p-4">
				<h1 className="text-4xl font-black uppercase text-white mt-auto overflow-hidden">
					JonnyOnTheSpot
				</h1>
				<GoldenHorizontalLine />
				<p className="text-center uppercase font-bold text-white">
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
				<div className="pt-12 flex items-center gap-8">
					<button className="uppercase rounded-md bg-[#F8DDA4] px-6 py-3 border border-transparent">
						Contact us
					</button>
					<button className="uppercase rounded-md border-2 border-[#F8DDA4] text-[#F8DDA4] px-6 py-3 bg-none">
						View prices
					</button>
				</div>
				<div className="flex justify-center gap-2  mt-auto  justify-self-end">
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
					className="absolute right-0 bottom-0 min-w-full min-h-full object-cover overflow-hidden"
				>
					<source src="videos/shaking-cocktail.mp4" type="video/mp4" />
				</video>
			</div>
		</SectionWrapper>
	)
}

export default IntroSection

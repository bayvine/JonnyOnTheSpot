import clsx from "clsx"
import Link from "next/link"
import React, { useState } from "react"
import { FaHamburger } from "react-icons/fa"
import SectionWrapper from "../components/SectionWrapper"

const Hamburger = ({ handleClick, closed }) => {
	return (
		<button onClick={handleClick} className="md:hidden">
			{closed ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6 text-gold"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6 text-gold"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			)}
		</button>
	)
}
const Navigation = () => {
	const [mobileMenu, setMobileMenu] = useState(false)
	const handleMenu = () => setMobileMenu((prev) => !prev)
	return (
		<>
			<nav className="fixed top-0 left-0 z-40 w-full text-white bg-black">
				<section
					id="navigation"
					className="flex items-center justify-between w-full px-4 py-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl sm:mx-auto"
				>
					<div className="text-xl uppercase font-title text-gold w-fit">
						JonnyOnTheSpot
					</div>
					<div className="">
						<ul className="hidden md:flex md:items-center md:gap-4 xl:gap-8">
							<li>
								<Link href="#about-us">About us</Link>
							</li>
							<li>
								<Link href="#services">Services</Link>
							</li>
							<li>
								<Link href="#pricesheet">Price sheet</Link>
							</li>
							<li>
								<Link href="#testimonials">Testimonials</Link>
							</li>
							<li>
								<button
									onClick={() => {
										document
											.getElementById("contact-us")
											.scrollIntoView({ behavior: "smooth" })
									}}
									className="uppercase rounded-md bg-[#F8DDA4]  md:px-6 px-10 w-full text-black py-3 border border-transparent font-title "
								>
									Contact us
								</button>
							</li>
						</ul>
						<Hamburger handleClick={() => setMobileMenu((prev) => !prev)} />
					</div>
				</section>
			</nav>
			<div
				className={clsx([
					"fixed  transition-transform ease-linear duration-150 left-0 top-0 w-full h-full bg-black z-50 text-white",
					mobileMenu ? "translate-y-0" : "-translate-y-[200%]",
				])}
			>
				<div className="flex items-center justify-between w-full px-4 py-4">
					<div className="text-xl uppercase text-gold font-title">
						JONNYONTHESPOT
					</div>
					<div>
						<Hamburger
							closed
							handleClick={() => setMobileMenu((prev) => !prev)}
						/>
					</div>
				</div>
				<div className="flex items-start justify-center w-full h-full mt-20">
					<ul className="flex flex-col justify-center gap-8 text-4xl text-center sm:text-lg">
						<li>
							<Link onClick={handleMenu} href="#about-us">
								About us
							</Link>
						</li>
						<li>
							<Link onClick={handleMenu} href="#services">
								Services
							</Link>
						</li>
						<li>
							<Link onClick={handleMenu} href="#pricesheet">
								Price sheet
							</Link>
						</li>
						<li>
							<Link onClick={handleMenu} href="#testimonials">
								Testimonials
							</Link>
						</li>
						<li>
							<button
								onClick={() => {
									handleMenu()
									document
										.getElementById("contact-us")
										.scrollIntoView({ behavior: "smooth" })
								}}
								className="uppercase rounded-md bg-[#F8DDA4] px-10 w-full text-black py-3 border border-transparent font-title "
							>
								Contact us
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navigation

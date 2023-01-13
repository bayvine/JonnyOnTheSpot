import clsx from "clsx"
import Link from "next/link"
import React, { useState } from "react"
import Button from "../components/Button"

const NavItems = ({ pageData }) => {
	return (
		<ul className="hidden lg:flex md:items-center md:gap-4 xl:gap-8">
			<li>
				<Link href="#about-us" scroll={true} className="underline-hover">
					About us
				</Link>
			</li>
			<li>
				<Link href="#services" scroll={true} className="underline-hover">
					Services
				</Link>
			</li>
			<li>
				<Link href="#pricesheet" scroll={true} className="underline-hover">
					Price sheet
				</Link>
			</li>
			<li>
				<Link href="#testimonials" scroll={true} className="underline-hover">
					Testimonials
				</Link>
			</li>
			<li>
				<Button
					type="primary"
					onClick={() => {
						document
							.getElementById("contact-us")
							.scrollIntoView({ behavior: "smooth" })
					}}
				>
					{pageData.cta_text}
				</Button>
			</li>
		</ul>
	)
}

const MobileNavWrapper = ({ pageData, handleMenu }) => {
	return (
		<div className="flex items-start justify-center w-full h-full mt-20">
			<ul className="flex flex-col justify-center gap-8 text-center">
				<li>
					<Link
						onClick={handleMenu}
						href="#about-us"
						className="underline-hover"
					>
						About us
					</Link>
				</li>
				<li>
					<Link
						onClick={handleMenu}
						href="#services"
						className="underline-hover"
					>
						Services
					</Link>
				</li>
				<li>
					<Link
						onClick={handleMenu}
						href="#pricesheet"
						className="underline-hover"
					>
						Price sheet
					</Link>
				</li>
				<li>
					<Link
						onClick={handleMenu}
						href="#testimonials"
						className="underline-hover"
					>
						Testimonials
					</Link>
				</li>
				<li>
					<Button
						type="primary"
						onClick={() => {
							handleMenu()
							document
								.getElementById("contact-us")
								.scrollIntoView({ behavior: "smooth" })
						}}
					>
						{pageData.cta_text}
					</Button>
				</li>
			</ul>
		</div>
	)
}

const Hamburger = ({ handleClick, closed }) => {
	return (
		<button
			onClick={handleClick}
			className="lg:hidden"
			aria-label="Click to open menu"
		>
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
const Navigation = ({ pageData }) => {
	const [mobileMenu, setMobileMenu] = useState(false)
	const handleMenu = () => setMobileMenu((prev) => !prev)
	return (
		<>
			<nav className="fixed top-0 left-0 z-40 w-full text-white bg-black">
				<section
					id="navigation"
					className="flex items-center justify-between w-full px-4 py-4 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl sm:mx-auto"
				>
					<button
						className="text-xl uppercase font-title text-gold w-fit"
						onClick={() =>
							window.scrollTo({
								top: 0,
							})
						}
					>
						<img
							alt={pageData.image_logo.alt}
							width=""
							height=""
							src={pageData.image_logo.url}
							className={`aspect-[${pageData.image_logo.dimensions.width}/${pageData.image_logo.dimensions.height}] w-32`}
						/>
					</button>
					<div className="">
						<NavItems pageData={pageData} />
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
					<div>
						<img
							alt={pageData.image_logo.alt}
							width=""
							height=""
							src={pageData.image_logo.url}
							className={`aspect-[${pageData.image_logo.dimensions.width}/${pageData.image_logo.dimensions.height}] w-40`}
						/>
					</div>
					<div>
						<Hamburger
							closed
							handleClick={() => setMobileMenu((prev) => !prev)}
						/>
					</div>
				</div>
				<MobileNavWrapper pageData={pageData} handleMenu={handleMenu} />
			</div>
		</>
	)
}

export default Navigation

import Link from "next/link"
import React from "react"
import SectionWrapper from "../components/SectionWrapper"

const Footer = () => {
	return (
		<footer>
			<SectionWrapper className="relative px-4 pt-12 pb-4 text-white bg-black">
				<div>
					<hr className="hidden" />
					<div className="flex flex-col items-center">
						<h4 className="text-3xl font-bold uppercase text-gold">
							JONNYONTHESPOT ©
						</h4>
						<span className="text-gold">
							Mobile Bar Company serving Bay Area, CA
						</span>
					</div>
					<hr className="hidden" />
				</div>
				<div className="flex flex-col gap-8 my-12">
					<div>
						<h5 className="py-2 text-xl">JonnyOnTheSpot ©</h5>
						<ul>
							<li>
								Phone number:{" "}
								<a href="tel:926-321-6569" className="underline w-fit">
									926-321-6569
								</a>
							</li>
							<li>Business hours: 8AM to 6PM Weekly</li>
							<li>
								Email:{" "}
								<a
									href="emailto:bronnylang@outlook.com"
									className="underline w-fit"
								>
									bronnylang@outlook.com
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h5 className="py-2 text-xl">Quicklinks</h5>
						<ul className="underline w-fit">
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
								<Link href="#contact-us">Get a quote</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="text-sm text-center text-white/80">
					© 2023 JonnyOnTheSpot All rights reserved
				</div>
			</SectionWrapper>
		</footer>
	)
}

export default Footer

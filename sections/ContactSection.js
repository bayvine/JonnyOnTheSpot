import { PrismicRichText, PrismicText } from "@prismicio/react"
import React, { useState } from "react"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"
import useIsMobile from "../utils/useIsMobile"

const ContactSection = ({ slice }) => {
	const isMobile = useIsMobile()
	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState(false)

	const [name, setName] = useState("")
	const [nameError, setNameError] = useState(false)

	const [phone, setPhone] = useState("")
	const [phoneError, setPhoneError] = useState(false)

	const [location, setLocation] = useState("")
	const [description, setDescription] = useState("")

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [formError, setFormError] = useState(false)

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&")
	}

	const validate = () => {
		if (!email) setEmailError(true)

		if (email && !email.includes("@")) setEmailError(true)

		if (!name) setNameError(true)

		if (!phone) setPhoneError(true)

		if (email && email.includes("@") && name && phone) return true
	}

	const resetForm = () => {
		setEmail("")
		setName("")
		setDescription("")
		setPhone("")
		setLocation("")
	}
	const submit = (e) => {
		e.preventDefault()
		setEmailError(false)
		setNameError(false)
		setPhoneError(false)

		setLoading(false)
		setFormError(false)
		setSuccess(false)

		const isValid = validate()

		if (isValid) {
			setLoading(true)

			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: encode({
					"form-name": "contact",
					name,
					email,
					location,
					phone,
					description,
				}),
			})
				.then(() => {
					setSuccess(true)
					setFormError(false)
					setLoading(false)
					resetForm()
				})
				.catch((e) => {
					setSuccess(false)
					setFormError(e.message)
					setLoading(false)
				})

			setLoading(false)
		}
	}
	return (
		<SectionWrapper
			className="relative px-4 py-8 text-white bg-center bg-background-bar xl:py-12"
			id="contact-us"
		>
			<div className="xl:max-w-2xl sm:max-w-md sm:mx-auto xl:text-center">
				<SectionTitle
					negative
					subtitle={slice.primary.subtitle}
					title={<PrismicText field={slice.primary.title} />}
					hasUnderline
					align={isMobile ? "left" : "center"}
				/>
				<div className="relative z-10 py-5 text-2xl font-medium uppercase font-title xl:text-center ">
					{
						<PrismicRichText
							field={slice.primary.contact_us_description}
							components={{
								hyperlink: ({ children, node }) => {
									return (
										<a href={node.data.url} className="underline text-gold">
											{children}
										</a>
									)
								},
							}}
						/>
					}
				</div>
				{slice.primary.show_form && (
					<span className="relative z-10 text-white">
						Or fill out the form below, and we'll get back to you immediately.
					</span>
				)}
			</div>

			{success ? (
				<div className="relative z-10 my-8 text-xl font-bold text-center text-emerald-400">
					We received your inquiry! We'll get back to you as soon as possible.
					Thank you for your patience.
				</div>
			) : (
				slice.primary.show_form && (
					<form
						name="contact"
						method="POST"
						data-netlify="true"
						onSubmit={submit}
						className="relative z-10 grid grid-cols-1 gap-4 my-6 sm:max-w-md sm:mx-auto xl:grid-cols-2 xl:max-w-xl"
						data-netlify-honeypot="bot-field"
					>
						{formError && <span className="text-red-400">{formError}</span>}
						<input
							type="hidden"
							name="subject"
							value="Inquiry from JonnyOnTheSpot website!"
						/>
						<input type="hidden" name="JonnyOnTheSpot" value="contact" />

						<div className="flex flex-col gap-2">
							<label htmlFor="name">Name*</label>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="John Doe..."
								name="name"
								id="name"
								type="text"
								className="px-2 py-1 text-white transition-all duration-75 ease-in bg-transparent rounded-sm outline-white outline outline-1 focus:outline-2"
								required
							/>
							{nameError && (
								<span className="text-red-400">Please fill in your name!</span>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="email">Email*</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="John@doe.com..."
								name="email"
								id="email"
								type="text"
								className="px-2 py-1 text-white transition-all duration-75 ease-in bg-transparent rounded-sm outline-white outline outline-1 focus:outline-2"
								required
							/>
							{emailError && (
								<span className="text-red-400">
									Please provide a valid email!
								</span>
							)}
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="location">Location (optional)</label>
							<input
								value={location}
								onChange={(e) => setLocation(e.target.value)}
								placeholder="Livermore, CA..."
								name="location"
								id="location"
								type="text"
								className="px-2 py-1 text-white transition-all duration-75 ease-in bg-transparent rounded-sm outline-white outline outline-1 focus:outline-2"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="phone">Phone*</label>
							<input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="+1-(123)-345-6789..."
								name="phone"
								id="phone"
								type="tel"
								required
								className="px-2 py-1 text-white transition-all duration-75 ease-in bg-transparent rounded-sm outline-white outline outline-1 focus:outline-2"
							/>
							{phoneError && (
								<span className="text-red-400">
									Please fill in your phone number!
								</span>
							)}
						</div>
						<div className="flex flex-col gap-2 xl:col-span-2">
							<label htmlFor="description">
								Tell us about your event (optional)
							</label>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="e.g. Birthday party..."
								name="description"
								id="description"
								type=""
								className="h-20 px-2 py-1 text-white transition-all duration-75 ease-in bg-transparent rounded-sm outline-white outline outline-1 focus:outline-2"
							/>
						</div>
						<div className="xl:col-span-2">
							<button
								type="submit"
								className="hover:translate-y-0.5 transition-transform ease-linear duration-75 active:translate-y-1 w-full px-6 py-3 mt-2 text-black uppercase border border-transparent rounded-md font-title bg-gold"
							>
								Submit
							</button>
						</div>
					</form>
				)
			)}

			<div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
		</SectionWrapper>
	)
}

export default ContactSection

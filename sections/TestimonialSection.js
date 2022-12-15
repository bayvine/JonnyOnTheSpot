import React from "react"
import SectionTitle from "../components/SectionTitle"
import SectionWrapper from "../components/SectionWrapper"

const TestimonialCard = ({ imgSrc, imgAlt, subtitle, quote, clientDescr }) => {
	return (
		<div className="flex flex-col items-center gap-8">
			<img
				src={imgSrc}
				alt={imgAlt}
				width={250}
				height={250}
				className="object-cover aspect-square"
			/>
			<div className="flex flex-col gap-4">
				<span className="text-2xl font-bold uppercase text-roux font-title ">
					{subtitle}
				</span>
				<p>{quote}</p>
				<div className="flex items-center gap-4 text-lg">
					<hr className="w-1/4 h-1 bg-roux" />
					{clientDescr}
				</div>
			</div>
		</div>
	)
}
const TestimonialSection = () => {
	const testimonials = [
		{
			image: {
				imgSrc: "images/testimonialSample.jpg",
				imgAlt: "Test",
			},
			oneliner: "Just fantastic!",
			client: "Client name, location, service provided",
			testimonial:
				"”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit”",
		},
		{
			image: {
				imgSrc: "images/testimonialSample.jpg",
				imgAlt: "Test",
			},
			oneliner: "Just fantastic!",
			client: "Client name, location, service provided",
			testimonial:
				"”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit”",
		},
		{
			image: {
				imgSrc: "images/testimonialSample.jpg",
				imgAlt: "Test",
			},
			oneliner: "Just fantastic!",
			client: "Client name, location, service provided",
			testimonial:
				"”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit”",
		},
	]
	return (
		<SectionWrapper className="px-4 py-8 mt-20" id="testimonials">
			<SectionTitle subtitle="Satisfied clients" title="Testimonials" />
			<div className="grid grid-cols-1 gap-8 my-12 ">
				{testimonials.map((item, index) => {
					return (
						<TestimonialCard
							key={index}
							imgSrc={item.image.imgSrc}
							imgAlt={item.image.imgAlt}
							subtitle={item.oneliner}
							quote={item.testimonial}
							clientDescr={item.client}
						/>
					)
				})}
			</div>
		</SectionWrapper>
	)
}

export default TestimonialSection

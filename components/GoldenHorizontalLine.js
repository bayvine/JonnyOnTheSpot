import React from "react"
import { motion } from "framer-motion"

const GoldenHorizontalLine = () => {
	const animation = {
		hidden: {
			width: 0,
		},
		visible: {
			width: "100%",

			transition: {
				delay: 0.3,
				duration: 0.5,
			},
		},
	}
	return (
		<motion.hr
			variants={animation}
			initial="hidden"
			animate="visible"
			className="w-full h-0.5 bg-[#F8DDA4]"
		></motion.hr>
	)
}

export default GoldenHorizontalLine

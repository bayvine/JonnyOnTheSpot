import clsx from "clsx"
import React from "react"

const Button = ({
	onClick = () => null,
	children,
	type = "primary" | "secondary",
	className,
}) => {
	return (
		<button
			className={clsx([
				type == "primary" && "bg-gold border-2 border-transparent text-black ",
				type == "secondary" && "border-2 border-gold text-gold bg-none  ",
				"uppercase rounded-md text-[10px] min-[375px]:text-sm sm:text-lg px-6 py-3 active:translate-y-1 hover:translate-y-0.5 transition-all hover:shadow-xl shadow-md duration-75 font-title ",
				className,
			])}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button

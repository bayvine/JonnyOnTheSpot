import clsx from "clsx"
const SectionTitle = ({
	subtitle,
	title,
	align = "left" || "center" || "right",
	negative = false,
	hasUnderline = false,
	className,
}) => {
	return (
		<h2
			className={clsx([
				`relative z-10 flex flex-col text-5xl uppercase gap-2 break-words font-title `,
				align == "left" && "text-left",
				align == "center" && "text-center",
				align == "right" && "text-right",
				negative && "text-white",
				className,
			])}
		>
			<span
				className={clsx([
					`text-2xl`,
					negative && "text-gold",
					!negative && "text-roux",
				])}
			>
				{subtitle}
			</span>
			{title}
			{hasUnderline && (
				<hr
					className={clsx([
						"h-0.5 w-full  mt-2",
						negative && "bg-gold",
						!negative && "bg-white",
					])}
				/>
			)}
		</h2>
	)
}

export default SectionTitle

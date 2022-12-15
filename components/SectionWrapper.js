import clsx from "clsx"
const SectionWrapper = ({ className, children, id = "" }) => {
	return (
		<section id={id} className={clsx([className, ""])}>
			{children}
		</section>
	)
}

export default SectionWrapper

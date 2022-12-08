import clsx from "clsx"
const SectionWrapper = ({ className, children }) => {
	return <section className={clsx([className, ""])}>{children}</section>
}

export default SectionWrapper

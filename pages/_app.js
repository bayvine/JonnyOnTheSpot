import { PrismicPreview } from "@prismicio/next"
import { PrismicProvider } from "@prismicio/react"
import Link from "next/link"
import { repositoryName } from "../prismicio"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
			<PrismicPreview repositoryName={repositoryName}>
				<Component {...pageProps} />
			</PrismicPreview>
		</PrismicProvider>
	)
}

export default MyApp

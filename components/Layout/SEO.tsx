import Head from 'next/head'
import {useContext} from 'react'
import PageDataContext from '../../utils/PageDataContext'

export default function SEO() {
	const {seoTitle, seoDescription, seoBannerUrl} = useContext(PageDataContext)
	const fullSeoTitle = `${seoTitle} | Powered by Websheets`
	const siteDomain = 'lioncitymakers.com'
	const fullSiteUrl = `https://${siteDomain}`
	return (
		<Head>
			<link rel="icon" href="/favicon.ico" />
			{/* HTML Meta Tags */}
			<title>{fullSeoTitle}</title>
			<meta name="description" content={seoDescription} />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content={fullSiteUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={fullSeoTitle} />
			<meta property="og:description" content={seoDescription} />
			<meta property="og:image" content={seoBannerUrl} />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content={siteDomain} />
			<meta property="twitter:url" content={fullSiteUrl} />
			<meta name="twitter:title" content={fullSeoTitle} />
			<meta name="twitter:description" content={seoDescription} />
			<meta name="twitter:image" content={seoBannerUrl} />

			{/* IFRAME RESIZER Script */}
			<script src="https://raw.githubusercontent.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.min.js"></script>
		</Head>
	)
}

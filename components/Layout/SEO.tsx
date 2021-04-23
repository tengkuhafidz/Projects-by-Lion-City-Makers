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
			<script >

			window.addEventListener('message', function (event) {

				// Need to check for safety as we are going to process only our messages
				// So Check whether event with data(which contains any object) contains our message here its "FrameHeight"
				if (event.data == "FrameHeight") {

						//event.source contains parent page window object 
						//which we are going to use to send message back to main page here "abc.com/page"

						//parentSourceWindow = event.source;

						//Calculate the maximum height of the page
						var body = document.body, html = document.documentElement;
						var height = Math.max(body.scrollHeight, body.offsetHeight,
								html.clientHeight, html.scrollHeight, html.offsetHeight);

					// Send height back to parent page "abc.com/page"
						event.source.postMessage({ "FrameHeight": height }, "*");       
				}
				});
			</script>
		</Head>
	)
}

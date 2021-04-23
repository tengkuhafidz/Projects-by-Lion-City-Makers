import SEO from './SEO'

export default function Layout({children}) {
	return (
		<div className="text-gray-900 dark:bg-black dark:text-white">
			<SEO />
			<div className="container mx-auto max-w-5xl py-4 px-4 flex flex-col min-h-screen">
				<main className="flex-grow">{children}</main>
			</div>
			{/* IFRAME RESIZER Script */}
			<script src="/js/iframeResizer.contentWindow.min.js"></script>
		</div>
	)
}

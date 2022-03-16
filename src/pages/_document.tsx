import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" className="bg-gray-900">
				<meta name="application-name" content="App Name" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="App Name" />
				<meta name="description" content="App Description" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-config" content="/icons/browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#000000" />

				<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/icons/touch-icon-ipad.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/touch-icon-iphone-retina.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="167x167"
					href="/icons/touch-icon-ipad-retina.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/icons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link
					rel="mask-icon"
					href="/icons/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://app.url" />
				<meta name="twitter:title" content="App Name" />
				<meta name="twitter:description" content="App Description" />
				<meta name="twitter:image" content="/images/social.png" />
				<meta name="twitter:creator" content="@app_handle" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="App Name" />
				<meta property="og:description" content="App Description" />
				<meta property="og:site_name" content="App Name" />
				<meta property="og:url" content="https://app.url" />
				<meta property="og:image" content="/images/social.png" />
				<Head />
				<body>
					<Main />
					<NextScript />
					<div id="modal-root"></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;

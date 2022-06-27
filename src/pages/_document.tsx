import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "src/lib/gtag";

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon/favicon-16x16.png"
					/>
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/favicon/safari-pinned-tab.svg"
						color="#000000"
					/>
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="theme-color" content="#ffffff" />
					{GA_TRACKING_ID && (
						<>
							<script
								async
								src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
							/>
							<script
								dangerouslySetInnerHTML={{
									__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
								}}
							/>
						</>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

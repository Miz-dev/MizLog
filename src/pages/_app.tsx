import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { AppLayout } from "src/layout/AppLayout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GA_TRACKING_ID, pageview } from "src/lib/gtag";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		// GA_TRACKING_ID が設定されていない場合は、処理終了
		if (!GA_TRACKING_ID) return;

		const handleRouteChange = (url: string) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	);
}

// function MyApp({ Component, pageProps }: AppProps) {
// 	return (
// 		<AppLayout>
// 			<Component {...pageProps} />
// 		</AppLayout>
// 	);
// }

// export default MyApp;

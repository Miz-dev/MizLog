import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { AppLayout } from "src/layout/AppLayout";
import { useRouter } from "next/router";
import { usePageView } from "../lib/gtag";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const router = useRouter();

	usePageView();

	return (
		<>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</>
	);
};

export default App;

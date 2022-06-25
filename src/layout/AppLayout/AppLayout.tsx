import { Footer } from "src/layout/AppLayout/Footer/Footer";
import { Header } from "src/layout/AppLayout/Header/Header";
import { Side } from "src/layout/AppLayout/Side/Side";

export const AppLayout = (props: any) => {
	return (
		<div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-2">
			<Header />
			<div className="w-full flex-col md:flex md:flex-row md:justify-between">
				{props.children}
				<Side />
			</div>
			<Footer />
		</div>
	);
};

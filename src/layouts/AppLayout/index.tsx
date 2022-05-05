import { Footer } from "src/layouts/AppLayout/Footer";
import { Header } from "src/layouts/AppLayout/Header";
import { Side } from "src/layouts/AppLayout/Side";

export const AppLayout = (props) => {
	return (
		<div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-2">
			<Header />
			<div className="flex w-full justify-between">
				{props.children}
				<Side />
			</div>
			<Footer />
		</div>
	);
};

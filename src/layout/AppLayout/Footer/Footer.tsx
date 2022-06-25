// import Link from "next/link";
export const Footer = () => {
	return (
		<footer className="mt-4 flex h-24 w-full items-center justify-center border-t">
			<small>
				&copy;{`${new Date().getFullYear()} MizLog. All rights reserved.`}
			</small>
		</footer>
	);
};

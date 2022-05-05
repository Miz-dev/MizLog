import Link from "next/link";
import Image from "next/image";
import mizlogLogo from "../../assets/images/mizlog.png";

const NAV_ITEMS = [
	{ href: "/", label: "Home" },
	{ href: "/zenn", label: "Zenn" },
	// { href: "/profile", label: "Profile" },
];

export const Header = () => {
	return (
		<header className="h-18 mb-10 flex w-full flex-col items-center justify-center">
			<div className="my-6 w-40">
				<Image src={mizlogLogo} alt="mizkog-logo" />
				<p className="text-sm text-gray-500">Web制作の備忘録</p>
			</div>
			<div>
				{NAV_ITEMS.map((item) => {
					return (
						<Link key={item.href} href={item.href}>
							<a className="text-l inline-block py-2 px-6 hover:text-blue-500 focus:text-blue-500 active:text-blue-500">
								{item.label}
							</a>
						</Link>
					);
				})}
			</div>
		</header>
	);
};

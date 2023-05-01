import Link from "next/link";
import Image from "next/image";
import mizlogLogo from "src/assets/images/mizlog.png";

const NAV_ITEMS = [
	{ href: "/", label: "Home" },
	{ href: "/zenn", label: "Zenn" },
	{ href: "/works", label: "Works" },
];

export const Header = () => {
	return (
		<header className="h-18 mb-6 flex w-full flex-col items-center justify-center xs:mb-10">
			<Link href="/">
				<a className="mt-6 mb-4 w-36 xs:my-6 xs:w-40">
					<Image src={mizlogLogo} alt="mizkog-logo" />
					<p className="text-sm text-gray-500">Web制作の備忘録</p>
				</a>
			</Link>
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

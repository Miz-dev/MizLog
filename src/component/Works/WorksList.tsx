import Link from "next/link";
import Image from "next/image";
import works01 from "src/assets/images/works01.png";
import works02 from "src/assets/images/works02.png";
// import comingsoon from "src/assets/images/comingsoon.png";

export const WorksList = () => {
	return (
		<ul className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-6 md:mt-8 md:gap-8">
			<li className="rounded-lg shadow">
				<Link href="/">
					<a target="_blank" className="flex h-full flex-col justify-between">
						<Image className="rounded-lg" src={works01} alt="works01" />
					</a>
				</Link>
			</li>
			<li className="rounded-lg shadow">
				<Link href="https://mizdev.vercel.app/">
					<a target="_blank" className="flex h-full flex-col justify-between">
						<Image className="rounded-lg" src={works02} alt="works02" />
					</a>
				</Link>
			</li>
		</ul>
	);
};

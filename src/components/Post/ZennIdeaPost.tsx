import Link from "next/link";
import Image from "next/image";
import zennLogo from "src/assets/images/zenn.png";

export const ZennIdeaPost = () => {
	return (
		<ul className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-6 md:mt-8 md:gap-8">
			<li className="rounded-lg shadow">
				<Link href="https://zenn.dev/miz_dev/articles/f0b926126c138f">
					<a
						target="_blank"
						className="flex h-full flex-col justify-between px-6 py-10 hover:bg-gray-100"
					>
						<div className="mb-5 flex truncate text-sm">
							<div className="mr-1 h-4 w-4">
								<Image src={zennLogo} alt="zenn-logo" />
							</div>
							Zenn.dev
						</div>
						<h2 className="truncate text-lg font-bold text-blue-900">
							ポモドーロ・テクニックとは？【集中して作業したい方必見！】
						</h2>
					</a>
				</Link>
			</li>
			<li className="rounded-lg shadow">
				<Link href="https://zenn.dev/miz_dev/articles/a37c62460f21ea">
					<a
						target="_blank"
						className="flex h-full flex-col justify-between px-6 py-10 hover:bg-gray-100"
					>
						<div className="mb-5 flex truncate text-sm">
							<div className="mr-1 h-4 w-4">
								<Image src={zennLogo} alt="zenn-logo" />
							</div>
							Zenn.dev
						</div>
						<h2 className="truncate text-lg font-bold text-blue-900">
							【Mac】意外と便利！Controlキーのショートカットキー！【作業効率爆上がり！】
						</h2>
					</a>
				</Link>
			</li>
			<li className="rounded-lg shadow">
				<Link href="https://zenn.dev/miz_dev/articles/157a7aaad0bdcf">
					<a
						target="_blank"
						className="flex h-full flex-col justify-between px-6 py-10 hover:bg-gray-100"
					>
						<div className="mb-5 flex truncate text-sm">
							<div className="mr-1 h-4 w-4">
								<Image src={zennLogo} alt="zenn-logo" />
							</div>
							Zenn.dev
						</div>
						<h2 className="truncate text-lg font-bold text-blue-900">
							【コーディングが爆速に！】ユーザースニペットとは？【Visual Studio
							Code】
						</h2>
					</a>
				</Link>
			</li>
			<li className="rounded-lg shadow">
				<Link href="https://zenn.dev/miz_dev/articles/6cac5f2e32398d">
					<a
						target="_blank"
						className="flex h-full flex-col justify-between px-6 py-10 hover:bg-gray-100"
					>
						<div className="mb-5 flex truncate text-sm">
							<div className="mr-1 h-4 w-4">
								<Image src={zennLogo} alt="zenn-logo" />
							</div>
							Zenn.dev
						</div>
						<h2 className="truncate text-lg font-bold text-blue-900">
							Emmetとは？これだけ知っておけばOK！
						</h2>
					</a>
				</Link>
			</li>
		</ul>
	);
};

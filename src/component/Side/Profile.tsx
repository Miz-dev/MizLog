import Image from "next/image";
import Link from "next/link";
import mizAvatar from "src/assets/images/miz.png";

export const Profile = () => {
	return (
		<div className="mb-10 flex flex-col items-center justify-center border p-6">
			<div className="text-center">
				<Image
					className="justify-center rounded-full"
					width={100}
					height={100}
					src={mizAvatar}
					alt="Miz"
				/>
			</div>
			<p className="mb-8 text-center">Miz</p>
			<p className="mb-5 text-sm leading-6">
				小学校から高校まで野球一筋→大学卒業後ギター作りの専門学校へ→楽器販売店では接客に馴染めず退職→未経験から独学で学習しWeb制作会社に転職。
				<br />
				<br />
				自らの経験から未経験からWeb業界を目指す人向けの情報、Web制作についてのちょっとしたTipsや役立つことを発信しています！
				<br />
				<br />
				TypeScript/React/Next.js/Astro学習中
			</p>
			<div className="flex items-center">
				<Link href="https://twitter.com/Miz_dev">
					<a target="_blank">
						<svg
							className="mr-4 w-6 fill-blue-500 hover:fill-blue-400"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							viewBox="0 0 40 32"
						>
							<path
								d="M35.988,8.086c.024.347.024.695.024,1.044a23,23,0,0,1-23.35,22.99v-.006A23.5,23.5,0,0,1,.082,28.491a16.957,16.957,0,0,0,1.954.116,16.632,16.632,0,0,0,10.192-3.466A8.2,8.2,0,0,1,4.56,19.53a8.316,8.316,0,0,0,3.706-.139,8.115,8.115,0,0,1-6.584-7.921v-.1A8.243,8.243,0,0,0,5.407,12.38,8.011,8.011,0,0,1,2.866,1.594,23.424,23.424,0,0,0,19.78,10.036a8.008,8.008,0,0,1,2.374-7.72,8.305,8.305,0,0,1,11.611.351A16.606,16.606,0,0,0,38.976.706a8.131,8.131,0,0,1-3.608,4.469A16.58,16.58,0,0,0,40.082,3.9,16.557,16.557,0,0,1,35.988,8.086Z"
								transform="translate(-0.082 -0.12)"
							></path>
						</svg>
					</a>
				</Link>
				<Link href="https://github.com/Miz-dev">
					<a target="_blank">
						<svg
							className="fill-black-500 w-6 hover:fill-gray-600"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							width="20"
						>
							<path
								fillRule="evenodd"
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
							></path>
						</svg>
					</a>
				</Link>
			</div>
		</div>
	);
};

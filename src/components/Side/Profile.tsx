import Image from "next/image";
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
			<p className="text-sm leading-6">
				小学校から高校まで野球一筋→大学卒業後ギター作りの専門学校へ→楽器販売店では接客に馴染めず退職→未経験から独学で学習しWeb制作会社に転職。
				<br />
				<br />
				自らの経験から未経験からWeb業界を目指す人向けの情報、Web制作についてのちょっとしたTipsや役立つことを発信しています！
			</p>
		</div>
	);
};

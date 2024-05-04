import Link from "next/link";
import Image from "next/image";
import zennLogo from "src/assets/images/zenn.png";

const ZENNIDEAPOST = [
  {
    href: "https://zenn.dev/miz_dev/articles/f0b926126c138f",
    title: "ポモドーロ・テクニックとは？【集中して作業したい方必見！】",
  },
  {
    href: "https://zenn.dev/miz_dev/articles/a37c62460f21ea",
    title:
      "【Mac】意外と便利！Controlキーのショートカットキー！【作業効率爆上がり！】",
  },
  {
    href: "https://zenn.dev/miz_dev/articles/157a7aaad0bdcf",
    title:
      "【コーディングが爆速に！】ユーザースニペットとは？【Visual Studio Code】",
  },
  {
    href: "https://zenn.dev/miz_dev/articles/6cac5f2e32398d",
    title: "Emmetとは？これだけ知っておけばOK！",
  },
];

export const ZennIdeaPostList = () => {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-6 md:mt-8 md:gap-8">
      {ZENNIDEAPOST.map((item) => {
        return (
          <li key={item.href} className="rounded-lg shadow">
            <Link href={item.href}>
              <a
                target="_blank"
                className="flex h-full flex-col justify-between px-6 py-10 duration-300 hover:bg-gray-100 focus:bg-gray-100"
              >
                <div className="mb-5 flex truncate text-sm">
                  <div className="mr-1 h-4 w-4">
                    <Image src={zennLogo} alt="zenn-logo" />
                  </div>
                  Zenn.dev
                </div>
                <h2 className="truncate text-lg font-bold text-blue-900">
                  {item.title}
                </h2>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

import Link from "next/link";
import Image from "next/image";
import zennLogo from "src/assets/images/zenn.png";

const ZENNTECHPOST = [
  {
    href: "https://zenn.dev/miz_dev/articles/4e6baa5b747c5d",
    title: "Reactの基本的なところを備忘として残しておく",
  },
  {
    href: "https://zenn.dev/miz_dev/articles/8f406c76abe442",
    title: "TypeScriptの基本的なところを備忘として残しておく",
  },
  {
    href: "https://zenn.dev/miz_dev/articles/c26ab943f35b8f",
    title: "Sassって何？使うことのメリットを簡単に解説！【効率爆上がり！】",
  },
  {
    href: "https://zenn.dev/miz_dev/articles/fbd8c297601022",
    title: "webpack-dev-serverからcontentBaseが消えてエラーになる",
  },
  {
    href: "https://zenn.dev/miz_dev/articles/81ae64fbdd22ce",
    title: "Gitとは？Githubって何？初心者向け解説！",
  },
];

export const ZennTechPostList = () => {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-6 md:mt-8 md:gap-8">
      {ZENNTECHPOST.map((item) => {
        return (
          <li key={item.href} className="rounded-lg shadow">
            <Link href={item.href} legacyBehavior>
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

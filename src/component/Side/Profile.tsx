import Image from "next/image";
import Link from "next/link";
import mizAvatar from "src/assets/images/miz.png";

export const Profile = () => {
  return (
    <div className="flex flex-col items-center border p-6">
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
        小学校から高校まで野球一筋→大学卒業後ギター製作専門学校→楽器販売店では接客に馴染めず退職→未経験で都内Web制作会社に→会社解散に伴って再度Web制作会社に転職
        <br />
        <br />
        自らの経験から未経験からWeb業界を目指す人向けの情報、Web制作についてのちょっとしたTipsや役立つことを発信しています！
      </p>
      <div className="flex items-center gap-x-5">
        <Link href="https://twitter.com/Miz_dev">
          <a
            className="w-5 duration-300 hover:opacity-70 focus:opacity-70"
            target="_blank"
          >
            <svg
              width="20"
              viewBox="0 0 27 28"
              aria-label="X(Twitter)"
              className="fill-black-500 w-full"
            >
              <g clipPath="url(#clip0_1_18)">
                <path d="M16.0687 11.7356L26.12 0H23.7382L15.0106 10.1899L8.03988 0H0L10.5411 15.4089L0 27.7155H2.38199L11.5985 16.9546L18.9601 27.7155H27L16.0681 11.7356H16.0687ZM12.8062 15.5447L11.7382 14.0103L3.24025 1.80106H6.89884L13.7568 11.6543L14.8248 13.1887L23.7393 25.9963H20.0807L12.8062 15.5452V15.5447Z"></path>
              </g>
              <defs>
                <clipPath id="clip0_1_18">
                  <rect width="27" height="27.7297" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </Link>
        <Link href="https://github.com/Miz-dev">
          <a
            className="w-6 duration-300 hover:opacity-70 focus:opacity-70"
            target="_blank"
          >
            <svg
              className="fill-black-500 w-full"
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

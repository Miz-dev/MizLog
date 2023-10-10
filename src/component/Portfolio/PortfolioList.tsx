import Link from "next/link";
import Image from "next/image";
import portfolio01 from "src/assets/images/portfolio01.png";
import comingsoon from "src/assets/images/comingsoon.png";

export const PortfolioList = () => {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-6 md:mt-8 md:gap-8">
      <li className="rounded-lg shadow">
        <Link href="/" legacyBehavior>
          <a target="_blank" className="flex h-full flex-col justify-between">
            <Image src={portfolio01} alt="portfolio01" />
          </a>
        </Link>
      </li>
      <li className="rounded-lg shadow">
        <Link href="/" legacyBehavior>
          <a target="_blank" className="flex h-full flex-col justify-between">
            <Image src={comingsoon} alt="Coming Soon" />
          </a>
        </Link>
      </li>
    </ul>
  );
};

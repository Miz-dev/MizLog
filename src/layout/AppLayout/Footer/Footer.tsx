// import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="mt-10 flex w-full justify-center border-t py-4">
      <small>
        &copy;{`${new Date().getFullYear()} MizLog. All rights reserved.`}
      </small>
    </footer>
  );
};

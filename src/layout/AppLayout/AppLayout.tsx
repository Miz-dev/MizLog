import { Footer } from "src/layout/AppLayout/Footer/Footer";
import { Header } from "src/layout/AppLayout/Header/Header";
import { Side } from "src/layout/AppLayout/Side/Side";

export const AppLayout = (props: any) => {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-[100%] grid-rows-[auto_1fr_auto] px-5">
      <Header />
      <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between">
        {props.children}
        <Side />
      </div>
      <Footer />
    </div>
  );
};

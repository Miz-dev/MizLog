import { Profile } from "src/component/Side/Profile";
// import { SideCategory } from "src/component/Side/SideCategory";

export const Side = () => {
  return (
    <aside className="mx-auto flex flex-shrink-0 flex-col md:max-w-xs">
      <Profile />
      {/* <SideCategory /> */}
    </aside>
  );
};

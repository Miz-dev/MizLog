import { Profile } from "src/components/Side/Profile";
import { SideCategory } from "src/components/Side/SideCategory";

export const Side = () => {
	return (
		<aside className="mx-auto mt-10 flex max-w-xs flex-col items-center justify-center md:mt-0 md:ml-8 md:mb-auto">
			<Profile />
			<SideCategory />
		</aside>
	);
};

import { Profile } from "src/components/Side/Profile";
import { SideCategory } from "src/components/Side/SideCategory";

export const Side = () => {
	return (
		<aside className="mb-auto ml-8 flex max-w-xs flex-col items-center justify-center">
			<Profile />
			<SideCategory />
		</aside>
	);
};

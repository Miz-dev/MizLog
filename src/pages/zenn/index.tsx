import Head from "next/head";
import { Tabs } from "@mantine/core";
import { ZennTechPostList } from "src/component/Post/ZennTechPostList";
import { ZennIdeaPostList } from "src/component/Post/ZennIdeaPostList";

const Zenn = () => {
	return (
		<div>
			<Head>
				<title>Zenn | MizLog</title>
			</Head>
			<Tabs className="flex flex-col items-center justify-center">
				<Tabs.Tab label="Tech" className="w-36 xs:w-40">
					<ZennTechPostList />
				</Tabs.Tab>
				<Tabs.Tab label="Ideas" className="w-36 xs:w-40">
					<ZennIdeaPostList />
				</Tabs.Tab>
			</Tabs>
		</div>
	);
};

export default Zenn;

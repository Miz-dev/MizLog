import Head from "next/head";
import { Tabs } from "@mantine/core";
import { ZennTechPost } from "src/components/Post/ZennTechPost";
import { ZennIdeaPost } from "src/components/Post/ZennIdeaPost";

const Zenn = () => {
	return (
		<div>
			<Head>
				<title>Zenn | Web制作の備忘録</title>
			</Head>
			<Tabs className="flex flex-col items-center justify-center">
				<Tabs.Tab label="Tech" className="w-40">
					<ZennTechPost />
				</Tabs.Tab>
				<Tabs.Tab label="Ideas" className="w-40">
					<ZennIdeaPost />
				</Tabs.Tab>
			</Tabs>
		</div>
	);
};

export default Zenn;

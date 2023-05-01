import Head from "next/head";
import { Tabs } from "@mantine/core";
import { WorksList } from "src/component/Works/WorksList";

const Portfolio = () => {
	return (
		<div>
			<Head>
				<title>Works | MizLog</title>
			</Head>
			<Tabs className="flex flex-col items-center justify-center">
				<Tabs.Tab label="Works" className="w-36 xs:w-40">
					<WorksList />
				</Tabs.Tab>
				{/* <Tabs.Tab label="Ideas" className="w-36 xs:w-40">
					<WorksList />
				</Tabs.Tab> */}
			</Tabs>
		</div>
	);
};

export default Portfolio;

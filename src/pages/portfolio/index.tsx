import Head from "next/head";
import { Tabs } from "@mantine/core";
import { PortfolioList } from "src/component/Portfolio/PortfolioList";

const Portfolio = () => {
	return (
		<div>
			<Head>
				<title>Portfolio | MizLog</title>
			</Head>
			<Tabs className="flex flex-col items-center justify-center">
				<Tabs.Tab label="Portfolio" className="w-36 xs:w-40">
					<PortfolioList />
				</Tabs.Tab>
				{/* <Tabs.Tab label="Ideas" className="w-36 xs:w-40">
					<PortfolioList />
				</Tabs.Tab> */}
			</Tabs>
		</div>
	);
};

export default Portfolio;

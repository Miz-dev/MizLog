import { Tabs } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import mizlogLogo from "src/assets/images/mizlog-ico.png";
import Link from "next/link";
import { client } from "src/lib/client";

export type Blog = {
	title: string;
	body: string;
};

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
	return (
		<div className="w-full">
			<Head>
				<title>MizLog | Web制作の備忘録</title>
			</Head>
			<Tabs className="flex flex-col items-center justify-center">
				<Tabs.Tab label="Web Design" className="w-36 xs:w-40">
					<ul className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-6 md:mt-8 md:gap-8">
						{props.contents.map((content) => {
							return (
								<li className="rounded-lg shadow" key={content.id}>
									<Link href={`/blog/${content.id}`}>
										<a className="flex h-full flex-col justify-between px-6 py-10 hover:bg-gray-100">
											<div className="mb-5 flex truncate text-sm">
												<div className="mr-1 h-5 w-5">
													<Image src={mizlogLogo} alt="mizlog-logo" />
												</div>
												MizLog
											</div>
											<h2 className="truncate text-lg font-bold text-blue-900">
												{content.title}
											</h2>
										</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</Tabs.Tab>
				{/* <Tabs.Tab label="Life Hack" className="w-40">
					<ul className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-6 md:mt-8 md:gap-8">
						{props.contents.map((content) => {
							return (
								<li className="rounded-lg shadow" key={content.id}>
									<Link href={`/blog/${content.id}`}>
										<a className="flex h-full flex-col justify-between px-6 py-10 hover:bg-gray-100">
											<div className="mb-5 flex truncate text-sm">
												<div className="mr-1 h-5 w-5">
													<Image src={mizlogLogo} alt="mizlog-logo" />
												</div>
												MizLog
											</div>
											<h2 className="truncate text-lg font-bold text-blue-900">
												{content.title}
											</h2>
										</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</Tabs.Tab> */}
			</Tabs>
		</div>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await client.getList({ endpoint: "blog" });
	return {
		props: data,
	};
};

export default Home;

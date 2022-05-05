import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { Blog } from "src/pages";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
	return (
		<main className="flex flex-col justify-center">
			<h1 className="mb-5 border-b pb-2 text-center text-2xl font-bold text-blue-900">
				{props.title}
			</h1>
			{/* <time>{props.publishedAt}</time> */}
			<div
				className="prose max-w-none"
				dangerouslySetInnerHTML={{ __html: props.body }}
			/>
		</main>
	);
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
	const data = await client.getList({ endpoint: "blog" });
	const ids = data.contents.map((content) => `/blog/${content.id}`);
	return {
		paths: ids,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
	ctx
) => {
	if (!ctx.params) {
		return { notFound: true };
	}

	const data = await client.getListDetail<Blog>({
		endpoint: "blog",
		contentId: ctx.params.id,
	});

	return {
		props: data,
	};
};

export default BlogId;

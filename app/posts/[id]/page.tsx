import React from "react";
import { getAllPostIds, getPostData } from "@/lib/post";
import Link from "next/link";

export const generateMetadata = () => {
  return {
    title: "Post Detail",
    description: "Post Detail page",
  };
};

export const dynamicParams = false;
export function generateStaticParams() {
  const allPostIds = getAllPostIds();

  return allPostIds.map((postId) => ({
    params: {
      id: postId.params.id,
    },
  }));
}

const postDetail = async ({ params }: { params: { id: string } }) => {
  const post = await getPostData(params.id);

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-4">{post.date}</div>
      <div className="mb-8">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Return Posts
      </Link>
    </article>
  );
};

export default postDetail;

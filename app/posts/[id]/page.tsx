import React from "react";
import { getAllPostIds } from "@/lib/post";

export const generateMetadata = () => {
  return {
    title: "Post Detail",
    description: "Post Detail page",
  };
};

// static generation
export function generateStaticParams() {
  const allPostIds = getAllPostIds();

  return allPostIds.map((postId) => ({
    params: {
      id: postId.params.id,
    },
  }));
}

const postDetail = () => {
  return <div>postDetail</div>;
};

export default postDetail;

import Link from "next/link";
import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: "Posts",
    description: "Posts page",
  };
};

const postsPage = () => {
  return (
    <>
      <h1>posts page</h1>
      <Link href="/" className="text-blue-500">
        Home
      </Link>
      <Image src="/next.svg" alt="profile" width={100} height={100} />
    </>
  );
};

export default postsPage;

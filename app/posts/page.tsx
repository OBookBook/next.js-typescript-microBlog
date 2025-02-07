import Link from "next/link";

const postsPage = () => {
  return (
    <>
      <h1>posts page</h1>
      <Link href="/" className="text-blue-500">
        Home
      </Link>
    </>
  );
};

export default postsPage;

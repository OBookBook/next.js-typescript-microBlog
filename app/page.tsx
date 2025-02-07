import Link from "next/link";

export const generateMetadata = () => {
  return {
    title: "Home",
    description: "Home page",
  };
};

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <Link href="/posts" className="text-blue-500">
        post
      </Link>
    </>
  );
}

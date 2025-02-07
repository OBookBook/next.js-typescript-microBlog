import Link from "next/link";

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

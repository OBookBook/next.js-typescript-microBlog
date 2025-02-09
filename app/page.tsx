import Link from "next/link";
import Image from "next/image";
import { getPostsData } from "@/lib/post";

interface Post {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
}

export const generateMetadata = () => {
  return {
    title: "Home",
    description: "Home page",
  };
};

// SSGの設定を追加
// App Routerでは、これらのエクスポート設定を使用することで、従来のgetStaticPropsと同様の静的生成（SSG）を実現する。
export const dynamic = "force-static";
export const revalidate = false;

// SSRの設定をしたい場合
// export const dynamic = "force-dynamic";

export default async function Home(): Promise<React.ReactNode> {
  const allPostsData = (await getPostsData()) as Post[];
  console.log(allPostsData);

  return (
    <>
      <section className="max-w-3xl mx-auto py-12 px-4">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-3xl font-bold tracking-tight">
              I&apos;m a software engineer.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I&apos;m a software engineer with a passion for building web
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id} className="group relative">
                <Link
                  href={`/posts/${id}`}
                  className="block transition-colors hover:text-blue-500"
                >
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={thumbnail}
                      alt={title}
                      width={500}
                      height={100}
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{title}</h2>
                </Link>
                <time className="block mt-2 text-sm text-gray-500">{date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

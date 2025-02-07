import Link from "next/link";
import Image from "next/image";
export const generateMetadata = () => {
  return {
    title: "Home",
    description: "Home page",
  };
};

export default function Home() {
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
            <article className="group relative">
              <Link
                href="/posts"
                className="block transition-colors hover:text-blue-500"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/opengraph-image.png"
                    alt="profile"
                    width={500}
                    height={100}
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold">post</h2>
              </Link>
              <time className="block mt-2 text-sm text-gray-500">
                2025-02-07
              </time>
            </article>
            <article className="group relative">
              <Link
                href="/posts"
                className="block transition-colors hover:text-blue-500"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/opengraph-image.png"
                    alt="profile"
                    width={500}
                    height={100}
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold">post</h2>
              </Link>
              <time className="block mt-2 text-sm text-gray-500">
                2025-02-07
              </time>
            </article>
            <article className="group relative">
              <Link
                href="/posts"
                className="block transition-colors hover:text-blue-500"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/opengraph-image.png"
                    alt="profile"
                    width={500}
                    height={100}
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold">post</h2>
              </Link>
              <time className="block mt-2 text-sm text-gray-500">
                2025-02-07
              </time>
            </article>
            <article className="group relative">
              <Link
                href="/posts"
                className="block transition-colors hover:text-blue-500"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/opengraph-image.png"
                    alt="profile"
                    width={500}
                    height={100}
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold">post</h2>
              </Link>
              <time className="block mt-2 text-sm text-gray-500">
                2025-02-07
              </time>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

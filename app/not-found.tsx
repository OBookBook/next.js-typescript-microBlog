import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-red-600">Not Found</h2>
      <p className="mt-4 text-lg text-gray-700">
        Could not find requested resource
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}

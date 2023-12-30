"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1024px] m-auto h-[80vh]">
      <div className="flex">
        <p>Click here to go to the blog page</p>
        <Link className="ml-[5px]" href="/blogs">
          Blogs
        </Link>
      </div>
    </main>
  );
}

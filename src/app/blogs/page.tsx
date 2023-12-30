"use client";
import { useState } from "react";
import useSWR from "swr";

import Tables from "~/components/tables";

function Blogs() {
  const [blog, setBlog] = useState<IBlogs | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (!data) {
    return <div>Loading....</div>;
  }

  return (
    <div className="max-w-[1024px] m-auto">
      <Tables blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </div>
  );
}

export default Blogs;

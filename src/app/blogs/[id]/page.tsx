import React from "react";
import useSWR from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[1024px] m-auto min-h-[80vh]">
      <div className="text-center">
        <div>
          <h1>{data?.title}</h1>
        </div>
        <div className="text-[#585858]">{data?.author}</div>
        <div className="mt-[50px]">
          <p>{data?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailBlog;

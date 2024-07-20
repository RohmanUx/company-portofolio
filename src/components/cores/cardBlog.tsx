"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "lucide-react";

interface ICardBlogProps {
  title: string;
  id: string;
  author: string;
  image: string;
}

const CardBlog: React.FunctionComponent<ICardBlogProps> = ({
  title,
  id,
  author,
  image,
}) => {
  const router = useRouter();

  // dapat 7 hall
  return (
    <div
      key={id}
      className="flex p-2 shadow-md rounded-2xl h-[286.5px] mx-2 flex-wrap justify-center w-52 border-[1px] bg-[#7fffd4a3] my-2 "
    >
      <div className="mt-40">
        <h3 className="text-lg font-bold ">{title}</h3>
        <p className="my-2"> {author} </p>
        <button
          className="rounded-full border-black border-[1px] px-2 mr-[2px]"
          onClick={() => router.push(`/blog/${id}`)}
        >
          Status {" "}
        </button>
        <button className="rounded-full border-black border-[1px] px-2">
          {" "}
          Linkldn {" "}
        </button>
      </div>
    </div>
  );
};

export default CardBlog;

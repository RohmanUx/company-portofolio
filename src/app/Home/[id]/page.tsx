"use client";
import * as React from "react";
import { getEntriesById } from "@/utils/contentful";
import { Entry } from "contentful";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import { title } from "process";
import image from "next/image";

interface BlogFields {
  title: string;
  content: string;
  author: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  description: string;
}

const BlogDetail: React.FunctionComponent = () => {
    const imageUrl = image 

  return (
    <div className="flex w-full p-4 h-[700px] flex-wrap border border-gray-300 rounded-lg shadow-md">
      <div className="w-full mx-24 content-center items-center justify-center flex">
        <Image
          src={`https:${imageUrl}`}
          alt={title}
          width={200}
          height={200}
          className="shadow-md rounded-lg"
        />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-lg font-bold">
          <Markdown> title </Markdown>
        </h3>
        <h3 className="text-lg font-bold">
          <Markdown> description </Markdown>
        </h3>
        <div>
          <Markdown> author </Markdown>
        </div>
        <div>
          <Markdown> content </Markdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

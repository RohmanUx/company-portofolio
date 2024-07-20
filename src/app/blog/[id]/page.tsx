"use client";
import * as React from "react";
import { getEntriesById } from "@/utils/contentful";
import { Entry } from "contentful";
import Image from "next/image";
import marked from "marked";
import DOMPurify from "dompurify";
interface IBlogDetailProps {
  params: { id: string }; 
} 

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

const BlogDetail: React.FunctionComponent<IBlogDetailProps> = ({ params }) => {
  const [blog, setBlog] = React.useState<Entry<BlogFields> | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const result = await getEntriesById(params.id);
        if (result && result.length > 0) {
          setBlog(result[0]);
          setLoading(false);
        } else {
          setError("Blog post not found");
          setLoading(false);
        }
      } catch (err) {
        setError("Failed to fetch blog post");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog || !blog.fields) {
    return null;
  }

  const { title, content, author, description, image } = blog.fields;
  const imageUrl = image.fields.file.url;
  // const htmlContent = DOMPurify.sanitize(marked(content));

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
        <h3 className="text-lg font-bold">{title}</h3>
        <h3 className="text-lg font-bold">{description}</h3>
        <p>{author}</p>
        { /* <div dangerouslySetInnerHTML={{ __html: htmlContent }} />  */ } 
      </div>
    </div>
  );
};

export default BlogDetail;

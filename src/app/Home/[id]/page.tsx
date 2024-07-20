"use client";
import * as React from "react";
import { getEntriesById } from "@/utils/contentful";
import { Entry } from "contentful";
import Image from "next/image";
import { marked } from "marked";

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
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [blogEntry, setBlogEntry] = React.useState<Entry<BlogFields> | null>(null);

  React.useEffect(() => {
    const fetchBlogEntry = async () => {
      try {
        const hardcodedId = 'your-blog-entry-id'; // Replace with your actual blog entry ID
        const entry = await getEntriesById(hardcodedId);
        setBlogEntry(entry);
      } catch (error) {
        setError("Failed to fetch blog entry.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogEntry();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blogEntry) return <p>No blog entry found.</p>;

  const { title, content, author, description, image } = blogEntry.fields;
  const imageUrl = image.fields.file.url;

  // Convert Markdown to HTML
  const htmlTitle = marked(title);
  const htmlDescription = marked(description);
  const htmlContent = marked(content);

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
        <h3 className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: htmlTitle }} />
        <h3 className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: htmlDescription }} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <div>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
  
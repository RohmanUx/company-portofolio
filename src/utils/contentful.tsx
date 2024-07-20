import { createClient } from "contentful";
// 'use client'

export const createContentClient = () => {
  return createClient({
    space: "ynf5s7448k9w",
    accessToken: "VbrwqRIjaTozjYovVeAZAUzaa863gnkkF3U2W15zdyc",
  });
};

const client = createContentClient();

export const getEntryBlogPost = async () => {
  try {
    // Get data from Contentful
    const response = await client.getEntries({ content_type: "blogPost" });
    // Remap data Contentful to only get content fields
    // const blog = response.items.map(id: string );

    const blog = response.items;
    return blog;
  } catch (error) {
    console.log(error);
  }
};

// // Example of usage
// const fetchBlogPosts = async () => {
//   const blogPosts = await getEntryBlogPost();
//   console.log(blogPosts);
// };

// fetchBlogPosts();

export const getEntriesById = async (id: string) => {
  try {
    // type code to get enty by Id
    const response = await client.getEntries({ "sys.id": id });
    return response.items;
  } catch (error) {
    console.log(error);
  }
}; 




import { createClient } from "@/prismicio";
import React from "react";
import BlogCard from "./BlogCard";

const BlogPostIndex = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const client = createClient();
  const blogposts = await client.getAllByType("blogpost");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard heading={post.data.name} />
            </div>
          );
        })}
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard heading={post.data.name} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogPostIndex;

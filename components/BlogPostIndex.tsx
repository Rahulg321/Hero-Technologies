import { createClient } from "@/prismicio";
import React from "react";
import BlogCard from "./BlogCard";

const BlogPostIndex = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const client = createClient();
  const blogposts = await client.getAllByType("blogpost");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
        {blogposts.map((post, index) => {
          return (
            <div key={index}>
              <BlogCard post={post} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogPostIndex;

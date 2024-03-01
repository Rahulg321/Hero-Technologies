import { KeyTextField } from "@prismicio/client";
import React from "react";

type BlogCardProps = {
  heading: KeyTextField;
};

const BlogCard = ({ heading }: BlogCardProps) => {
  return <article>BlogCard{heading}</article>;
};

export default BlogCard;

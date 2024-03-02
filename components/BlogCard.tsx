import { Content, KeyTextField } from "@prismicio/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type BlogCardProps = {
  post: Content.BlogpostDocument;
};

const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = formatDate(post.first_publication_date);
  // console.log(formattedDate);

  return (
    <article>
      {post.tags.map((tag, index) => {
        return (
          <span key={index} className="even:ml-2">
            {tag}
          </span>
        );
      })}
      <h3>
        <Link href={`/blogs/${post.uid}`}>{post.data.name}</Link>
      </h3>
      <span>{formattedDate}</span>
    </article>
  );
};

export default BlogCard;

const formatDate = (dateStr: string): string => {
  try {
    const dateObj = new Date(dateStr);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month}. ${day}${getOrdinalSuffix(day)} ${year}`;
  } catch (error) {
    return "Invalid date format";
  }
};

const getOrdinalSuffix = (day: number): string => {
  const suffixes = ["st", "nd", "rd", "th"];
  const remainder = day % 100;
  return suffixes[
    (remainder - 10) % 10 === 1 && remainder < 20 ? 0 : remainder % 10
  ];
};

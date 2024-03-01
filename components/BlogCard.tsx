import { KeyTextField } from "@prismicio/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type BlogCardProps = {
  heading: KeyTextField;
};

const BlogCard = ({ heading }: BlogCardProps) => {
  return <article>BlogCard{heading}</article>;
};

export default BlogCard;

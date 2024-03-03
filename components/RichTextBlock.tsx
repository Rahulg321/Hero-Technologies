import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

type RichTextBlockProps = {
  content: RichTextField;
};

const RichTextBlock = ({ content }: RichTextBlockProps) => {
  return (
    <div className="prose prose-lg max-w-none prose-p:text-black prose-slate dark:prose-invert dark:prose-p:text-white prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 text-pretty">
      <PrismicRichText field={content} />
    </div>
  );
};

export default RichTextBlock;

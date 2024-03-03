import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <article
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="narrow-container">
        <div className="prose prose-p:text-black  md:prose-lg  prose-slate dark:prose-invert dark:prose-p:text-white  prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 prose-h1:heading1">
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </article>
  );
};

export default TextBlock;

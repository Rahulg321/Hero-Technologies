import RichTextBlock from "@/components/RichTextBlock";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutUsSlice`.
 */
export type AboutUsSliceProps = SliceComponentProps<Content.AboutUsSliceSlice>;

/**
 * Component for "AboutUsSlice" Slices.
 */
const AboutUsSlice = ({ slice }: AboutUsSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="narrow-container">
        <h2 className="mb-4">{slice.primary.heading}</h2>
        <RichTextBlock content={slice.primary.content} />
      </div>
    </section>
  );
};

export default AboutUsSlice;

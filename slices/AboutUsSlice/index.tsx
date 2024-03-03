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
    >
      Placeholder component for about_us_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AboutUsSlice;

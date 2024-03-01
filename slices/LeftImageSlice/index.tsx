import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LeftImageSlice`.
 */
export type LeftImageSliceProps =
  SliceComponentProps<Content.LeftImageSliceSlice>;

/**
 * Component for "LeftImageSlice" Slices.
 */
const LeftImageSlice = ({ slice }: LeftImageSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for left_image_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LeftImageSlice;

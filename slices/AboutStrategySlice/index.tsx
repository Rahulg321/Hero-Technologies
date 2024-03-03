import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutStrategySlice`.
 */
export type AboutStrategySliceProps =
  SliceComponentProps<Content.AboutStrategySliceSlice>;

/**
 * Component for "AboutStrategySlice" Slices.
 */
const AboutStrategySlice = ({
  slice,
}: AboutStrategySliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for about_strategy_slice (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default AboutStrategySlice;

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutFormulaSlice`.
 */
export type AboutFormulaSliceProps =
  SliceComponentProps<Content.AboutFormulaSliceSlice>;

/**
 * Component for "AboutFormulaSlice" Slices.
 */
const AboutFormulaSlice = ({ slice }: AboutFormulaSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for about_formula_slice (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default AboutFormulaSlice;

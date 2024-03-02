import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
      className="block-space"
    >
      <div className="big-container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="lg:px-16">
            <div className="sticky top-4">
              <div className="aspect-h-1 aspect-w-1 relative ">
                <PrismicNextImage
                  field={slice.primary.image}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="prose prose-p:text-black  md:prose-lg  prose-slate dark:prose-invert dark:prose-p:text-white  prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
              <PrismicRichText field={slice.primary.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSlice;

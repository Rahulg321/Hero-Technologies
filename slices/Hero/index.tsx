import BackgroundImageSection from "@/components/BackgroundImageSection";
import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import Link from "next/link";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <BackgroundImageSection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      backgroundImage={slice.primary.background_image}
      classname={clsx("max-h-[80vh]")}
    >
      <div className="big-container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="md:text-4xl lg:text-6xl text-white">
              {slice.primary.heading}
            </h1>
            <h3 className="mt-2 block md:mt-4 text-white">
              {slice.primary.tagline}
            </h3>

            <div></div>
          </div>
        </div>
      </div>
    </BackgroundImageSection>
  );
};

export default Hero;

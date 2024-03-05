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
      classname={clsx("min-h-[80vh] px-4")}
    >
      <div className="flex items-center flex-col justify-center h-full px-4">
        <span className=" text-white mb-2 text-2xl lg:text-4xl">
          {slice.primary.heading}
        </span>
        <span className="mt-2 block md:mt-4 text-white">
          {slice.primary.tagline}
        </span>
      </div>
    </BackgroundImageSection>
  );
};

export default Hero;

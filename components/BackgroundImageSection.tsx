import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

type BackgroundImageSectionProps = {
  classname?: string;
  children: React.ReactNode;
  backgroundImage: ImageField;
};

const BackgroundImageSection = ({
  children,
  classname,
  backgroundImage,
}: BackgroundImageSectionProps) => {
  return (
    <section
      className={clsx("group relative overflow-hidden bg-slate-900", classname)}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col gap-12">
        {children}
      </div>
      <PrismicNextImage
        className="trasition absolute left-0 right-0  aspect-1 object-cover opacity-50  duration-300 ease-in-out "
        field={backgroundImage}
        fill
      />
    </section>
  );
};

export default BackgroundImageSection;

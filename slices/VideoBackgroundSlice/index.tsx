import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Video from "next-video";
import backgroundVideo from "@/videos/backgroundNightCity.mp4";

/**
 * Props for `VideoBackgroundSlice`.
 */
export type VideoBackgroundSliceProps =
  SliceComponentProps<Content.VideoBackgroundSliceSlice>;

/**
 * Component for "VideoBackgroundSlice" Slices.
 */
const VideoBackgroundSlice = ({
  slice,
}: VideoBackgroundSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Video
        src={backgroundVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        <h1 className="">{slice.primary.heading}</h1>
        <h3>{slice.primary.tagline}</h3>
      </div>
    </section>
  );
};

export default VideoBackgroundSlice;

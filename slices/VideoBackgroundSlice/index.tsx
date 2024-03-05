import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
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
  const backgroundCity = slice.primary.backgroundvideocity;
  let imageURL;

  const PagesVideos = {
    NewYork:
      "https://firebasestorage.googleapis.com/v0/b/athena-pcte.appspot.com/o/newYorkNight.mp4?alt=media&token=db36e5c4-aa9c-4410-8e82-65302afa144d",
    London:
      "https://firebasestorage.googleapis.com/v0/b/athena-pcte.appspot.com/o/London.mp4?alt=media&token=e85f1909-f61b-411a-a506-9db5b442d90a",
    Chicago:
      "https://firebasestorage.googleapis.com/v0/b/athena-pcte.appspot.com/o/Chicago.mp4?alt=media&token=d9229640-4379-4325-a56b-754379383461",
    WashingtonDC:
      "https://firebasestorage.googleapis.com/v0/b/athena-pcte.appspot.com/o/washingtonDC.mp4?alt=media&token=a864828e-b7a6-4595-a202-33d1dd1b917a",
    Tokyo:
      "https://firebasestorage.googleapis.com/v0/b/athena-pcte.appspot.com/o/Tokyo.mp4?alt=media&token=b59a61e5-69bf-4ff3-9e2c-08d75eb212f7",
  };

  switch (backgroundCity) {
    case "WashingtonDC":
      imageURL = PagesVideos["WashingtonDC"];
      break;
    case "NewYork":
      imageURL = PagesVideos["NewYork"];
      break;
    case "London":
      imageURL = PagesVideos["London"];
      break;
    case "Chicago":
      imageURL = PagesVideos["London"];
      break;
    case "Tokyo":
      imageURL = PagesVideos["London"];
      break;
    default:
      imageURL = PagesVideos["NewYork"];
    // code to execute if no case matches
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-slate-900 min-h-[75vh] max-h-[80vh]"
    >
      <video
        src={imageURL}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-12 text-pretty text-center">
        <span className="mb-2 text-2xl lg:text-4xl">
          {slice.primary.heading}
        </span>
        <span>{slice.primary.tagline}</span>
      </div>
    </section>
  );
};

export default VideoBackgroundSlice;

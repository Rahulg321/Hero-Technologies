import CoreTeamMemberIndex from "@/components/CoreTeamMemberIndex";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `CoreTeamIndex`.
 */
export type CoreTeamIndexProps =
  SliceComponentProps<Content.CoreTeamIndexSlice>;

/**
 * Component for "CoreTeamIndex" Slices.
 */
const CoreTeamIndex = ({ slice }: CoreTeamIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h1 className="heading">Executive Team</h1>
        <Suspense fallback={<p>Loading feed...</p>}>
          <CoreTeamMemberIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default CoreTeamIndex;

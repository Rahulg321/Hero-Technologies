import CoreTeamMemberIndex from "@/components/CoreTeamMemberIndex";
import TeamMemberCard from "@/components/TeamMemberCard";
import MemberCardSkeleton from "@/components/skeletons/MemberCardSkeleton";
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
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
            </div>
          }
        >
          <CoreTeamMemberIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default CoreTeamIndex;

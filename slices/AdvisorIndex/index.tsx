import AdvisorMemberIndex from "@/components/AdvisorMemberIndex";
import MemberCardSkeleton from "@/components/skeletons/MemberCardSkeleton";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `AdvisorIndex`.
 */
export type AdvisorIndexProps = SliceComponentProps<Content.AdvisorIndexSlice>;

/**
 * Component for "AdvisorIndex" Slices.
 */
const AdvisorIndex = ({ slice }: AdvisorIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h1 className="heading dark:after:bg-white">Hero Advisors</h1>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
              <MemberCardSkeleton />
            </div>
          }
        >
          <AdvisorMemberIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default AdvisorIndex;

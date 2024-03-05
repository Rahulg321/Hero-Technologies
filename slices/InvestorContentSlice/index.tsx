import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
// import InvestorDeck from "@/public/InvestorDeck.pdf";

/**
 * Props for `InvestorContentSlice`.
 */
export type InvestorContentSliceProps =
  SliceComponentProps<Content.InvestorContentSliceSlice>;

/**
 * Component for "InvestorContentSlice" Slices.
 */
const InvestorContentSlice = ({
  slice,
}: InvestorContentSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="text-center">
          <h2 className="mb-4">Check out our Investor Deck</h2>
          <Button asChild>
            <Link href="InvestorDeck.pdf" target="_blank">
              Investor Deck
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestorContentSlice;

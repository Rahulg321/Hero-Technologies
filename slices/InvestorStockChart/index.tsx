import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TradingViewWidget from "@/components/StockChart";
import Link from "next/link";
import { Suspense } from "react";
import { MdArrowOutward } from "react-icons/md";

/**
 * Props for `InvestorStockChart`.
 */
export type InvestorStockChartProps =
  SliceComponentProps<Content.InvestorStockChartSlice>;

/**
 * Component for "InvestorStockChart" Slices.
 */
const InvestorStockChart = ({
  slice,
}: InvestorStockChartProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <Link
                href={"InvestorDeck.pdf"}
                className="lead text-2xl hover:text-yellow-400 dark:hover:text-yellow-600 transition flex items-center justify-center gap-4"
                target="_blank"
              >
                Investor Deck <MdArrowOutward />
              </Link>
              <Link
                href={
                  "https://www.sec.gov/edgar/browse/?CIK=1324736&owner=exclude"
                }
                className="lead text-2xl hover:text-yellow-400 dark:hover:text-yellow-600 transition flex items-center justify-center gap-4 my-4"
                target="_blank"
              >
                SEC FILINGS
                <MdArrowOutward />
              </Link>
              <Link
                href={"https://www.otcmarkets.com/stock/HENC/overview"}
                className="lead text-2xl hover:text-yellow-400 dark:hover:text-yellow-600 transition flex items-center justify-center gap-4"
                target="_blank"
              >
                STOCK INFORMATION
                <MdArrowOutward />
              </Link>
            </div>
            <div className="">
              <h2 className="mb-2">Industry Insights</h2>
              <p>Stock Information</p>
              <Suspense fallback={<div>Loading Stock Information</div>}>
                <TradingViewWidget />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorStockChart;

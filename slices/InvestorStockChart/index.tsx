import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TradingViewWidget from "@/components/StockChart";

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
          <div className="">
            <div className="">
              <h2 className="mb-2">Industry Insights</h2>
              <p>Stock Information</p>
            </div>
            <div className="">
              <TradingViewWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorStockChart;

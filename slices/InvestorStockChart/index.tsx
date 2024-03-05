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
      className="block-space min-h-[50vh]"
    >
      <div className="big-container">
        <div className="text-center">
          <div className="mb-4">
            <h2 className="mb-2">Industry Insights</h2>
            <p>Stock Information</p>
          </div>
          <TradingViewWidget />
        </div>
      </div>
    </section>
  );
};

export default InvestorStockChart;

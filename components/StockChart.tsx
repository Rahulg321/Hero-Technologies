"use client";

// TradingViewWidget.jsx
import React, { useEffect, useRef } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function TradingViewWidget() {
  return (
    <>
      <AdvancedRealTimeChart
        theme="dark"
        symbol="HENC"
        height={"610"}
        width={"800"}
      ></AdvancedRealTimeChart>
      {/* <TechnicalAnalysis
        colorTheme="dark"
        height={"610"}
        width={"600"}
      ></TechnicalAnalysis> */}
    </>
  );
}

export default TradingViewWidget;

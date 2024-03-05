"use client";

// TradingViewWidget.jsx
import React, { useEffect, useRef } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function TradingViewWidget() {
  return (
    <div className="h-[70vh]">
      <AdvancedRealTimeChart
        theme="dark"
        symbol="HENC"
        autosize={true}
      ></AdvancedRealTimeChart>
    </div>
  );
}

export default TradingViewWidget;

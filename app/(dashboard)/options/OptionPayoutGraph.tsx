"use client";
import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";
import { OptionProfitResult } from "./OptionDataModel";

export function OptionPayoutGraph({ s }: { s: OptionProfitResult | null; }) {
  const data = React.useMemo(() => {
    if (s == null) {
      return [];
    }
    return s.results;
  }, [s]);

  if (s == null) {
    return null;
  }
  const label1 = s.labels[0];
  const label2 = s.labels[1];
  const label3 = s.labels[2];
  // console.log(data);
  return (
    <RaisedBorderCard

      sx={{
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        minHeight: '70vh', // Ensures the container takes up the full viewport height
      }}
    >
      <LineChart
        dataset={data as any}
        height={400}
        // width={400}
        grid={{ vertical: true, horizontal: true }}
        xAxis={[{ id: "price", dataKey: "price" }]}
        yAxis={[{ width: 80 }]}
        series={[
          {
            id: "profit1",
            label: label1,
            dataKey: "profit1",
            curve: "linear",
            showMark: false,
            //   area : true
          },
          {
            id: "profit2",
            label: label2,
            dataKey: "profit2",
            curve: "linear",
            showMark: false,
          },
          {
            id: "profit3",
            label: label3,
            dataKey: "profit3",
            curve: "linear",
            showMark: false,
          },
        ]}
      >

      </LineChart>
    </RaisedBorderCard>
  );
}

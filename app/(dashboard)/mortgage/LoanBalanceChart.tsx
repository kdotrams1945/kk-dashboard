"use client";
import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import { LineChart } from "@mui/x-charts/LineChart";
import { AmortizationSchedule } from "./DataModel";
import { GetYearlyResults } from "./Utilities";

export function LoanBalanceChart({ s }: { s: AmortizationSchedule | null; }) {
  const data = GetYearlyResults(s);

  return (
    <RaisedBorderCard
      padding={2}
      sx={{
        display: "grid",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        // minHeight: '100vh', // Ensures the container takes up the full viewport height
      }}
    >
      <LineChart
        dataset={data as any}
        height={400}
        width={440}
        xAxis={[
          { id: "Month", label: "Month", dataKey: "period", scaleType: "linear", min: 1, },
        ]}
        yAxis={[{ width: 100, min: 0, valueFormatter: (x: number) => x ? '$' + x.toFixed(2) : "" }]}

        series={[
          {
            id: "balance",
            label: "Balance",
            dataKey: "loanBalance",
            curve: "catmullRom",
            showMark: false,
            area: true,
            valueFormatter: x => x ? '$' + x.toFixed(2) : ""
          },
        ]} />
    </RaisedBorderCard>
  );
}

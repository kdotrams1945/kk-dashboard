"use client";
import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  AmortizationPeriodDetail,
  AmortizationSchedule
} from "./DataModel";
import { GetYearlyResults } from "./Utilities";
import { CardContent, CardHeader, Typography } from "@mui/material";

export function PaymentCharts({ s }: { s: AmortizationSchedule | null; }) {
  const data: AmortizationPeriodDetail[] = GetYearlyResults(s);

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
        
      <Typography component="h3" variant="h6" gutterBottom textAlign={"center"}>
              Payment Chart
            </Typography> 
       
      <LineChart
        dataset={data as any}
        height={400}
         width={440}
        xAxis={[
          { id: "Month", label: "Month", dataKey: "period", scaleType: "linear", min: 1 },
        ]}
        yAxis={[{ width: 70, valueFormatter: (x: number) => x ? '$' + x.toFixed(2) : "" }]}
        series={[
          {
            id: "principal",
            label: "Principal",
            dataKey: "principalPayment",
            stack: "total",
            area: true,
            curve: "catmullRom",
            showMark: false,
            valueFormatter: x => x ? '$' + x.toFixed(2) : "",
            labelMarkType: 'circle'
          },
          {
            id: "interest",
            label: "Interest",
            dataKey: "interestPayment",
            stack: "total",
            area: true,
            curve: "catmullRom",
            showMark: false,
            valueFormatter: x => x ? '$' + x.toFixed(2) : ""
          },
        ]} />
       
    </RaisedBorderCard>
  );
}

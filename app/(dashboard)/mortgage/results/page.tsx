"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import { AmortizationSchedule } from "../DataModel";
import { PaymentPieChart } from "../PaymentPieChart";
import { PaymentCharts } from "../PaymentCharts";
import { LoanBalanceChart } from "../LoanBalanceChart";
import PeriodDetailsTable from "../PeriodDetailsTable";

export default function MortgageResultsPage() {
  /* ---------------- state ---------------- */
  const params = useSearchParams();
  const [schedule, setSchedule] = useState<AmortizationSchedule | null>(null);

 
  useEffect(() => {
    const qs = params.toString();               
    if (!qs) return;

    fetch(`https://kkbackend-production-d38e.up.railway.app/amortizationSchedule?${qs}`)
      .then(r => r.json())
      .then(setSchedule)
      .catch(console.error);
  }, [params]);

  /* -------- render -------- */
  if (!schedule) return <p>Loading…</p>;          // minimal fallback

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid alignContent={"center"} size={12}><PaymentPieChart schedule={schedule} /></Grid>
       
        <Grid size={6}><PaymentCharts  s={schedule} /></Grid>
        <Grid size={6}><LoanBalanceChart s={schedule} /></Grid>
      
        

        <Grid size={12}>
          <RaisedBorderCard padding={3}>
            <Typography variant="h6"  textAlign={"center"} gutterBottom>
              Amortization Period Details
            </Typography>
            <CardContent>
              <Box mt={4}>
                <PeriodDetailsTable s={schedule} />
              </Box>
            </CardContent>
          </RaisedBorderCard>
        </Grid>
      </Grid>
    </Box>
  );
}
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
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function MortgageResultsPage() {
  /* ---------------- state ---------------- */
  const router = useRouter();
  const params = useSearchParams();
  const [schedule, setSchedule] = useState<AmortizationSchedule | null>(null);

  useEffect(() => {
    const qs = params.toString();
    if (!qs) return;

    fetch(
      `https://kkbackend-production-d38e.up.railway.app/amortizationSchedule?${qs}`
    )
      .then((r) => r.json())
      .then(setSchedule)
      .catch(console.error);
  }, [params]);

  /* -------- render -------- */
  if (!schedule) return <p>Loading…</p>; // minimal fallback

  return (
    <>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="outlined"
          startIcon={""}
          onClick={() => router.push("/mortgage")}
          sx={{
            fontWeight: 600,
            textTransform: "none",
            borderColor: "#555",
            color: "#555",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Back to Inputs
        </Button>
      </Box>

      <Grid
        container
        display={"flex"}
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid size={12}>
          <Typography variant="h4" textAlign={"center"} gutterBottom>
            Loan Payment Analysis
          </Typography>
        </Grid>
        <Grid justifyContent="center" alignItems="center" size={12}>
          <PaymentPieChart schedule={schedule} />
        </Grid>

        <Grid size={6}>
          <PaymentCharts s={schedule} />
        </Grid>
        <Grid size={6}>
          <LoanBalanceChart s={schedule} />
        </Grid>

        <Grid size={12}>
          <RaisedBorderCard padding={3}>
            <Typography variant="h6" textAlign={"center"} gutterBottom>
              Period Details
            </Typography>
            <CardContent>
              <Box mt={4}>
                <PeriodDetailsTable s={schedule} />
              </Box>
            </CardContent>
          </RaisedBorderCard>
        </Grid>
      </Grid>
    </>
  );
}

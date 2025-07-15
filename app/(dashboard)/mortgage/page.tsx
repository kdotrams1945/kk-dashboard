"use client";
import Calculate from "@mui/icons-material/CalculateRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import Grid from "@mui/material/Grid";
import {
  AmortizationSchedule,
  FormValues,
} from "./DataModel";
import { LoanBalanceChart } from "./LoanBalanceChart";
import { PaymentCharts } from "./PaymentCharts";
import { PaymentPieChart } from "./PaymentPieChart";
import PeriodDetailsTable from "./PeriodDetailsTable";

export default function Home() {
  const [schedule, setSchedule] = useState<AmortizationSchedule | null>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    loanAmount: 200000,
    interestRate: 7.5,
    years: 30,
    extraPayment: 0,
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    let data = {
      loan: formValues.loanAmount.toString(),
      yearlyInterestRate: formValues.interestRate.toString(),
      years: formValues.years.toString(),
      extraPayment: formValues.extraPayment.toString(),
    };
    console.log(data);
    const urlParams = new URLSearchParams(data);
   // const url = `http://localhost:8080/amortizationSchedule?${urlParams}`;
const url= `https://kkbackend-production-d38e.up.railway.app/amortizationSchedule?${urlParams}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Success:", response);
        setSchedule(response);
      })
      .catch((error) => console.error("Error:", error));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  var isCalculated = schedule != null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        display={"flex"}
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        columns={{ xs: 4, sm: 8 }}
      >
        <Grid size={4}>{showForm()}</Grid>
        <Grid size={4}><PaymentPieChart schedule={schedule}/></Grid>
        <Grid size={4}>
          {isCalculated ? (
            <Box sx={{ flexDirection: "col", flexGrow: 1 }}>
              <PaymentCharts s={schedule} />
            </Box>
          ) : (
            <div />
          )}
        </Grid>
        <Grid size={4}>
          {isCalculated ? (
            <Box sx={{ flexDirection: "col", flexGrow: 1 }}>
              <LoanBalanceChart s={schedule} />
            </Box>
          ) : (
            <div />
          )}
        </Grid>
        <Grid size={12}>
          {isCalculated ? (
            <RaisedBorderCard padding={3}>
               <Typography component="h3" variant="h5" gutterBottom>
            Amortization Period Details
          </Typography>
              <CardContent>
                <Box mt={4}>
                  <PeriodDetailsTable s={schedule} />
                </Box>
              </CardContent>
            </RaisedBorderCard>
          ) : (
            <div />
          )}
        </Grid>
      </Grid>
    </Box>
  );

  function showForm() {
    return (
      <RaisedBorderCard
      padding={1}
        sx={{
          height: "100%",
          display: "grid",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          // minHeight: '100vh', // Ensures the container takes up the full viewport height
        }}
      >
        <CardContent>
          <Typography component="h3" variant="h5" gutterBottom>
            Loan details
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack
              direction="column"
              component="section"
              sx={{ p: 4 }}
              spacing={2}
            >
              <TextField
                required
                id="outlined-amount"
                label="Loan"
                type="number"
                name="loanAmount"
                value={formValues.loanAmount}
                onChange={handleChange}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">$ </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                required
                name="interestRate"
                id="outlined-rate"
                label="Annual Rate (%)"
                type="number"
                value={formValues.interestRate}
                onChange={handleChange}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="start">%</InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                required
                name="years"
                id="outlined-years"
                label="Years"
                type="number"
                value={formValues.years}
                onChange={handleChange}
              />
              <TextField
                required
                name="extraPayment"
                id="outlined-extra"
                label="Additional Payment"
                type="number"
                value={formValues.extraPayment}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                fullWidth
                startIcon={<Calculate />}
                type="submit"
                sx={{
                  background: "linear-gradient(180deg,#1d1f26 0%,#090a0f 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg,#2b2e37 0%,#14161d 100%)",
                  },
                }}
              >
                Calculate
              </Button>
            </Stack>
          </form>
        </CardContent>
      </RaisedBorderCard>
    );
  }
}

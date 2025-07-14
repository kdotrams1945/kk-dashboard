"use client";
import Calculate from "@mui/icons-material/CalculateRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";
import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { PieChart } from "@mui/x-charts/PieChart";
import { AmortizationSchedule, FormValues, AmortizationPeriodDetail } from "./DataModel";
import { DataGridDemo } from "./DataGridDemo";
import { SpaceBar } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import RaisedBorderCard from "@/app/components/RaisedBorderCard";

export default function Home() {
  const [schedule, setSchedule] = useState<AmortizationSchedule>();
  const [formValues, setFormValues] = useState<FormValues>({
    loanAmount: 200000,
    interestRate: 7.5,
    years: 30,
    extraPayment: 0,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let data = {
      loan: formValues.loanAmount.toString(),
      yearlyInterestRate: formValues.interestRate.toString(),
      years: formValues.years.toString(),
      extraPayment: formValues.extraPayment.toString(),
    };
    console.log(data);
    const urlParams = new URLSearchParams(data);
    const url = `http://localhost:8080/amortizationSchedule?${urlParams}`;

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
  };

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

        // alignItems={'stretch'}
      >
        {/* <Grid size={4}>{showForm()}</Grid> */}
        <Grid size={4}>
  {!isCalculated && showForm()}
</Grid>
        <Grid size={4}>{showMonthlyPayment(schedule)}</Grid>
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
              <PaymentCharts2 s={schedule} />
            </Box>
          ) : (
            <div />
          )}
        </Grid>
        <Grid size={8}>
          {isCalculated ? (
            <RaisedBorderCard>
              <CardContent>
                <Box mt={4}>
                  <DataGridDemo s={schedule} />
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
        sx={{
          height: "100%",
          display: "grid",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          // minHeight: '100vh', // Ensures the container takes up the full viewport height
        }}
      >
        <CardContent>
          <Typography component="h3" gutterBottom>
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

function showMonthlyPayment(b: AmortizationSchedule) {
  if (b != null) {
    var interestPaymentsTotal: number = 0;
    var principalPayment: number = 0;
    for (let num of b.details) {
      interestPaymentsTotal += num.interestPayment;
      principalPayment += num.principalPayment;
    }
    return (
      <RaisedBorderCard
        sx={{
          
          height: "100%",
          display: "grid",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          // minHeight: '100vh', // Ensures the container takes up the full viewport height
        }}
      >
        <CardContent>
          <PieChart
          
        slotProps={{
          legend: {
            direction: 'horizontal',
            position: { 
              vertical: 'bottom',
              horizontal: 'center'
            }
          }
        }}
            series={[
              {
              
                data: [
                  {
                    id: 0,
                    value: interestPaymentsTotal,
                    label: "Interest Payments",
                  },
                  { id: 1, value: principalPayment, label: "Loan Payments" },
                ],
                // innerRadius: 50,
                // // outerRadius: 100,
                paddingAngle: 1,
                cornerRadius: 1,
                arcLabel: (item) => `${item.value.toFixed(0)}`,
                highlightScope: { fade: 'global', highlight: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
               
                
              },
            ]}
            // margin={10}
            height={400}
            
          />
         
          <br/>
          {/* <Divider/>
          <Typography align="center" component="h3" sx={{ mb: 2 }}>
            Monthly Payment is ${b.monthlyPayment.toFixed(2)}
          </Typography>
          
          <Typography align="center" component="h3" sx={{ mb: 2 }}>
            Total interest payments ${interestPaymentsTotal.toFixed(2)}
          </Typography> */}
        </CardContent>
      </RaisedBorderCard>
    );
  }
  return null;
}

function PaymentCharts({ s }: { s: AmortizationSchedule }) {

  const data: AmortizationPeriodDetail[] = newFunction(s);

  return (
    <RaisedBorderCard
      elevation={15}
      sx={{
        display: "grid",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        // minHeight: '100vh', // Ensures the container takes up the full viewport height
      }}
    >
      <LineChart
        dataset={data}
        height={400}
        width={400}
        xAxis={[
          { id: "period", dataKey: "period", scaleType: "linear", min: 1 },
        ]}
        //  yAxis={[{ width: 80 }]}
        series={[
          {
            id: "principal",
            label: "Principal",
            dataKey: "principalPayment",
            stack: "total",
            area: true,
            curve: "catmullRom",
            showMark: false,
          },
          {
            id: "interest",
            label: "Interest",
            dataKey: "interestPayment",
            stack: "total",
            area: true,
            curve: "catmullRom",
            showMark: false,
          },
        ]}
      />
    </RaisedBorderCard>
  );
}

function newFunction(s: AmortizationSchedule): AmortizationPeriodDetail[] {
  return React.useMemo<AmortizationPeriodDetail[]>(
    () => {
      if (s == null) {
        return [];
      }
      return s.details.filter(
        (d) => (d.period - 1) % 12 === 0 || d.period === s.details.length
      );
    },
    [s]
  );
}

function PaymentCharts2({ s }: { s: AmortizationSchedule }) {
 
  
  const data = newFunction(s);

  return (
    <RaisedBorderCard
      sx={{
        display: "grid",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        // minHeight: '100vh', // Ensures the container takes up the full viewport height
      }}
    >
      <LineChart
        dataset={data}
        height={400}
        width={500}
        xAxis={[
          { id: "period", dataKey: "period", scaleType: "linear", min: 1 },
        ]}
        yAxis={[{ width: 80, min: 0 }]}
        series={[
          {
            id: "balance",
            label: "Balance",
            dataKey: "loanBalance",
            curve: "catmullRom",
            showMark: false,
            area: true,
          },
        ]}
      />
    </RaisedBorderCard>
  );
}

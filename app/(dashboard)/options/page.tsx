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
import React, { useState } from "react";
import { SelectChangeEvent } from '@mui/material/Select';

import { FormValues, OptionProfitResult } from "./OptionDataModel";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { LineChart } from "@mui/x-charts/LineChart";
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import RaisedBorderCard from "@/app/components/RaisedBorderCard";
export default function Home() {
  const [optionResult, setOptionResult] = useState<OptionProfitResult | null>(null);
  const [optionResult2, setOptionResult2] = useState<OptionProfitResult| null>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    stockPrice: 210,
   
    yearlyInterestRate: 0.045,
   
    sigma: 0.3,
    item1StrikePrice: 220,
    item1DaysUntillExpiry: 360,
    item1Type:'Put',
    item2strikePrice: 220,
    item2contracts:1,
    item1Contracts:1,
    item2daysUntilExpiry: 360,
    item2Type:'Put',
    quantity:0
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // optionResult.results[]
    let data = {
      stockPrice: formValues.stockPrice.toString(),
      item1StrikePrice: formValues.item1StrikePrice.toString(),
      yearlyInterestRate: formValues.yearlyInterestRate.toString(),
      item1DaysUntillExpiry: formValues.item1DaysUntillExpiry.toString(),
      sigma: formValues.sigma.toString(),
      item1Contracts : formValues.item1Contracts.toString(),

      item2strikePrice: formValues.item2strikePrice.toString(),
      item2daysUntilExpiry: formValues.item2daysUntilExpiry.toString(),
      item2contracts : formValues.item2contracts.toString(),
      item2Type:formValues.item2Type,
      item1Type:formValues.item1Type,
      quantity:formValues.quantity.toString()

    };
 
    console.log(data);
    const urlParams = new URLSearchParams(data);
  //  const url = `http://localhost:8080/option-analysis?${urlParams}`;
  //  https://kkbackend-production-d38e.up.railway.app/
  const url = ` https://kkbackend-production-d38e.up.railway.app/option-analysis?${urlParams}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Success:", response);
        setOptionResult(response[0]);
        setOptionResult2(response[1]);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  var isCalculated = optionResult != null;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        display={"flex"}
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        columns={{ xs: 4, sm: 8 }}
      >
        <Grid size={8}>{showForm()}</Grid>

        <Grid size={12}>
          {isCalculated ? (
            <Box sx={{ flexDirection: "col", flexGrow: 1 }}>
              <PaymentCharts s={optionResult} />
            </Box>
          ) : (
            <div />
          )}
        </Grid>
         <Grid size={12}>
          {isCalculated ? (
            <Box sx={{ flexDirection: "col", flexGrow: 1 }}>
              <PaymentCharts s={optionResult2} />
            </Box>
          ) : (
            <div />
          )}
        </Grid> 
      </Grid>
    </Box>
  );

  function Item1() {
    const item1 = <Card component="section" sx={{ p: 2, border: '1px grey' }}>
    <Typography variant="h6" component="div">
      Option 1
    </Typography>
    <Stack
      direction="row"
      component="section"
      sx={{ p: 3 }}
      spacing={2}
    >
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="item1Type"
    value={formValues.item1Type}
    label="item1Type"
    onChange={handleSelectChange}
  >
    <MenuItem value={'Call'}>Call</MenuItem>
    <MenuItem value={'Put'}>Put</MenuItem>
  </Select>
      <TextField
        required
        id="outlined-item1StrikePrice"
        label="Strike Price"
        type="number"
        name="item1StrikePrice"
        value={formValues.item1StrikePrice}
        onChange={handleTextFieldChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">$ </InputAdornment>
            ),
          },
        }} />

      <TextField
        required
        id="outlined-item1DaysUntillExpiry"
        label="Days Until Expiry"
        type="number"
        name="item1DaysUntillExpiry"
        value={formValues.item1DaysUntillExpiry}
        onChange={handleTextFieldChange} />
      <TextField
        required
        id="outlined-item1contracts"
        label="contracts"
        type="number"
        name="item1contracts"
        value={formValues.item1Contracts}
        onChange={handleTextFieldChange} />
    </Stack>
  </Card>;
  return item1;
  }

  function Item2() {
    const item2 = <Card component="section" sx={{ p: 2, border: '1px grey' }}>
    <Typography variant="h6" component="div">
      Option 2
    </Typography>
    <Stack
      direction="row"
      component="section"
      sx={{ p: 3 }}
      spacing={2}
    >

<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formValues.item2Type}
    label="item2Type"
    name="item2Type"
    onChange={handleSelectChange}
  >
    <MenuItem value={'Call'}>Call</MenuItem>
    <MenuItem value={'Put'}>Put</MenuItem>
  </Select>
      <TextField
        required
        id="outlined-item2strikePrice"
        label="Strike Price"
        type="number"
        name="item2strikePrice"
        value={formValues.item2strikePrice}
        onChange={handleTextFieldChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">$ </InputAdornment>
            ),
          },
        }} />

      <TextField
        required
        id="outlined-item2daysUntilExpiry"
        label="Days Until Expiry"
        type="number"
        name="item2daysUntilExpiry"
        value={formValues.item2daysUntilExpiry}
        onChange={handleTextFieldChange} />
      <TextField
        required
        id="outlined-item2contracts"
        label="contracts"
        type="number"
        name="item2contracts"
        value={formValues.item2contracts}
        onChange={handleTextFieldChange} />
    </Stack>
  </Card>;
  return item2;
  }
  
  function showForm() {
   
    return (
      <Card
        sx={{
          display: "grid",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          // minHeight: '100vh', // Ensures the container takes up the full viewport height
        }}
      >
        <CardContent>
          <Typography component="h4" variant="h4" gutterBottom>
            Option Details
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack
              direction="row"
              component="section"
              sx={{ p: 3 }}
              spacing={2}
            >
              <TextField
                required
                id="outlined-yearlyInterestRate"
                label="Yearly Interest Rate"
                type="number"
                name="yearlyInterestRate"
                value={formValues.yearlyInterestRate}
                onChange={handleTextFieldChange}
              />
              <TextField
                required
                id="outlined-stockPrice"
                label="Stock Price"
                type="number"
                name="stockPrice"
                value={formValues.stockPrice}
                onChange={handleTextFieldChange}
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
                id="outlined-sigma"
                label="Sigma"
                type="number"
                name="sigma"
                value={formValues.sigma}
                onChange={handleTextFieldChange}
              />
               <TextField
                required
                id="outlined-quantity"
                label="quantity"
                type="number"
                name="quantity"
                value={formValues.quantity}
                onChange={handleTextFieldChange}
              />
            </Stack>
            <Divider orientation="vertical" flexItem />
            {Item1()}
            <Divider orientation="vertical" flexItem />
            {Item2()}
            <Button 
              variant="contained"
              fullWidth
              startIcon={<RequestQuoteOutlinedIcon />}
              type="submit"
              // sx={{
              //   background: "linear-gradient(180deg,#1d1f26 0%,#090a0f 100%)",
              //   color: "#fff",
              //   fontWeight: 600,
              //   textTransform: "none",
              //   boxShadow: "none",
              //   "&:hover": {
              //     background: "linear-gradient(180deg,#2b2e37 0%,#14161d 100%)",
              //   },
              // }}
            >
              Generate
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

function PaymentCharts({ s }: { s: OptionProfitResult|null }) {
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
  console.log(data);
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

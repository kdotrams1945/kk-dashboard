"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import { SelectChangeEvent } from '@mui/material/Select';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import { FormValues, OptionAnalysisResult, OptionGreeks } from "./OptionDataModel";

import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { OptionNotes } from "./OptionNotes";
import { OptionPayoutGraph } from "./OptionPayoutGraph";
export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<OptionAnalysisResult | null>(null);
 
  const [formValues, setFormValues] = useState<FormValues>({
    stockPrice: 210,
   
    yearlyInterestRate: 0.045,
   
    sigma: 0.3,
    item1StrikePrice: 220,
    item1DaysUntillExpiry: 360,
    item1Type:'Call',
    item2strikePrice: 220,
    item2contracts:1,
    item1Contracts:1,
    item2daysUntilExpiry: 360,
    item2Type:'Put',
    quantity:0
  });

  React.useEffect(() => {
    const saved = localStorage.getItem('savedFormValues');
    if (saved) {
      setFormValues(JSON.parse(saved));
    }
  }, []);

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
 
 //   console.log(data);
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
    //    console.log("Success:", response);
        setAnalysisResult(response);
      })
      .catch((error) => console.error("Error:", error));
  };

  const updateFormValues = (updatedValues: Partial<FormValues>) => {
    const newFormValues = { ...formValues, ...updatedValues };
    setFormValues(newFormValues);
    localStorage.setItem('savedFormValues', JSON.stringify(newFormValues));
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateFormValues({ [name]: value });
  };
  
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    updateFormValues({ [name]: value });
  };

  var isCalculated = analysisResult != null;
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
        <Grid size={4}>
         <ShowGreeks s={analysisResult?.greeks[0]} t="Option 1 Greeks" />
        </Grid>
        <Grid size={4}>
         <ShowGreeks s={analysisResult?.greeks[1]}  t="Option 2 Greeks" />
        </Grid>
        <Grid size={12}>
          {isCalculated ? (
            <Box sx={{ flexDirection: "col", flexGrow: 1 }}>
              <OptionPayoutGraph s={analysisResult?.results[0]} />
            </Box>
          ) : (
            <div />
          )}
        </Grid>
         <Grid size={12}>
          {isCalculated ? (
            <Box sx={{ flexDirection: "col", flexGrow: 1 }}>
              <OptionPayoutGraph s={analysisResult?.results[1]} />
            </Box>
          ) : (
            <div />
          )}
        </Grid> 
      </Grid>
    </Box>
  );
  function ShowGreeks({ s , t}: { s: OptionGreeks|undefined, t:string }){
    const dataExists = s && s != null;

    return dataExists ? (
    <RaisedBorderCard sx={{ padding: 2, minWidth: 250 }}>
      <Typography variant="h6" gutterBottom>
        {t} 
      </Typography>

      <Stack direction="column" spacing={1}>
        <Typography variant="body2">Delta (Δ) = {s.delta.toFixed(4)}</Typography>
        <Typography variant="body2">Gamma (Γ)= {s.gamma.toFixed(4)}</Typography>
        <Typography variant="body2">Theta (Θ) = {s.theta.toFixed(4)}</Typography>
        <Typography variant="body2">Vega (ν)= {s.vega.toFixed(4)}</Typography>
        <Typography variant="body2">Rho (Ρ) = {s.rho.toFixed(4)}</Typography>
      </Stack>
    </RaisedBorderCard>) 
    : 
    (<div/>);
  }

  function Stock() {
    const item1 = <Card component="section" sx={{ p: 2, border: '1px grey' }}>
    <Typography variant="h6" component="div">
      Stock
    </Typography>
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      component="section"
      sx={{ p: 3 }}
      spacing={2}
    >
      <TextField
                required
                id="outlined-quantity"
                label="Quantity"
                type="number"
                name="quantity"
                value={formValues.quantity}
                onChange={handleTextFieldChange}
              />
      </Stack>
      </Card>;
      return item1;
  }

  function OptionItem1() {
    const item1 = <Card component="section" sx={{ p: 2, border: '1px grey' }}>
    <Typography variant="h6" component="div">
      Option 1
    </Typography>
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
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
        label="Contracts"
        type="number"
        name="item1contracts"
        value={formValues.item1Contracts}
        onChange={handleTextFieldChange} />
    </Stack>
  </Card>;
  return item1;
  }

  function OptionItem2() {
    const item2 = <Card component="section" sx={{ p: 2, border: '1px grey' }}>
    <Typography variant="h6" component="div">
      Option 2
    </Typography>
    <Stack
     direction={{ xs: 'column', sm: 'row' }}
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
        label="Contracts"
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
      <RaisedBorderCard
        sx={{
          position: "relative",
          display: "grid",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          // minHeight: '100vh', // Ensures the container takes up the full viewport height
        }}
      >
         <Button
        variant="outlined"
        color="error"
        onClick={() => {
         setAnalysisResult(null);
        }}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          fontWeight: 600,
          textTransform: "none",
        }}
      >
        Reset Charts
      </Button>
        <CardContent>
          <Typography component="h4" variant="h4" gutterBottom>
            Option Strategy Details
          </Typography>
        
          <form onSubmit={handleSubmit}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              component="section"
              sx={{ p: 3 }}
              spacing={2}
            >
             
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
                id="outlined-yearlyInterestRate"
                label="Risk Free Rate"
                type="number"
                name="yearlyInterestRate"
                value={formValues.yearlyInterestRate}
                onChange={handleTextFieldChange}
              />
              <TextField
                required
                id="outlined-sigma"
                label=" Sigma (σ)"

                type="number"
                name="sigma"
                value={formValues.sigma}
                onChange={handleTextFieldChange}
              />
              
            </Stack>
            
              <Stock/>
                <div>&nbsp;</div>
            {OptionItem1()}
            <Divider orientation="vertical" flexItem />
            <div>&nbsp;</div>
            {OptionItem2()}
            <div>&nbsp;</div>
            <Button 
              variant="contained"
              fullWidth
              startIcon={<RequestQuoteOutlinedIcon />}
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
              Analyze Strategy
            </Button>
          </form>
          <OptionNotes/>
        </CardContent>
      </RaisedBorderCard>
    );
  }
}




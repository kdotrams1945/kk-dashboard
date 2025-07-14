"use client";
import Calculate from '@mui/icons-material/CalculateRounded';
import Height from '@mui/icons-material/HeightOutlined';
import Weight from '@mui/icons-material/MonitorWeightRounded';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from '@mui/material/Container';
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

interface FormValues {
  height: number;
  weight: number;
}

export default function Home() {
  const [bmi, setBmi] = useState(2);
  const [formValues, setFormValues] = useState<FormValues>({
    height: 180,
    weight: 80,
  });

  const handleSubmit2 = (event: React.FormEvent) => {
    event.preventDefault();

    let data = {
      height: (formValues.height / 100).toString(),
      weight: formValues.weight.toString(),
      units: "metric",
    };
    console.log(data);
    const urlParams = new URLSearchParams(data);
    const urlProd = `http://localhost:8080/BMI?${urlParams}`;
    //const urlProd = `https://kkbackend-production-d38e.up.railway.app/BMI?${urlParams}`

    fetch(urlProd, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Success:", JSON.stringify(response));
        setBmi(parseFloat(JSON.stringify(response)));
      })
      .catch((error) => console.error("Error:", error));
  };
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  return (
    
      
     <Container maxWidth="xs" >
   <Card variant="outlined" sx={{
      display: 'flex',
      justifyContent: 'center', // Centers horizontally
      alignItems: 'center', // Centers vertically
      // minHeight: '100vh', // Ensures the container takes up the full viewport height
    }}>
      <CardContent>
        <Typography component="h2" variant="h3" gutterBottom>
         Enter height and weight
        </Typography>
      <form onSubmit={handleSubmit2}>
        <Stack direction="column" component="section"
         sx={{ p: 3}} 
         spacing={3}>
        <TextField
          required
          id="outlined-height"
          label="Height (cm)"
          type="number"
          name="height"
          value={formValues.height}
          onChange={handleChange}
      
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="start">cm</InputAdornment>,
              startAdornment: <InputAdornment position="start"><Height /> </InputAdornment>
             
            },
          }}
        />
        <TextField
          required
          name="weight"
          id="outlined-weight"
          label="Weight (kg)"
          type="number"
          value={formValues.weight}
          onChange={handleChange}
          
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="start">kg</InputAdornment>,
              startAdornment: <InputAdornment position="start"><Weight /> </InputAdornment>
              
              
            }
          }}
        />

      
         
        <Button
          variant="contained"
          size="small"
      //    color="neutral"
          startIcon={<Calculate fontSize="inherit"/>} 
          type="submit" >
      
          
            Calculate
          </Button>
          
          {showBMI(bmi)}
          
          </Stack>
        
      </form>
      </CardContent>
      </Card>
   </Container>
  );
}

function showBMI(b: number) {
  if (b > 0) {

    return  <Typography align="center"  component="h2" variant="h6" sx={{ mb: 2 }}>
    BMI is {b.toFixed(4)}
  </Typography>;
  }
  return null;
}

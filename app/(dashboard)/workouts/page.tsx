"use client";
import Calculate from '@mui/icons-material/CalculateRounded';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import React, { useState } from "react";

interface FormValues {
  bodyParts: string;
  goal: string;
  equipment: string;
  daysPerWeek : number;

}

interface Exercise {
  exerciseName : string;
  reps: number;
  sets: number;
  equipment: string;
  description : string;
}
interface Workout {
  exercises : Exercise[]
}

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>();
  const [formValues, setFormValues] = useState<FormValues>({
    bodyParts: 'Full body',
    goal: 'hypertrophy',
    equipment:'all',
    daysPerWeek :3
  });

  const handleSubmit2 = (event: React.FormEvent) => {
    event.preventDefault();

    let data = {
      bodyParts: formValues.bodyParts.toString(),
      goal: formValues.goal.toString(),
      daysPerWeek: formValues.daysPerWeek.toString(),
      equipment: formValues.equipment.toString()
   
    };
    console.log(data);
    const urlParams = new URLSearchParams(data);
  //  const urlProd = `http://localhost:8080/generateRoutine?${urlParams}`;
    const urlProd = `https://kkworkout-production.up.railway.app/generateRoutine?${urlParams}`

    fetch(urlProd, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Success:", JSON.stringify(response));
        setWorkouts(response);
      })
      .catch((error) => console.error("Error:", error));
  };
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  return (
    
      
     <Container  >
   <Card variant="outlined" sx={{
      display: 'flex',
      justifyContent: 'center', // Centers horizontally
      alignItems: 'center', // Centers vertically
      // minbodyParts: '100vh', // Ensures the container takes up the full viewport bodyParts
    }}>
      <CardContent>
        <Typography component="h2" variant="h6" gutterBottom>
         Enter workout goals
        </Typography>
      <form onSubmit={handleSubmit2}>
        <Stack direction="column" component="section"
         sx={{ p: 3}} 
         spacing={3}>
        <TextField
          required
          id="outlined-bodyParts"
          label="Body Parts"
          type="string"
          name="bodyParts"
          value={formValues.bodyParts}
          onChange={handleChange}
      
          
        />
        <TextField
          required
          name="goal"
          id="outlined-goal"
          label="Goal"
          type="string"
          value={formValues.goal}
          onChange={handleChange}
          
         
        />
           <TextField
          required
          name="equipment"
          id="outlined-equipment"
          label="equipment"
          type="string"
          value={formValues.equipment}
          onChange={handleChange}
          
         
        />

<TextField
          required
          name="daysPerWeek"
          id="outlined-days"
          label="Days Per Week"
          type="number"
          value={formValues.daysPerWeek}
          onChange={handleChange}
          
         
        />

      
         
        <Button
          variant="contained"
          size="small"
      //    color="neutral"
          startIcon={<Calculate fontSize="inherit"/>} 
          type="submit" >
      
          
            Generate ..
          </Button>
          
          {/* {showBMI(bmi)} */}
          
          </Stack>
        
      </form>
      </CardContent>
      </Card>
      {showWorkoutData(workouts)}
   </Container>
  );
}

 function showWorkoutData(workouts: Workout[] | undefined) {
  if (!workouts)
  return <div/>;
  else
return (
  <Box>
    {workouts.map((day, index) => (
      <Box key={index} mb={4}>
        <Typography variant="h6" gutterBottom>
          Workout Day {index + 1}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Exercise</b></TableCell>
                <TableCell><b>Reps</b></TableCell>
                <TableCell><b>Sets</b></TableCell>
                <TableCell><b>Equipment</b></TableCell>
                <TableCell><b>Description</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {day.exercises.map((exercise, i) => (
                <TableRow key={i}>
                  <TableCell>{exercise.exerciseName}</TableCell>
                  <TableCell>{exercise.reps}</TableCell>
                  <TableCell>{exercise.sets}</TableCell>
                  <TableCell>{exercise.equipment}</TableCell>
                  <TableCell>{exercise.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    ))}
  </Box>
);
};


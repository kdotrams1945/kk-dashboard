import { Box, Stack, Typography, Grid } from "@mui/material";
import InfoCard, { resumeItem, workExperience, education,projects, awards,skills } from "./InfoCard";
import { Work } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
export default function HomePage() {

  return (
    <Grid
      container
      display={"flex"}
      rowSpacing={5}
      columnSpacing={{ xs: 1, sm: 2, md: 5 }}
      columns={{ xs: 8, sm: 12 }}
    >
        <Grid size={12}>
       <MyDescription/>
        </Grid>
        <Grid size={12}>
        
        {showCategory("Education","column", education, 12)}
      </Grid>
      <Grid size={12}>
         {showCategory("Skills", "column", skills,12)}
      </Grid>
      
      <Grid size={12}>{showCategory("Projects","row", projects, 4)}</Grid>
      <Grid size={12}>
        {showCategory("Awards","column", awards, 12)}</Grid>
      <Grid size={12}>{showCategory("Work Experience", "column", workExperience,12)}</Grid>
    </Grid>
  );
}

function MyDescription() {
    return ( <Typography variant="h5" gutterBottom>
    Hardworking and passionate job seeker with strong analytical skills eager to secure
Software Engineer Intenship position. Interested in using financial engineering and
machine learning to help teams achieve company goals. 
</Typography>);
}

function showCategory(category: string, dir:string, x: resumeItem[],  sz:number) {
    const d: "row" | "column" = dir === "row" ? "row" : "column";

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {category}
      </Typography>

     
      <Grid container spacing={3}>
        {x.map((item) => (
            <Grid size={sz}>
          <InfoCard key={item.title} {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

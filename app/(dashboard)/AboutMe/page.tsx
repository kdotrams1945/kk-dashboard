import { Box, Stack, Typography, Grid, Icon, Paper } from "@mui/material";
import InfoCard, { resumeItem, workExperience, education,projects, awards,skills, Infoormation } from "./InfoCard";
import { Work } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import { SvgIconComponent } from "@mui/icons-material";
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
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
        
        {showCategory2("Education","column", education, 12, SchoolIcon,1)}
      </Grid>
      <Grid size={12}>
         {showCategory2("Skills", "column", skills,12,HomeRepairServiceOutlinedIcon,0)}
      </Grid>
      
      <Grid size={12}>{showCategory("Projects","row", projects, 4, WidgetsOutlinedIcon,1)}</Grid>
      <Grid size={12}>
        {showCategory("Awards","row", awards, 4, MilitaryTechOutlinedIcon,1)}</Grid>
      <Grid size={12}>{showCategory2("Work Experience", "column", workExperience,12, WorkOutlineOutlinedIcon,0)}</Grid>
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

function showCategory(category: string, dir:string, x: resumeItem[],  sz:number, 
  Icon:SvgIconComponent, spacing:number ) {
   // const d: "row" | "column" = dir === "row" ? "row" : "column";

  return (
    <Paper variant="outlined" sx={{p:3}} >
        <Stack direction={"row"} spacing={5} alignItems="center">
        <Icon sx={{color:"Purple", fontSize:40, border:'aqua'}} />
      <Typography variant="h5">
        {category}  
      </Typography>

         
          </Stack>
      <Grid container spacing={spacing} alignItems="stretch">
        {x.map((item) => (
            <Grid size={sz}>
          <InfoCard key={item.title} item={item} elevation={spacing} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

function showCategory2(category: string, dir:string, x: resumeItem[],  sz:number, 
  Icon:SvgIconComponent, spacing:number ) {
  

  return (
    <Paper variant="outlined" sx={{p:3}} >
        <Stack direction={"row"} spacing={5} alignItems="center">
        <Icon sx={{color:"Purple", fontSize:40, border:'aqua'}} />
      <Typography variant="h5">
        {category}  
      </Typography>
     
          </Stack>
          <div>
        &nbsp;
      </div>
         
      <Grid container spacing={spacing} alignItems="stretch">
        {x.map((item) => (
            <Grid size={sz}>
          <Infoormation key={item.title} item={item} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}


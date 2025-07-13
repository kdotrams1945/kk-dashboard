import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import { SvgIconComponent } from "@mui/icons-material";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import LightbulbCircleOutlinedIcon from "@mui/icons-material/LightbulbCircleOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Grid, Stack, Typography } from "@mui/material";
import {
  awards,
  education,
  projects,
  skillIcons,
  workExperience,
} from "./AboutMeData";
import { DocItemOnCard, DocItemPlain, DocumentItem } from "./DocItem";
export default function HomePage() {
  return (
    <Grid
      container
      display={"flex"}
      rowSpacing={5}
      columnSpacing={{ xs: 1, sm: 2, md: 5 }}
      columns={{ xs: 4, sm: 8, md:12 }}
    >
      <Grid size={12}>
        <MyDescription />
      </Grid>
      <Grid size={12}>
        {showCategoryOnSingleCard(
          "Education",
          "column",
          education,
          12,
          SchoolIcon,
          1
        )}
      </Grid>
      <Grid size={12}>
        {showSkills()}
      </Grid>

      <Grid size={12}>
        {showCategory(
          "Projects",
          "row",
          projects,
          6,
          LightbulbCircleOutlinedIcon,
          1
        )}
      </Grid>
      <Grid size={12}>
        {showCategory("Awards", "row", awards, 4, MilitaryTechOutlinedIcon, 1)}
      </Grid>
      <Grid size={12}>
        {showCategoryOnSingleCard(
          "Work Experience",
          "column",
          workExperience,
          12,
          WorkOutlineOutlinedIcon,
          0
        )}
      </Grid>
    </Grid>
  );
}

function MyDescription() {
  return (
    <Typography variant="h5" gutterBottom>
      Analytical third year computer-science student with an interest for turning complex 
      financial ideas into clean, scalable code. 
      Built end-to-end loan-amortization and Black-Scholes options-pricing apps 
      with Java/Spring Boot, React, MaterialUI, and MongoDB. Eager to bring the same blend of 
      financial insight and programming rigor to a Software Engineer Internship—and 
      ship features that move the most relevant metrics.
    </Typography>
  );
}

function showCategory(
  category: string,
  _dir: string,
  x: DocumentItem[],
  sz: number,
  Icon: SvgIconComponent,
  spacing: number
) {
 
  return (
    <RaisedBorderCard variant="outlined">
      <Stack direction={"row"} spacing={2} alignItems="center">
        <Icon
          sx={{
            color: "purple", // icon fill / font colour
            fontSize: 40, // icon size
          }}
        />
        <Typography variant="h5">{category}</Typography>
      </Stack>
      <div>&nbsp;</div>
      <Grid container spacing={spacing} columns={{ xs: 4, sm: 12 }} alignItems="stretch">
        {x.map((item, i) => (
          <Grid size={sz} key={i}>
            <DocItemOnCard key={i} item={item} elevation={spacing} />
          </Grid>
        ))}
      </Grid>
    </RaisedBorderCard>
  );
}

function showSkills() {
  return (
    <RaisedBorderCard variant="outlined" sx={{ p: 4 }}>
      <Stack direction={"row"} spacing={2} alignItems="center">
        <HomeRepairServiceOutlinedIcon
          sx={{ color: "Purple", fontSize: 40, border: "aqua" }}
        />
        <Typography variant="h5">Skills</Typography>
      </Stack>
      <div>&nbsp;</div>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md:12 }} alignItems="stretch">
        {skillIcons.map(({ Icon, name, color },_i) => (
          <Grid size={2}>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            key={_i}
          >
            <Icon fontSize={60} color={color} />
            {name}
          </Stack>
          </Grid>
        ))}
      </Grid>
    </RaisedBorderCard>
  );
}
function showCategoryOnSingleCard(
  category: string,
  _dir: string,
  itmes: DocumentItem[],
  sz: number,
  Icon: SvgIconComponent,
  spacing: number
) {
  return (
    <RaisedBorderCard>
      <Stack direction={"row"} spacing={2} alignItems="center">
        <Icon sx={{ color: "Purple", fontSize: 40, border: "aqua" }} />
        <Typography variant="h5">{category}</Typography>
      </Stack>
      <div>&nbsp;</div>

      <Grid container spacing={spacing} alignItems="stretch">
        {itmes.map((item, i) => (
          <Grid size={sz} key={i}>
            <DocItemPlain key={i} item={item} />
          </Grid>
        ))}
      </Grid>
    </RaisedBorderCard>
  );
}

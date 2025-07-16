import { Grid } from "@mui/material";
import { MyAwards } from "./MyAwards";
import { MyEducation } from "./MyEducation";
import { MyProjects } from "./MyProjects";
import { MySkillSet } from "./MySkillSet";
import { MyStatement } from "./MyStatement";
import { MyWorkExperience } from "./MyWorkExperience";
import { MyHobbies } from "./MyHobbies";

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
        <MyStatement />
      </Grid>
      <Grid size={12}>
        <MyEducation />
      </Grid>
      <Grid size={12}>
        <MySkillSet/>
      </Grid>
      <Grid size={12}>
       <MyProjects/>
      </Grid>
      <Grid size={12}>
        <MyAwards/>
      </Grid>
      <Grid size={12}>
        <MyWorkExperience/>
      </Grid>
      <Grid size={12}>
        <MyHobbies/>
      </Grid>
    </Grid>
  );
}



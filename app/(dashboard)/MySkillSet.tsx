import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import { Grid, Stack, Typography } from "@mui/material";
import { skillIcons } from "./AboutMeData";

export function MySkillSet() {
  return (
    <RaisedBorderCard variant="outlined" sx={{ p: 4 }}>
      <Stack direction={"row"} spacing={2} alignItems="center">
        <HomeRepairServiceOutlinedIcon
          sx={{ color: "Purple", fontSize: 40, border: "aqua" }} />
        <Typography variant="h5">Skills</Typography>
      </Stack>
      <div>&nbsp;</div>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
        {skillIcons.map(({ Icon, name, color }, i) => (
          <Grid size={2}>
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              key={i}
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

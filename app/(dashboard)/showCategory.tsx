import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import { SvgIconComponent } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { DocItemOnCard, DocumentItem } from "./DocItem";


export function showCategory(
  category: string,
  _dir: string,
  x: DocumentItem[],
  sz: number,
  Icon: SvgIconComponent,
  spacing: number
) {

  return (
    <RaisedBorderCard variant="outlined">
      <Stack direction={"row"} spacing={1} alignItems="center">
        <Icon sx={{ color: "Purple", fontSize: "40", border: "aqua" }} />
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

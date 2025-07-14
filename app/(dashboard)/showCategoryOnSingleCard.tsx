import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import { SvgIconComponent } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { DocItemPlain, DocumentItem } from "./DocItem";


export function showCategoryOnSingleCard(
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

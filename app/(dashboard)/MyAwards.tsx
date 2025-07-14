import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import { awards } from "./AboutMeData";
import { showCategory } from "./showCategory";

export function MyAwards() {
  return showCategory("Awards", "row", awards, 4, MilitaryTechOutlinedIcon, 1);
}

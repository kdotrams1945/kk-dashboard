import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { workExperience } from "./AboutMeData";
import { showCategoryOnSingleCard } from "./showCategoryOnSingleCard";

export function MyWorkExperience() {
  return showCategoryOnSingleCard(
    "Work Experience",
    "column",
    workExperience,
    12,
    WorkOutlineOutlinedIcon,
    0
  );
}

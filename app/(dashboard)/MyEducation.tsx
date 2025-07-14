import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import { education } from "./AboutMeData";
import { showCategoryOnSingleCard } from "./showCategoryOnSingleCard";

export function MyEducation() {
  return showCategoryOnSingleCard(
    "Education",
    "column",
    education,
    12,
    SchoolIcon,
    1
  );
}

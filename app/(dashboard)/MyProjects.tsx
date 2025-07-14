import LightbulbCircleOutlinedIcon from "@mui/icons-material/LightbulbCircleOutlined";
import { projects } from "./AboutMeData";
import { showCategory } from "./showCategory";

export function MyProjects() {
  return showCategory(
    "Projects",
    "row",
    projects,
    6,
    LightbulbCircleOutlinedIcon,
    1
  );
}


import { hobbies } from "./AboutMeData";
import { showCategoryOnSingleCard } from "./showCategoryOnSingleCard";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export function MyHobbies() {
  return showCategoryOnSingleCard(
    "Hobbies",
    "column",
    hobbies,
    12,
    FitnessCenterIcon,
    0
  );
}

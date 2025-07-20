
import { hobbies } from "./AboutMeData";
import { showCategoryOnSingleCard } from "./showCategoryOnSingleCard";
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
export function MyHobbies() {
  return showCategoryOnSingleCard(
    "Hobbies",
    "column",
    hobbies,
    12,
    SportsBasketballOutlinedIcon,
    0
  );
}

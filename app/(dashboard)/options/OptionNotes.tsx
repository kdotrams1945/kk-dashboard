"use client";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export function OptionNotes() {
  return (
    <Typography variant="caption">
      
      <br/>
      Notes:<ul>
        <li> Option payouts are independent of stock symbol.</li>
        <li> - (negative) Quantity value means shorting the stock. + (positive) Quantity value means buying the stock. 0 means no action.</li>
        <li> - (negative) Contracts value means shorting the option. + (positive) Contract value means buying the option. 0 means no action.</li>
        <li> Reference: <Link href="https://www.investopedia.com/trading/options-risk-graphs/" > Investopedia article </Link> </li>
      </ul>
    </Typography>
  );
}

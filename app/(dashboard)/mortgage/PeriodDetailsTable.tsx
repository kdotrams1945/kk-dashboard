"use client";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AmortizationPeriodDetail, AmortizationSchedule } from "./DataModel";
import { GetYearlyResults } from "./Utilities";

export default function PeriodDetailsTable({ s }: { s: AmortizationSchedule|null }) {
   const rows:AmortizationPeriodDetail[] = GetYearlyResults(s,2);
   console.log(rows.length);
   console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,minHeight:200 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Period (mo)</TableCell>
            <TableCell align="right">Principal Payment</TableCell>
            <TableCell align="right">Interest Payment</TableCell>
            <TableCell align="right">Balance</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.period}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='right'>
                {row.period}
              </TableCell>
              <TableCell align="right">{'$ '+row.principalPayment.toFixed(2)}</TableCell>
              <TableCell align="right">{'$ '+row.interestPayment.toFixed(2)}</TableCell>
              <TableCell align="right">{'$ '+row.loanBalance.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

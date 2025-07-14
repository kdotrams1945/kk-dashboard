// "use client";
// import React from "react";
// import Box from "@mui/material/Box";
// import { AmortizationPeriodDetail, AmortizationSchedule } from "./DataModel";

// import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
// import { alpha, styled } from "@mui/material/styles";
// const ODD_OPACITY = 0.2;

// export const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
//   [`& .${gridClasses.row}.even`]: {
//     backgroundColor: theme.palette.grey[200],
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
//       "@media (hover: none)": {
//         backgroundColor: "transparent",
//       },
//     },
//     "&.Mui-selected": {
//       backgroundColor: alpha(
//         theme.palette.primary.main,
//         ODD_OPACITY + theme.palette.action.selectedOpacity
//       ),
//       "&:hover": {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           ODD_OPACITY +
//             theme.palette.action.selectedOpacity +
//             theme.palette.action.hoverOpacity
//         ),
//         // Reset on touch devices, it doesn't add specificity
//         "@media (hover: none)": {
//           backgroundColor: alpha(
//             theme.palette.primary.main,
//             ODD_OPACITY + theme.palette.action.selectedOpacity
//           ),
//         },
//       },
//     },
//     ...theme.applyStyles("dark", {
//       backgroundColor: theme.palette.grey[800],
//     }),
//   },
// }));
// export const columns: GridColDef<(typeof rows)[number]>[] = [
//   { field: "period", headerName: "Period", width: 90 },
//   {
//     field: "principalPayment",
//     headerName: "Principal Payment",
//     width: 150,
//     editable: true,
//     valueGetter: (value, row) => `${row.principalPayment.toFixed(2)} `,
//   },
//   {
//     field: "interestPayment",
//     headerName: "Interest Payment",
//     width: 150,
//     editable: true,
//     valueGetter: (value, row) => `${row.interestPayment.toFixed(2)} `,
//   },
//   {
//     field: "loanBalance",
//     headerName: "Loan Balance",
//     type: "number",
//     width: 110,
//     editable: true,
//     valueGetter: (value, row) => `${row.loanBalance.toFixed(2)} `,
//   },
// ];
// export function DataGridDemo({
//   s,}: { s: AmortizationSchedule;}) {
//     const data: AmortizationPeriodDetail[] = React.useMemo<AmortizationPeriodDetail[]>(
//       () => {
//         if (s == null) {
//           return [];
//         }
//         return s.details.filter(
//           (d) => (d.period - 1) % 12 === 0 || d.period === s.details.length
//         );
//       },
//       [s]
//     );


//   return (
//     <Box sx={{ width: "100%" }}>
//       <StripedDataGrid
//         getRowId={(row) => row.period}
//         rows={data}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 20,
//             },
//           },
//         }}
//         rowHeight={35}
//         pageSizeOptions={[10]}
//         disableRowSelectionOnClick
//         getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"} />
//     </Box>
//   );
// }

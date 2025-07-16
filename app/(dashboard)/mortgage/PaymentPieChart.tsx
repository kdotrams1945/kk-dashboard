"use client";
import RaisedBorderCard from "@/app/components/RaisedBorderCard";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import { AmortizationSchedule } from "./DataModel";

export function PaymentPieChart({ schedule }: { schedule: AmortizationSchedule|null }) {
  if (schedule != null) {
    var interestPaymentsTotal: number = 0;
    var principalPayment: number = 0;
    for (let num of schedule.details) {
      interestPaymentsTotal += num.interestPayment;
      principalPayment += num.principalPayment;
    }
    return (
      <RaisedBorderCard padding={2}
        sx={{
          height: "100%",
          display: "grid",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
        }}
      >
         <Typography component="h3" variant="h6" gutterBottom textAlign={"center"}>
          Total Payments :{'$ ' + (interestPaymentsTotal+principalPayment).toFixed(2)}
          </Typography>
       
          <PieChart  
            slotProps={{
              legend: {
                direction: "horizontal",
                position: {
                  vertical: "bottom",
                  horizontal: "center",
                },
                
              },
              tooltip: { hidden: true },
        
            }}
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: interestPaymentsTotal,
                    label: "Interest Payments",
                    
                  },
                  { id: 1, value: principalPayment, label: "Loan Payments", },
                ],
                 innerRadius: 50,
                // outerRadius: 100,
                paddingAngle: 1,
                cornerRadius: 1,
                
                arcLabel: (item) => '$' + `${item.value.toFixed(2)}`,
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 90,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
           
           height={400}
             />
          <Typography align="left" variant="caption" sx={{ mb: 2 }}>
            Monthly Payment: ${schedule.monthlyPayment.toFixed(2)}
          </Typography>

          <Typography align="left" variant="caption" component="h3" sx={{ mb: 2 }}>
            Total interest payments : ${interestPaymentsTotal.toFixed(2)}
          </Typography>
       
      </RaisedBorderCard>
    );
  }
  return null;
}

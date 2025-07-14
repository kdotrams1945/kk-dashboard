export interface FormValues {
    loanAmount: number;
    interestRate: number;
    years:number;
    extraPayment:number;
  }
  
  export interface AmortizationPeriodDetail {
    period: number;
    principalPayment: number;
    interestPayment: number;
    loanBalance: number;
  }
  
  export interface AmortizationSchedule {
    monthlyPayment: number;
    details: AmortizationPeriodDetail[];
  }
  
export interface FormValues {
  stockPrice: number;
  
  yearlyInterestRate: number;
 
  sigma: number;
  //: number;

  item1StrikePrice: number;
  item1DaysUntillExpiry: number;
  item1Contracts: number;
  item1Type:string;
  item2strikePrice: number;
  item2daysUntilExpiry: number;
  item2contracts: number;
  item2Type:string

  quantity:number
}



export interface OptionProfitResult
{
  labels : string[];
  results : ProfitResult[];
}

export interface OptionGreeks
{
  delta: number;
  gamma: number;
  rho: number;
  theta: number;
  vega: number;
}
export interface ProfitResult {
  price: number;
  profit1: number;
  profit2: number;
  profit3: number;
}

export interface OptionAnalysisResult{
  results: OptionProfitResult[];
  greeks : OptionGreeks[];
}

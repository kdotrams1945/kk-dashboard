"use client";
import React from "react";
import { AmortizationPeriodDetail, AmortizationSchedule } from "./DataModel";

export function GetYearlyResults(s: AmortizationSchedule|null, n:number=1): AmortizationPeriodDetail[] {
  const count = n*12;
  return React.useMemo<AmortizationPeriodDetail[]>(() => {
    if (s == null) {
      return [];
    }
    return s.details.filter(
      (d) => (d.period - 1) % count === 0 || d.period === s.details.length
    );
  }, [s]);
}

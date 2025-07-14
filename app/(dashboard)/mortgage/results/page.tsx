import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import RaisedBorderCard from '@/app/components/RaisedBorderCard';
import { DataGridDemo } from '../DataGridDemo';
import type { AmortizationSchedule } from '../DataModel';

// bring in the three wrappers (no SSR for MUI charts):
const MonthlyPie     = dynamic(() => import('../MonthlyPie'),     { ssr: false });
const PaymentCharts  = dynamic(() => import('../PaymentCharts'),  { ssr: false });
const PaymentCharts2 = dynamic(() => import('../PaymentCharts2'), { ssr: false });

async function fetchSchedule(qs: Record<string, string>): Promise<AmortizationSchedule> {
  const res = await fetch(
    `http://localhost:8080/amortizationSchedule?${new URLSearchParams(qs)}`,
    { cache: 'no-cache' },
  );
  if (!res.ok) throw new Error('backend error');
  return res.json();
}

export default async function Results({ searchParams }: { searchParams: Record<string, string> }) {
  if (!searchParams.loan) notFound();

  const schedule = await fetchSchedule(searchParams);

  return (
    <div style={{ padding: 24 }}>
      <MonthlyPie schedule={schedule} />

      <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
        <PaymentCharts  schedule={schedule} />
        <PaymentCharts2 schedule={schedule} />
      </div>

      <RaisedBorderCard sx={{ mt: 4 }}>
        <DataGridDemo s={schedule} />
      </RaisedBorderCard>
    </div>
  );
}
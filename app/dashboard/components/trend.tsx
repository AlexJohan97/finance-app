import BaseTrend from "@/components/trend";
export default async function Trend({ type }: any) {
  const response = await fetch(`http://localhost:3100/trends/${type}`);
  const { amount, prevAmount } = await response.json();
  return <BaseTrend amount={amount} prevAmount={prevAmount} type={type} />;
}

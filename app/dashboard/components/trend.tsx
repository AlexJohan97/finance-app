import BaseTrend from "@/components/trend";
export default async function Trend({ type }: any) {
  const response = await fetch(`${process.env.API_URL}/trends/${type}`);
  const { amount, prevAmount } = await response.json();
  return <BaseTrend amount={amount} prevAmount={prevAmount} type={type} />;
}

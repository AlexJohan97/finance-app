import { useFormatCurrency } from "@/hooks/use-format-currency";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useMemo } from "react";

interface TrendProps {
  type: string;
  amount: number;
  prevAmount: number;
}

export default function Trend({ type, amount, prevAmount }: TrendProps) {
  const calcPercetageChange = (amount: number, prevAmount: number) => {
    if (!prevAmount || !amount) return 0;
    return ((amount - prevAmount) / prevAmount) * 100;
  };

  const colorClasses: { [key: string]: string } = {
    Income: "text-green-700 dark:text-green-300",
    Expense: "text-red-700 dark:text-red-300",
    Investment: "text-indigo-700 dark:text-indigo-300",
    Saving: "text-yellow-700 dark:text-yellow-300",
  };

  const percentageChange = useMemo(
    () => Number(calcPercetageChange(amount, prevAmount).toFixed(0)),
    [amount, prevAmount]
  );

  const formattedAmount = useFormatCurrency(amount);

  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div
        className="text-2xl font-semibold text-black
    dark:text-white mb-2"
      >
        {formattedAmount}
      </div>
      <div className="flex space-x-1 items-center text-sm">
        {percentageChange <= 0 && <ArrowDownLeft className="text-red-700" />}
        {percentageChange > 0 && <ArrowUpRight className="text-green-700" />}
        <div>{percentageChange}% vs last period</div>
      </div>
    </div>
  );
}

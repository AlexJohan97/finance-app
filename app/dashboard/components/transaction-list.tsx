import Separator from "@/components/separator";
import TransactionItem from "@/components/transaction";
import TransactionSummaryItem from "@/components/transaction-summary-item";

const groupAndSumTransactionsByDate = (transactions: any[]) => {
  const grouped: any = {};
  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) {
      grouped[date] = { transactions: [], amount: 0 };
    }
    grouped[date].transactions.push(transaction);
    const currAmount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += currAmount;
  }
  return grouped;
};

export default async function TransactionList() {
  const response = await fetch(`${process.env.API_URL}/transactions`);
  const transactions = await response.json();
  const gorupedTransactions = groupAndSumTransactionsByDate(transactions);
  return (
    <div className="space-y-8">
      {Object.entries(gorupedTransactions).map(([date, value]) => {
        const { transactions, amount } = value as {
          transactions: any[];
          amount: number;
        };
        return (
          <div key={date}>
            <TransactionSummaryItem date={date} amount={amount} />
            <Separator />
            <section className="space-y-4">
              {transactions.map((transaction: any) => (
                <div key={transaction.id}>
                  <TransactionItem {...transaction} />
                </div>
              ))}
            </section>
          </div>
        );
      })}
    </div>
  );
}

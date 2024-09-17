import { Suspense } from "react";
import TransactionList from "./components/transaction-list";

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TransactionList />
      </Suspense>
    </>
  );
}

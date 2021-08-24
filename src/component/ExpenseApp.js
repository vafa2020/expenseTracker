import { useState } from "react";
import TransactionList from "./TransactionList";
import View from "./View";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactionList, setTransactionList] = useState([]);
  return (
    <div className="ExpenseApp">
      <View income={income} expense={expense} />
      <TransactionList transactionList={transactionList} />
    </div>
  );
};

export default ExpenseApp;

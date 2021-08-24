import { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import View from "./View";

const ExpenseApp = () => {
  const [expense, setExpense] = useState();
  const [income, setIncome] = useState(0);
  const [transactionList, setTransactionList] = useState([]);
  const transactionHandler = (formField) => {
    //روش اول
    const data = {
      ...formField,
      id: Date.now(),
    };
    setTransactionList([...transactionList, data]);
    //روش دوم
    //   setTransactionList([...transactionList,{ ...formField, id: Date.now() }]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactionList.forEach((item) => {
      item.type === "expense"
        ? (exp = exp + parseInt(item.amount))
        : (inc = inc + parseInt(item.amount));
    });
    setExpense(exp);
    setIncome(inc)
  }, [transactionList]);
  return (
    <div className="ExpenseApp">
      <View
        income={income}
        expense={expense}
        onTransaction={transactionHandler}
      />
      <TransactionList transactionList={transactionList} />
    </div>
  );
};

export default ExpenseApp;

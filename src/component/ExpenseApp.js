import { useState } from "react";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  return (
    <div className="ExpenseApp">
      <div className="sectionTop">
        <p className="balance">Balance: {income - expense} $</p>
        <buttton className="btn">Add</buttton>
      </div>
      <div className="sectionBottom">
        <div className="expense">
          <span className="label"> Expense: </span>
          <span className="amountExp"> {expense} $</span>
        </div>
        <div className="income">
          <span className="label"> Income: </span>
          <span className="amountInc"> {income} $</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseApp;

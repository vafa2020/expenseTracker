import { useState } from "react";
import TransactionForm from "./TransactionForm";

const View = ({ income, expense ,onTransaction}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="sectionTop">
        <p className="balance">Balance: {income - expense} $</p>
        <button className={`${"btn"} ${isShow?"cancel":""}`} onClick={() => setIsShow(!isShow)}>
          {isShow? "Cancel":"Add"}
        </button>
      </div>
      {isShow && <TransactionForm onTransaction={onTransaction} setIsShow={setIsShow}/>}
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
    </>
  );
};

export default View;

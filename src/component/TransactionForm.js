import { useState } from "react";

const TransactionForm = ({ onTransaction }) => {
  const [formField, setFormField] = useState({
    desc: "",
    amount: 0,
    type: "expense",
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    onTransaction(formField);
    setFormField({
      desc: "",
      amount: 0,
      type: "",
    });
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <input
        className="desc"
        type="text"
        name="desc"
        value={formField.desc}
        onChange={changeHandler}
        className="input"
        placeholder="desc.."
      />
      <input
        className="amount"
        type="number"
        name="amount"
        value={formField.amount}
        onChange={changeHandler}
        className="input"
      />
      <div className="radioBox">
        <input
          id="expense"
          type="radio"
          name="type"
          value="expense"
          checked={formField.type === "expense"}
          onChange={changeHandler}
          className="radio"
        />
        <label className="labelRadio" htmlFor="expense">Expense</label>
        <input
          id="income"
          type="radio"
          name="type"
          value="income"
          checked={formField.type === "income"}
          onChange={changeHandler}
          className="radio"
        />
        <label className="labelRadio" htmlFor="income">Income</label>
      </div>
      <button className="btn" type="submit">
        AddTransaction
      </button>
    </form>
  );
};

export default TransactionForm;

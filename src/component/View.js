const View = () => {
  return (
    <>
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
    </>
  );
};

export default View;

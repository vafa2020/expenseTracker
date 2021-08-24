const TransactionList = ({ transactionList }) => {
  return (
    <div className="list">
      {transactionList.map((item) => {
        return <div className={`${"item"} ${item.type==="expense" ? "itemEX":"itemIco"}`} key={item.id}>{item.desc}</div>;
      })}
    </div>
  );
};

export default TransactionList;

import { useEffect, useState } from "react";

const TransactionList = ({ transactionList }) => {
  const [search, setSearch] = useState("");
  const [filterTransactionList, setFilterTransactionList] =
    useState(transactionList);
  useEffect(() => {
    filter(search);
  }, [transactionList]);
  const searchHandler = (event) => {
    setSearch(event.target.value);
    filter(event.target.value);
  };
  const filter = (search) => {
    if (!search || search === "") {
      setFilterTransactionList(transactionList);
      return;
    }
    const filterd = transactionList.filter((item) =>
      item.desc.toLowerCase().includes(search)
    );
    setFilterTransactionList(filterd);
  };
  if (transactionList.length === 0) {
    return <h2>insert some transaction</h2>;
  }
  return (
    <div className="list">
      <input
        type="text"
        value={search}
        onChange={searchHandler}
        className="search"
        placeholder="search of transActions"
      />
      {filterTransactionList.length
        ? filterTransactionList.map((item) => {
            return (
              <div
                className={`${"item"} ${
                  item.type === "expense" ? "itemEX" : "itemIco"
                }`}
                key={item.id}
              >
                <span> {item.desc}</span>
                <span> {item.amount}</span>
              </div>
            );
          })
        : "not match!!!"}
    </div>
  );
};

export default TransactionList;

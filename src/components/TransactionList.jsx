const TransactionList = ({ transactions }) => {
  return (
    <div className="transactions">
      <h3>Transaction History</h3>

      {transactions.length === 0 && <p>No transactions yet</p>}

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.type}>
            <span>
              {transaction.type === "credit" ? "+" : "-"} ₦{transaction.amount}
            </span>
            <small>{transaction.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
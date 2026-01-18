import { useEffect, useState } from "react";
import Balance from "./Balance";
import TransactionList from "./TransactionList";
import QuickActions from "./QuickAction";

const Wallet = () => {
  const [balance, setBalance] = useState(() => {
    return Number(localStorage.getItem("balance")) || 0;
  });

  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  const [amount, setAmount] = useState("");

  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  const addTransaction = (amt, type) => {
    const newTransaction = {
      id: Date.now(),
      amount: amt,
      type,
      time: new Date().toLocaleString(),
    };

    setTransactions([newTransaction, ...transactions]);
  };

  const handleAddFunds = (e) => {
    e.preventDefault();
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Enter a valid amount");
      return;
    }

    setBalance(balance + value);
    addTransaction(value, "credit");
    setAmount("");
  };

  const handleWithdraw = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Enter a valid amount");
      return;
    }

    if (value > balance) {
      alert("Insufficient balance");
      return;
    }

    setBalance(balance - value);
    addTransaction(value, "debit");
    setAmount("");
  };

  const handleQuickAdd = (value) => {
    setBalance(balance + value);
    addTransaction(value, "credit");
  };

  const resetWallet = () => {
    setBalance(0);
    setTransactions([]);
    localStorage.clear();
  };

  return (
    <div className="wallet">
      <Balance balance={balance} />

      <form onSubmit={handleAddFunds} className="wallet-form">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Funds</button>
        <button type="button" onClick={handleWithdraw}>
          Withdraw
        </button>
      </form>

      <QuickActions onQuickAdd={handleQuickAdd} />

      <button className="reset-btn" onClick={resetWallet}>
        Reset Wallet
      </button>

      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Wallet;
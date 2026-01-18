const Balance = ({ balance }) => {
  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <p>₦{balance.toLocaleString()}</p>
    </div>
  );
};

export default Balance;
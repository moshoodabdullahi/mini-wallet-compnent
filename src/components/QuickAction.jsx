const QuickActions = ({ onQuickAdd }) => {
  return (
    <div className="quick-actions">
      <button onClick={() => onQuickAdd(50)}>+ ₦50</button>
      <button onClick={() => onQuickAdd(100)}>+ ₦100</button>
      <button onClick={() => onQuickAdd(200)}>+ ₦200</button>
      <button onClick={() => onQuickAdd(300)}>+ ₦300</button>
      <button onClick={() => onQuickAdd(500)}>+ ₦500</button>
      <button onClick={() => onQuickAdd(1000)}>+ ₦1000</button>
      <button onClick={() => onQuickAdd(5000)}>+ ₦5000</button>
      <button onClick={() => onQuickAdd(10000)}>+ ₦10000</button>

    </div>
  );
};

export default QuickActions;
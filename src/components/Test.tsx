import React from "react";

// (No import of BigNumber or Decimal)

const Test: React.FC = () => {
  // let x = Decimal(1); // Causes typecheck error
  let y = BigNumber(1); // Does not cause typecheck error

  return (
    <div className="p-4 bg-gray-100 rounded shadow text-black">
      <h2 className="text-lg font-bold mb-2">Test Component</h2>
      <p>This is a test component.</p>
    </div>
  );
};

export default Test;

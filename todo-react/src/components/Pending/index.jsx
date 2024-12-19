import React from "react";

const Pending = ({ setShowPending }) => {
  const handlePendingClick = () => {
    setShowPending(true); 
  };

  return (
    <button onClick={handlePendingClick}>Pending Todos</button>
  );
};

export default Pending;

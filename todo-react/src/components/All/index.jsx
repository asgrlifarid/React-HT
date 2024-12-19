import React from "react";

const All = ({ setShowCompleted, setShowPending }) => {
  const handleAllClick = () => {
    setShowCompleted(false); 
    setShowPending(false);    
  };

  return (
    <button onClick={handleAllClick}>All</button>
  );
};

export default All;

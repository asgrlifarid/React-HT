const Completed = ({ setShowCompleted }) => {
    return (
      <button onClick={() => setShowCompleted((prev) => !prev)}>
        Yalnız Tamamlanmış Tələbələri Göstər
      </button>
    );
  };
  
  export default Completed;
  
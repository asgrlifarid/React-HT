import React from 'react'

const Button = ({ students, setStudents }) => {
    const handleClearAll = () => {
        setStudents([]); 
      };

  return (
    <button variant="destructive"
    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleClearAll}>Clear All</button>
  )
}

export default Button
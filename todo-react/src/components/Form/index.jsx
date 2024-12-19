import { useState } from "react";
import './index.css'
import { nanoid } from "nanoid";
import Button from "../Button";


const Form = ({ students, setStudents }) => {
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");

  

  const handleAddStudent = (e) => {
    e.preventDefault();

    if (studentName) {
      const student = {
        id: nanoid(),
        studentName,
        isCompleted : false,
      };

      setStudents([...students, student]);

      setStudentName("");

      // setAge("");
    } else {
      window.alert("fields can not be empty!!");
    }
  };

  return (
   
      <form onSubmit={handleAddStudent}>
        <fieldset>
          <legend>Todo List</legend>
          <div className="inputs">
            <input
              type="text"
              id="name"
              placeholder="todo name"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value.trim());
              }}
            />
            {/* <input
              type="number"
              id="count"
              placeholder="count"
              value={age}
              onChange={(e) => {
                setAge(+e.target.value);
              }}
            /> */}
        
          </div>
          
        </fieldset>
        <button>ADD</button>
        
        
      </form>

  );

};

export default Form;

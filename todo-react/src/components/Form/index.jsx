import { useState } from "react";
import './index.css'
import { nanoid } from "nanoid";


const Form = ({ students, setStudents }) => {
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState(0);

  const handleAddStudent = (e) => {
    e.preventDefault();

    if (studentName && age) {
      const student = {
        id: nanoid(),
        studentName,
        age,
      };

      setStudents([...students, student]);

      setStudentName("");

      setAge(0);
    } else {
      window.alert("fields can not be empty!!");
    }
  };

  return (
   
      <form onSubmit={handleAddStudent}>
        <fieldset>
          <legend>Student Form</legend>
          <div className="inputs">
            <input
              type="text"
              id="name"
              placeholder="student name"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value.trim());
              }}
            />
            <input
              type="number"
              id="age"
              placeholder="age"
              value={age}
              onChange={(e) => {
                setAge(+e.target.value);
              }}
            />
        
          </div>
        </fieldset>
        <button>ADD</button>
        
      </form>

  );
};

export default Form;

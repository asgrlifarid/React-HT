import TableRow from "../TableRow";
import { FaTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";
import "./index.css";
import { MdOutlineEditNote } from "react-icons/md";
import { useState } from "react";

const Table = ({ students, setStudents }) => {
  const [editingStudent, setEditingStudent] = useState(null); 
  const [newName, setNewName] = useState(""); 

  const handleCheckboxChange = (studentId) => {
    setStudents(
      students.map((s) =>
        s.id === studentId
          ? { ...s, checked: !s.checked, isCompleted: !s.isCompleted }
          : s
         
      )
   
    );
    console.log(isCompleted)
  };
 

  const handleDelete = (studentId) => {
    setStudents(students.filter((q) => q.id !== studentId));
  };

  const handleEdit = (student) => {
    setEditingStudent(student); 
    setNewName(student.studentName); 
  };

  const handleSaveEdit = () => {
    setStudents(
      students.map((s) =>
        s.id === editingStudent.id ? { ...s, studentName: newName } : s
      )
    );
    setEditingStudent(null);
    setNewName(""); 
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <TableRow key={s.id}>
              <td
                style={{
                  textDecoration: s.isCompleted ? "line-through" : "none",
                }}
              >
                {s.studentName}
              </td>
              <td style={{ color: "red", cursor: "pointer" }}>
                <FaTrashCan onClick={() => handleDelete(s.id)} />
                <MdOutlineEditNote onClick={() => handleEdit(s)} />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={s.isCompleted}
                  onChange={() => handleCheckboxChange(s.id)}
                />
              </td>
            </TableRow>
          ))}
        </tbody>
      </table>

      {editingStudent && (
        <div className="edit-form">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setEditingStudent(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
};

export default Table;

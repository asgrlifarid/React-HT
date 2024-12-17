import TableRow from "../TableRow";
import { FaTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";
import "./index.css";

const Table = ({ students, setStudents }) => {
  const handleDelete = (studentId) => {
    setStudents(students.filter((q) => q.id !== studentId));
  };

  
  const handleClearAll = () => {
    setStudents([]); 
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>ACTIONS</th>
          <th>
            <button onClick={handleClearAll}>Clear All</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {students &&
          students.map((s) => {
            return (
              <TableRow key={s.id}>
                <td>{s.id}</td>
                <td>{s.studentName}</td>
                <td>{s.age}</td>
                <td style={{ color: "red", cursor: "pointer" }}>
                  <FaTrashCan onClick={() => handleDelete(s.id)} />
                </td>
              </TableRow>
            );
          })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  students: PropTypes.array,
  setStudents: PropTypes.func,
};

export default Table;

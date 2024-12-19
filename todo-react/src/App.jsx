import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Button from "./components/Button";
import All from "./components/All";
import Completed from "./components/Completed";
import Pending from "./components/Pending";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showPending, setShowPending] = useState(false); 

 
  const filteredStudents = 
    showCompleted ? students.filter((s) => s.isCompleted) : 
    showPending ? students.filter((s) => !s.isCompleted) : 
    students; 

  return (
    <div>
      <Form students={students} setStudents={setStudents} />
      <Table students={filteredStudents} setStudents={setStudents} />
      <Button students={students} setStudents={setStudents} />
      <All setShowCompleted={setShowCompleted} setShowPending={setShowPending} />
      <Completed
        students={students}
        setStudents={setStudents}
        setShowCompleted={setShowCompleted}
      />
      <Pending setShowPending={setShowPending} />
    </div>
  );
};

export default Students;

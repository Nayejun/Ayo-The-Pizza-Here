import React from "react";

function Student({ student }: { student: any }) {
  return (
    <div>
      <h4>name : {student.name}</h4>
    </div>
  );
}

export default Student;

import React, { useState, useRef } from "react";
import Student from "./MenuList";
import CreateStudent from "./CreateMenu";

function CustomMenu() {
  const [students, setStudents] = useState<any>([
    {
      id: 1,
      name: "피자",
    },
    {
      id: 2,
      name: "치킨",
    },
    {
      id: 3,
      name: "떡볶이",
    },
    {
      id: 4,
      name: "라면",
    },
    {
      id: 5,
      name: "햄버거",
    },
    {
      id: 6,
      name: "족발",
    },
    {
      id: 7,
      name: "굶기",
    },
  ]);

  const nextId = useRef(8);

  const [inputs, setInputs] = useState({
    name: "",
  });

  const { name } = inputs;

  const onDataChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const student = {
      id: "st00" + nextId.current,
      name,
    };
    setStudents([...students, student]);

    setInputs({
      name: "",
    });
    nextId.current += 1;
  };

  return (
    <div>
      <CreateStudent
        name={name}
        onDataChange={onDataChange}
        onCreate={onCreate}
      />
      {students.map((student: { id: React.Key | null | undefined }) => (
        <Student student={student} key={student.id} />
      ))}
    </div>
  );
}

export default CustomMenu;

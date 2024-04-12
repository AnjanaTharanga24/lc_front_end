import React, { useState } from 'react'

export default function Test() {
    const [students, setStudents] = useState([{ name: '', age: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedStudents = [...students];
    updatedStudents[index] = { ...updatedStudents[index], [name]: value };
    setStudents(updatedStudents);
  };

  const handleAddStudent = () => {
    setStudents([...students, { name: '', age: '' }]);
  };
  return (
    <div>
    <h2>Student Details</h2>
    {students.map((student, index) => (
      <div key={index}>
        <label>Student {index + 1} Name:</label>
        <input
          type="text"
          name={`student_name_${index}`}
          value={student.name}
          onChange={(event) => handleInputChange(index, event)}
        />
        <label>Student {index + 1} Age:</label>
        <input
          type="text"
          name={`student_age_${index}`}
          value={student.age}
          onChange={(event) => handleInputChange(index, event)}
        />
      </div>
    ))}
    <button type="button" onClick={handleAddStudent}>Add Student</button>
  </div>
  )
}

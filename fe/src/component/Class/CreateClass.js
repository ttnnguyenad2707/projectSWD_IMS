import { useState } from "react";
import "../../class.css";
import axios from "axios";
const CreateClass = () => {
  const [classInfo, setClassInfo] = useState({
    className: "",
    code: "",
    subjectId: 0, // Updated to store the subject ID as a number
    teacherId: 0, // Updated to store the teacher ID as a number
    status: "",
    semester: "",
    students: [], // Updated to store selected students as an array of numbers
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClassInfo({ ...classInfo, [name]: value });
  };

  const handleTeacherChange = (e) => {
    const teacherId = parseInt(e.target.value, 10); // Parse the value to an integer
    setClassInfo({ ...classInfo, teacherId });
  };

  const handleStudentChange = (e) => {
    const selectedStudents = Array.from(
      e.target.selectedOptions,
      (option) => parseInt(option.value, 10), // Parse the values to integers
    );
    setClassInfo({ ...classInfo, students: selectedStudents });
  };

  const submitForm = () => {
    // Handle submitting the form data, including subject ID, teacher ID, and student IDs
    console.log(classInfo);

    const apiUrl = "http://localhost:5000/class";

    axios
      .post(apiUrl, classInfo)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        // You can add additional handling after a successful POST request.
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        // Handle errors if the request fails.
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Class Information</h1>
      <form>
        <div>
          <label>Class Name:</label>
          <input
            type='text'
            name='className'
            value={classInfo.className}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Code:</label>
          <input
            type='text'
            name='code'
            value={classInfo.code}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Subject </label>
          <select
            type='number' // Use type="number" for subject ID
            name='subjectId'
            onChange={handleStudentChange}
          >
            <option value={1}>Volvo</option>
            <option value={2}>Saab</option>
            <option value={3}>Mercedes</option>
            <option value={4}>Audi</option>
          </select>
        </div>
        <div>
          <label>Teacher </label>
          <select
            name='teacherId'
            value={classInfo.teacherId}
            onChange={handleTeacherChange}
          >
            <option value={1}>Volvo</option>
            <option value={2}>Saab</option>
            <option value={3}>Mercedes</option>
            <option value={4}>Audi</option>
          </select>
        </div>
        <div>
          <label>Status:</label>
          <input
            type='text'
            name='status'
            value={classInfo.status}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Semester:</label>
          <input
            type='text'
            name='semester'
            value={classInfo.semester}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Students:</label>
          <select name='students' multiple onChange={handleStudentChange}>
            <option value={1}>Volvo</option>
            <option value={2}>Saab</option>
            <option value={3}>Mercedes</option>
            <option value={4}>Audi</option>
          </select>
        </div>
        <button type='button' onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateClass;

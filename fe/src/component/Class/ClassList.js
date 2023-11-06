import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonGroup, Button } from "react-bootstrap";

const ClassList = () => {
  const [classList, setClassList] = useState([]);
  const [teacherNames, setTeacherNames] = useState({});
  const [studentNames, setStudentNames] = useState({}); // Store student names
  const apiUrl = "http://localhost:5000/class/list";
  const accUrl = "http://localhost:5000/account/filter?id=";

  useEffect(() => {
    const fetchClassList = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          const list = response.data.data;
          setClassList(list);
        } else {
          console.error("Failed to fetch data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchClassList();
  }, []);

  const fetchTeacherNames = async (teacher_id) => {
    try {
      const response = await axios.get(accUrl + teacher_id);
      return response.data[0].Fullname;
    } catch (error) {
      console.error("Error fetching teacher name:", error);
    }
  };

  // Function to fetch student names
  const fetchStudentNames = async (studentId) => {
    try {
      const response = await axios.get(accUrl + studentId);
      return response.data[0].Fullname;
    } catch (error) {
      console.error("Error fetching student name:", error);
    }
  };

  useEffect(() => {
    const fetchTeacherData = async () => {
      const names = {};
      for (const classInfo of classList) {
        if (!teacherNames[classInfo.teacher_id]) {
          const teacherName = await fetchTeacherNames(classInfo.teacher_id);
          names[classInfo.teacher_id] = teacherName;
        }
      }
      setTeacherNames(names);
    };

    fetchTeacherData();
  }, [classList]);

  // Fetch and store student names
  useEffect(() => {
    const fetchStudentData = async () => {
      const names = {};
      for (const classInfo of classList) {
        for (const studentId of classInfo.student_ids) {
          if (!studentNames[studentId]) {
            const studentName = await fetchStudentNames(studentId);
            names[studentId] = studentName;
          }
        }
      }
      setStudentNames(names);
    };

    fetchStudentData();
  }, [classList]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>Class List</h1>

      <ButtonGroup aria-label='Basic example'>
        <Button variant='secondary'>Left</Button>
        <Button variant='secondary'>Middle</Button>
        <Button variant='secondary'>Right</Button>
      </ButtonGroup>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                textAlign: "left",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              Class Name
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                textAlign: "left",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              Code
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                textAlign: "left",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              Subject
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                textAlign: "left",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              Teacher
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                textAlign: "left",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              Status
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                textAlign: "left",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              Semester
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                textAlign: "left",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            >
              List Students
            </th>
          </tr>
        </thead>
        <tbody>
          {classList.map((classInfo, index) => (
            <tr key={classInfo.id}>
              <td
                style={{
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {classInfo.class_name}
              </td>
              <td
                style={{
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {" "}
                {classInfo.code}
              </td>
              <td
                style={{
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {classInfo.subject_id}
              </td>
              <td
                style={{
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {teacherNames[classInfo.teacher_id]}
              </td>
              <td
                style={{
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {classInfo.status_class}
              </td>
              <td
                style={{
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {classInfo.semester}
              </td>
              <td
                style={{
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <ul>
                  {classInfo.student_ids.map((studentId) => (
                    <li key={studentId}>
                      {studentNames[studentId] || "Loading..."}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassList;

import { useEffect, useState } from "react";
import axios from "axios";
import { ButtonGroup, Button } from "react-bootstrap";
//import Header from "../Header";
const ClassList = () => {
  const [classList, setClassList] = useState([]);
  const apiUrl = "http://localhost:5000/class/list";

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

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
      }}
    >
      {/* <Header /> */}
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
          </tr>
        </thead>
        <tbody>
          {classList.map((classInfo, index) => (
            <tr key={classInfo.id}>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <p type='text' name='className'>
                  {classInfo.class_name}
                </p>
              </td>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <p type='text' name='code'>
                  {classInfo.code}
                </p>
              </td>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <p type='text' name='subject'>
                  {classInfo.subject_id}
                </p>
              </td>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <p type='text' name='teacher'>
                  {classInfo.teacher_id}
                </p>
              </td>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <p type='text' name='status'>
                  {classInfo.status_class}
                </p>
              </td>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <p type='text' name='semester'>
                  {classInfo.semester}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassList;

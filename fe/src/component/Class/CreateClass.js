import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../class.css";

const CreateClass = () => {
  const studentsUrl = "http://localhost:5000/account/filter?roleId=1";
  const teacherUrl = "http://localhost:5000/account/filter?roleId=3";
  const subjectUrl = "http://localhost:5000/subject";

  const [classInfo, setClassInfo] = useState({
    class_name: "",
    code: "",
    subject_id: 1,
    teacher_id: 0,
    status: 0,
    semester: "",
    students: [],
  });

  const [students, setStudents] = useState([]); // State to store the list of students
  const [teachers, setTeachers] = useState([]); // State to store the list of teachers
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Fetch the list of students
    axios
      .get(studentsUrl)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });

    // Fetch the list of subjects
    axios
      .get(subjectUrl)
      .then((response) => {
        //   setSubjects(response.data);
        setSubjects([]);
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });

    // Fetch the list of teachers
    axios
      .get(teacherUrl)
      .then((response) => {
        setTeachers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teachers:", error);
      });
  }, [studentsUrl, teacherUrl, subjectUrl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClassInfo({ ...classInfo, [name]: value });
  };

  const handleTeacherChange = (e) => {
    const teacher_id = parseInt(e.target.value, 10);
    setClassInfo({ ...classInfo, teacher_id });
  };

  const handleStudentChange = (e) => {
    const selectedStudents = Array.from(e.target.selectedOptions, (option) =>
      parseInt(option.value, 10),
    );
    setClassInfo({ ...classInfo, students: selectedStudents });
  };

  const submitForm = () => {
    console.log(classInfo);

    const apiUrl = "http://localhost:5000/class";

    axios
      .post(apiUrl, classInfo)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
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
            name='class_name'
            value={classInfo.class_name}
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
          <label>Subject:</label>
          <select type='number' name='subjectId' onChange={handleInputChange}>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Teacher:</label>
          <select
            name='teacherId'
            value={classInfo.teacher_id}
            onChange={handleTeacherChange}
          >
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.Fullname}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Status:</label>
          <input
            type='number'
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
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.Fullname}
              </option>
            ))}
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

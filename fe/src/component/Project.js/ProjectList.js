
import React, { useEffect, useState } from 'react';

import { Table } from 'antd';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { getProductByTeacher } from '../../services/product.service';
import Cookies from 'js-cookie';
import { Button } from 'react-bootstrap';



const ProjectList = () => {
  const nav = useNavigate();
  const token = Cookies.get('accessToken');
  const [user] = useOutletContext();
  const [project, setProject] = useState([]);
  const { Column } = Table;

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',

    },
    {
      title: 'ProjectCode',
      dataIndex: 'ProjectCode',
      filters:
        project.map((p) => ({
          text: p?.ProjectCode,
          value: p?.ProjectCode
        }))
      ,
      onFilter: (value, record) => record.ProjectCode.indexOf(value) === 0,
      sorter: (a, b) => a?.ProjectCode.localeCompare(b?.ProjectCode),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'ProjectName',
      dataIndex: 'ProjectName',
      sorter: (a, b) => a?.ProjectName.localeCompare(b?.ProjectName),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Description',
      dataIndex: 'Description',

    },
    {
      title: 'classes',
      dataIndex: 'classes',

    },
    {
      title: 'leader',
      dataIndex: 'leader',

    },
    {
      title: 'teacher',
      dataIndex: 'teacher',

    },
    {
      title: 'Status',
      dataIndex: 'Status',

    },
    {
      title: 'Action',

      dataIndex: 'actions',
      render: (text, record) => (
        <span>
          <Button className="mx-2" onClick={() => handleEdit(record)}>Edit</Button>
        </span>
      )
    },


  ];

  const handleEdit = (record) => {
    // Xử lý hành động Edit với đối tượng dự án record
    console.log('Edit project:', record);
    nav(`/detailProject/${record.id}`)
  };


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  useEffect(() => {
    getListProduct()
  }, [])
  console.log("project", project);
  const getListProduct = async () => {
    const res = await getProductByTeacher(token, user.id)
    console.log("res", res);
    setProject(res.data.data)
  }
  const data =
    project.map((p) => ({

      id: p.id,
      ProjectCode: p.ProjectCode,
      ProjectName: p.ProjectName,
      Description: p.Description,
      classes: p.classes.class_name,
      teacher: p.teacher.Fullname,
      Status: p.Status,
      leader: p.leader?.Fullname,
      Status: p.Status === true ? "active" : "deactive"

    }))
    // {id:2,
    //   Description:"Description"}
    ;
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-6"></div>
        <div className="col-6 text-end">
          <button className="btn btn-success" onClick={() => { nav("/addNewProject") }}> ADD NEW +</button>
        </div>

      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>

  )
}
export default ProjectList;
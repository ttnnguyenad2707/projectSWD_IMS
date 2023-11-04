// import React, { useEffect, useState } from 'react';
// import { Table, Spin } from 'antd';
// import axios from 'axios';
// import { Tag } from 'antd';

// const columns  = [
//   {
//     title: 'ID',
//     dataIndex: 'id',
//     key: 'id',
//   },
//   {
//     title: 'Title',
//     dataIndex: 'title',
//     key: 'title',
//   },
//   {
//     title: 'body',
//     dataIndex: 'body',
//     key: 'body',
//   },
//   {
//     title: 'userId',
//     dataIndex: 'userId',
//     key: 'userId',
//   },

//   {
//     title: 'Tags',
//     dataIndex: 'tags',
//     key: 'tags',

//   },
// ];

// const ProjectList = () => {
//   const [data, setData] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Gọi API để lấy dữ liệu
//     axios.get('https://dummyjson.com/posts')
//       .then(response => {
//         console.log("response", response.data.posts);
//         setData(response.data.posts)
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         setLoading(false);
//       });
//   }, []);


//   return (
//     <div>
//       <div className="container">

//       <Table dataSource={data} columns={columns} />
//       </div>


//     </div>
//   );
// };

// export default ProjectList;
import React from 'react';

import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Column } = Table;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const ProjectList = () => {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-6"></div>
        <div className="col-6 text-end">
          <button className="btn btn-success" onClick={() =>{nav("/addNewProject")}}> ADD NEW +</button>
        </div>

      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>

  )
}
export default ProjectList;

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

const SystemSettingList = () => {
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
export default SystemSettingList;

// import React from 'react';
// import { Table } from 'antd';
// const SystemSettingList = () => {
//     const dataSource = [
//         {
//           key: '1',
//           name: 'John Doe',
//           age: 30,
//           address: '123 ABC Street',
//         },
//         {
//           key: '2',
//           name: 'Jane Smith',
//           age: 25,
//           address: '456 XYZ Street',
//         },
//         // Thêm dữ liệu cho các hàng khác nếu cần thiết
//       ];
      
//       const columns = [
//         {
//           title: 'Name',
//           dataIndex: 'name',
//           key: 'name',
//         },
//         {
//           title: 'Age',
//           dataIndex: 'age',
//           key: 'age',
//         },
//         {
//           title: 'Address',
//           dataIndex: 'address',
//           key: 'address',
//         },
//         // Thêm cột khác nếu cần thiết
//       ];
//     return (
//         <div>
//             sad
//             <Table dataSource={dataSource} columns={columns} />
//         </div>
//     );
// };

// export default SystemSettingList;
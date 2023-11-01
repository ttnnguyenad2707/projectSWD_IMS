import React from 'react';
import { Table } from 'antd';
const SystemSettingList = () => {
    const dataSource = [
        {
          key: '1',
          name: 'John Doe',
          age: 30,
          address: '123 ABC Street',
        },
        {
          key: '2',
          name: 'Jane Smith',
          age: 25,
          address: '456 XYZ Street',
        },
        // Thêm dữ liệu cho các hàng khác nếu cần thiết
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        // Thêm cột khác nếu cần thiết
      ];
    return (
        <div>
            sad
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default SystemSettingList;
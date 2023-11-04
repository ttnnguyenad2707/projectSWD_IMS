import React, { useEffect, useState, } from 'react';
import {useNavigate} from "react-router-dom"
import {  Table } from 'antd';
import { Button, Container } from 'react-bootstrap'
import { getSettingList } from '../../services/setting.service';
import {} from 'react-bootstrap'
const SystemSettingList = () => {
    const [dataSource,setDataSource] = useState();
    useEffect(() => {
      getSettingList().then(data => setDataSource(data.data.data)).catch(error => console.log(error))
    } ,[])
      
      const columns = [
        {
          title: 'Setting Name',
          dataIndex: 'name',
        },
        {
          title: 'Type',
          dataIndex: 'type',
        },
        {
          title: 'Status',
          render: (text, data) => (
            data.status === true ? <span>Active</span> : <span>Deactivate</span>
          )    
        },
        {
          title: "Action",
          render: (text,data) => (
            <Button variant='primary' onClick={() => handeEditSetting(data.id)}>Edit</Button>
          )
        }
        // Thêm cột khác nếu cần thiết
      ];
      const navigate = useNavigate();
      const handeEditSetting = (id) => {
        navigate(`/systemsetting/edit/${id}`)

      }
    return (
        <Container>
            <Table dataSource={dataSource} columns={columns} />
        </Container>
    );
};
export default SystemSettingList


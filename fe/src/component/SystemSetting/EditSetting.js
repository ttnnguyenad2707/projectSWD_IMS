import React, { useEffect, useState, useNavigate } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import { } from 'react-bootstrap'
import { editSetting, getDetailSetting, getTypeSetting } from '../../services/setting.service';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const EditSetting = () => {
  const [typeSetting, setTypeSetting] = useState([]);
  const [detailSetting, setDetailSetting] = useState([])
  const [settingName, setSettingName] = useState()
  const [status, setStatus] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getDetailSetting(id).then(data => {
      setDetailSetting(data.data.data)
      setSettingName(data.data.data.name)
      setStatus(data.data.data.status);
    }).catch(error => console.log(error))
    getTypeSetting().then(data => setTypeSetting(data.data.data)).catch(error => console.log(error))
  }, [])

  const handleEditSetting = async (e) => {
    e.preventDefault(); // Ngăn chặn sự kiện mặc định của form
    console.log("submit");

    // Thực hiện cuộc gọi API để chỉnh sửa setting
    try {
      await editSetting({
        id: id, // Truyền id của setting cần chỉnh sửa
        name: settingName,
        type: e.target.elements.type.value, // Lấy giá trị type từ form
        status: status,
      }).then(data => {
        toast(data.data.message)
      });

      // Sau khi chỉnh sửa thành công, bạn có thể thực hiện điều gì đó, ví dụ: chuyển hướng hoặc hiển thị thông báo thành công
      console.log('Setting updated successfully');
    } catch (error) {
      console.error('Error updating setting:', error);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleEditSetting}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type='text' value={settingName} onChange={(e) => setSettingName(e.target.value)} />

        </Form.Group>
        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Select name='type'>
            {typeSetting.map(type => (
              
              <option value={type.id}>{type.name}</option>

            ))}
          </Form.Select>

        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <div className='d-flex gap-2'>
            <Form.Check
              type="radio"
              label="Active"
              name="status"
              checked={status === true} // Sử dụng giá trị checked từ state
              onChange={() => setStatus(true)} // Xử lý sự kiện khi chọn radio "Active"
            />
            <Form.Check
              type="radio"
              label="Deactivate"
              name="status"
              checked={status === false} // Sử dụng giá trị checked từ state
              onChange={() => setStatus(false)} // Xử lý sự kiện khi chọn radio "Deactivate"
            />

          </div>

        </Form.Group>
        <Button type='submit' variant='primary'>Submit</Button>
      </Form>
    </Container>
  );
};

export default EditSetting;
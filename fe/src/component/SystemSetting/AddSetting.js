import React, { useEffect, useState, useNavigate } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import  {toast}  from 'react-toastify';
import { addSetting, getTypeSetting } from '../../services/setting.service';
const AddSetting = () => {
  const [typeSetting, setTypeSetting] = useState([]);

  useEffect(() => {
    getTypeSetting().then(data => setTypeSetting(data.data.data)).catch(error => toast(error))
  }, [])
  const handleAddSetting = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const status = e.target.status.value;
    console.log(status);
    addSetting({name,type,
    status: status
    }).then(data => {
      toast(data.data.message)
    })


  }
  return (
    <Container>
      <Form onSubmit={handleAddSetting}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type='text' />

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
              value={true}
            />
            <Form.Check
              type="radio"
              label="Deactivate"
              name="status"
              value={false}

            />

          </div>

        </Form.Group>
        <Button type='submit' variant='primary'>Submit</Button>
      </Form>
    </Container>
  );
};

export default AddSetting;
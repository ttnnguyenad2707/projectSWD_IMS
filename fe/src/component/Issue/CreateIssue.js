import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { createNewIssue } from '../../services/IssueService.js'
import { toast } from 'react-toastify';

const NewIssue = () => {
  const [formData, setFormData] = useState({
    title: '',
    user_create_id: '',
    assign_user_id: '',
    description: '',
    status: '',
    complexity: '',
    // projectId: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddIssue = async (e) => {
    e.preventDefault();
    await createNewIssue(formData);
    toast.success('Issue added successfully', {
      position: 'top-right',
      autoClose: 3000, // Auto close the toast after 3 seconds
    });
    setFormData({
      title: '',
      user_create_id: '',
      assign_user_id: '',
      description: '',
      status: '',
      complexity: ''
    })
    console.log(formData);
  };

  return (
    <Container>
      <h1 className="text-center mb-5">New Issue</h1>
      <Form onSubmit={handleAddIssue}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="user_create_id">
          <Form.Label>Creator</Form.Label>
          <Form.Control
            required
            type="text"
            name="user_create_id"
            value={formData.user_create_id}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assign_user_id">
          <Form.Label>Assigner</Form.Label>
          <Form.Control
            required
            type="text"
            name="assign_user_id"
            value={formData.assign_user_id}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            required
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complexity">
          <Form.Label>Complexity</Form.Label>
          <Form.Control
            required
            type="text"
            name="complexity"
            value={formData.complexity}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="projectId">
          <Form.Label>Project ID</Form.Label>
          <Form.Control
            type="date"
            name="projectId"
            value={formData.projectId}
            onChange={handleInputChange}
          />
        </Form.Group> */}

        <Button variant="primary" type='submit'>
          Add Issue
        </Button>
      </Form>
    </Container>
  );
};

export default NewIssue;
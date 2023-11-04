import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getIssueById, updateIssue } from '../../services/IssueService';
import { toast } from 'react-toastify';

const UpdateIssue = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState({});
  const [updateData, setUpdateData] = useState({
    title: '',
    user_create_id: '',
    assign_user_id: '',
    description: '',
    status: '',
    complexity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  const getIssueDetail = async (id) => {
    try {
      const result = await getIssueById(id);
      setIssue(result.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết vấn đề:", error);
    }
  };

  const handleUpdateIssue = async (e) => {
    e.preventDefault();
    try {
      await updateIssue(id, updateData);
      toast.success('Cập nhật vấn đề thành công', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Lỗi khi cập nhật vấn đề:", error);
    }
  };

  useEffect(() => {
    getIssueDetail(id);
  }, [id]);

  useEffect(() => {
    setUpdateData({
      title: issue.title || '',
      user_create_id: issue.user_create_id || '',
      assign_user_id: issue.assign_user_id || '',
      description: issue.description || '',
      status: issue.status || '',
      complexity: issue.complexity || '',
    });
  }, [issue]);

  return (
    <Container>
      <h1 className="text-center mb-5">Cập Nhật Vấn Đề</h1>
      <Card>
        <Card.Body>
          <Card.Title>ID Vấn Đề: {issue.id}</Card.Title>
          <Form onSubmit={handleUpdateIssue}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={updateData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="user_create_id">
              <Form.Label>Creator</Form.Label>
              <Form.Control
                type="text"
                name="user_create_id"
                value={issue?.user_create_id}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="assign_user_id">
              <Form.Label>Assigner</Form.Label>
              <Form.Control
                type="text"
                name="assign_user_id"
                value={issue?.assign_user_id}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={issue?.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={issue?.status}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="complexity">
              <Form.Label>Complexity</Form.Label>
              <Form.Control
                type="text"
                name="complexity"
                value={issue?.complexity}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Lưu Thay Đổi
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateIssue;



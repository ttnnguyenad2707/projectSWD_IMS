import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getIssueById } from '../../services/IssueService.js'

const IssueDetail = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState();

  const getIssueDetail = async (id) => {
    try {
        const result = await getIssueById(id);
        console.log(result?.data?.data);
        setIssue(result?.data?.data);
    } catch (error) {
        console.error("Error fetching issue list:", error);
    }
};

  useEffect(() => {
    getIssueDetail(id);
  }, [id]);

  return (
    <Container>
      <h1 className="text-center mb-5">Issue Detail</h1>
      <Card>
        <Card.Body>
          <Card.Title>Issue ID: {issue?.id}</Card.Title>
          <Card.Text>
            <strong>Title:</strong> {issue?.title}
          </Card.Text>
          <Card.Text>
            <strong>Creator:</strong> {issue?.user_create_id}
          </Card.Text>
          <Card.Text>
            <strong>Assigner:</strong> {issue?.assign_user_id}
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {issue?.description}
          </Card.Text>
          <Card.Text>
            <strong>Status:</strong> {issue?.status}
          </Card.Text>
          <Card.Text>
            <strong>Complexity:</strong> {issue?.complexity}
          </Card.Text>
        </Card.Body>
      </Card>
      <Link to={`/issues/update/${issue?.id}`}><Button variant="primary">Edit Issue</Button></Link>
    </Container>
  );
};

export default IssueDetail;
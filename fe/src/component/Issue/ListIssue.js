import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { getAllIssue } from '../../services/IssueService.js'
import { Link } from 'react-router-dom'


const IssueList = () => {

    const [issueList, setIssueList] = useState([]);
    // const navigate = useNavigate();

    const getIssueList = async () => {
        try {
            const result = await getAllIssue();
            console.log(result?.data?.data);
            setIssueList(result?.data?.data);
        } catch (error) {
            console.error("Error fetching issue list:", error);
        }
    };

    useEffect(() => {
        getIssueList();
    }, []);

    // const onAddIssue = () => {
    //     navigate(`/issue/create`);
    // };

    return (
        <>
            <h1 className="text-center mb-5">Issue List</h1>
            <Container>
                <Link to={'/issues/create'}><Button className="mb-3 mt-3 ml-auto" variant="primary">Add Issue</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Creator</th>
                            <th>Assignee</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Complexity</th>
                            <th>createAt</th>
                            <th>updateAt</th>
                            <th>deleteAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issueList.map((issue) => (
                            <tr key={issue?.id}>
                                <td><Link to={`${issue?.id}`}>{issue?.title}</Link></td>
                                <td>{issue?.user_create_id}</td>
                                <td>{issue?.assign_user_id}</td>
                                <td>{issue?.description}</td>
                                <td>{issue?.status}</td>
                                <td>{issue?.complexity}</td>
                                <td>{issue?.createdAt}</td>
                                <td>{issue?.updatedAt}</td>
                                <td>{issue?.deletedAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default IssueList;
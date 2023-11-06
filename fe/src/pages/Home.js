import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Home = () => {
    const [user] = useOutletContext();
    const nav = useNavigate();


    return (
        <div>
            <p>{user?.email}
            </p>

            <Container fluid>
                <Row>
                    <Col md={2}>
                        <div className='gap-3 d-flex flex-column'>
                            {user?.Role === "teacher" ? <button className='btn btn-primary' onClick={() => { nav("/projectList") }}>Project</button> : ""}
                            {user?.Role === "admin" ? <Link className='btn btn-primary' to='/systemsetting'> Setting </Link> : ""}
                            {user?.Role === "admin" ? <Link className='btn btn-primary' to='/admin/subject'> Subject </Link> : ""}
                            {user?.Role === "student" ? <Link className='btn btn-primary' to='/issues'> Issue </Link> : ""}
                            {user?.Role === "teacher" ? <Link className='btn btn-primary' to='/classlist'> Class </Link> : ""}
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home
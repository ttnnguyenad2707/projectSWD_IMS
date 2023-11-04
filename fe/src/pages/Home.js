import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Home = () => {
    const [user] = useOutletContext();
    const nav = useNavigate();


    return (
        <div>
            Home
            <p>{user?.email}
            </p>
           
            <Container fluid>
                <Row>
                    <Col  md={2}>
                        <div className='gap-3 d-flex flex-column'>
                        {user?.Role ==="teacher" ?  <button className='btn btn-primary' onClick={() => { nav("/projectList") }}>go to project</button> : "" }
                        {user?.Role ==="admin" ?    <Link className='btn btn-primary' to='/systemsetting'> Go to Setting list </Link>: "" }
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
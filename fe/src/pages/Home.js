import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            Home
            <Container fluid>
                <Row>
                    <Col  md={2}>
                        <div className='gap-3 d-flex flex-column'>
                            <button className='btn btn-primary'>go to project</button>
                            <Link className='btn btn-primary' to='/systemsetting'> Go to Setting list </Link>
                        </div>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
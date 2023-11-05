import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Cookies from 'js-cookie';
import { logout } from '../services/auth.service';

const Header = () => {
    const token = Cookies.get('accessToken');
    // const [user, setUser] = useState("");
    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate()

    useEffect(() => {
        if (!token || !user) {
            navigate('/login');
            return;
        }




    }, [token, navigate]);
    // console.log("token",token);
    const handleLogout = () => {
        logout();
        Cookies.remove('accessToken');
        localStorage.removeItem('user');
        navigate("/login")
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to="/" className='fw-bold pe-5 nav-link' id='logo'>IMS</Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            {
                                token ? (
                                    <Nav.Link href="/projectList">Project</Nav.Link>

                                ) : (
                                    ""
                                )
                            }
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            {token ? (
                                <>
                                    <NavLink to="" className="nav-link" >{user?.email}</NavLink>
                                    <button className='btn bt-primary p-2 fw-bold' onClick={() => { handleLogout() }}>Đăng Xuất</button>
                                </>

                            )
                                :
                                (
                                    <>
                                        <NavLink to="/login" className="nav-link" >Login</NavLink>
                                        <NavLink to="/login" className="nav-link" >register</NavLink>
                                    </>

                                )
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet context={[user]} />

        </div>
    );
};

export default Header;
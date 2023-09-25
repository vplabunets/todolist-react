import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export const Layout = ({ children }) => {
    return (
        <main>
            <Nav className="w-50nav nav-pills mb-3 p-2 bg-light">
                <NavLink className="nav-link mr-3" to="/" end>
                    Home
                </NavLink>
                <NavLink className="nav-link  mx-lg-0" to="/todosList">
                    Todos List
                </NavLink>
            </Nav>
            <Container>
                <Row>{children}</Row>
            </Container>
        </main>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

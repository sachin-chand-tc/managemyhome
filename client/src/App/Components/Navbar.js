import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                    <Navbar.Brand>
                        <NavLink to="/">HouseKeepingApp</NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link><NavLink to="/view-asset">See All Assets</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/view-worker">See All Workers</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/view-task">See All Tasks</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;
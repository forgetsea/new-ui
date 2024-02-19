import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import IssueView from '../scene/issues';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Issue Solving</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/issues">Issues</Nav.Link>
            <Nav.Link as={Link} to="/createIssue">Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}

export default Header;
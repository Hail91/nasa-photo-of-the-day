import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light expand="md">
      <img src="https://img.icons8.com/color/48/000000/nasa.png" alt="nasa-logo"/>
        <NavbarBrand href="/">Nasa Image of the day!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Hail91" target="_">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More Info
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href= "https://api.nasa.gov/#apod" target="_">NASA API</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="https://www.nasa.gov/" target="_">NASA Home</a>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

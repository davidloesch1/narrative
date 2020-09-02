import React, { useState } from "react";
import { Link } from "react-router-dom";
import anonomous from "./img/anonomous.png";
import {
  Navbar,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Form,
  Input,
  Media,
} from "reactstrap";

function Header(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let greeting = props.user.loggedIn ? (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
      <DropdownToggle tag={Link} className="profile_link">
        <img
          src={anonomous}
          alt="anonomous"
          className="rounded-circle profile"
        />
        <p>{props.user.user}</p>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <Link to="/dashboard">Dashboard</Link>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={props.logout}>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
      <DropdownToggle tag={Link} className="profile_link">
        <img
          src={anonomous}
          alt="anonomous"
          className="rounded-circle profile"
        />
        <p>Guest</p>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={props.login}>Login</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
  return (
    <Navbar
      color="light"
      light
      expand="md"
      className="d-flex justify-content-between align-top"
    >
      <Form xs="auto" className="align-top">
        <Input
          className="mn-100 "
          name="search"
          id="searchBar"
          placeholder="Search"
          sytle="font-family: FontAwesome"
          style={{ fontFamily: "FontAwesome 5" }}
        />
      </Form>
      {greeting}
    </Navbar>
  );
}

export default Header;

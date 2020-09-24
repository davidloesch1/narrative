import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import anonomous from "./img/anonomous.png";
import {
  Navbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Form,
  Input,
} from "reactstrap";
const mapStateToProps = (state) => ({
  user: state.user
})

function Header(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let greeting = props.loggedIn ? (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
      <DropdownToggle tag={Link} className="profile_link">
        <img
          src={anonomous}
          alt="anonomous"
          className="rounded-circle profile"
        />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <Link to="/dashboard">Dashboard</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/create">Create Story</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/">Home</Link>
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
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={props.login}>Login</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <Link to="/signup">Signup</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
  return (
    <Navbar color="dark" className="justify-content-between sticky-top">
      <Form xs="auto" className="align-top">
        <Input
          className="form-control-sm"
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

export default connect(mapStateToProps)(Header);

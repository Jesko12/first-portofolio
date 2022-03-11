import React from "react";
import { Menu, Nav } from "./NavbarElements";
import * as Ri from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = ({ onClick }) => (
  <Nav>
    <Menu>
      <Ri.RiMenu2Fill onClick={onClick} />
    </Menu>
    <h1>Abbasource Grocery</h1>
    <Link to="/logout">
      <Ri.RiLogoutCircleRLine color="#fff" />
    </Link>
  </Nav>
);

export default Navbar;

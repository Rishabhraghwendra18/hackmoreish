import Image from "next/image";
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../public/logo.png";
import facebook from "../public/facebook.png";
import twitter from "../public/twitter.png";
import instagram from "../public/instagram.png";
import discord from "../public/discord.png";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{backgroundColor:"#00000091 !important"}}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} responsive></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="fs-4 me-1 navLinks" href="#Home">Home</Nav.Link>
            <Nav.Link className="fs-4 me-1 navLinks" href="#Theme">Theme</Nav.Link>
            <Nav.Link className="fs-4 me-1 navLinks" href="#Schedule">Schedule</Nav.Link>
            <Nav.Link className="fs-4 navLinks" href="#Sponsor">Sponsor</Nav.Link>
          </Nav>
          <Nav>
            <div className="d-flex flex-row">
            <Nav.Link className="me-1" href="#deets">
              {" "}
              <Image src={facebook} responsive></Image>
            </Nav.Link>
            <Nav.Link className="me-1" href="#deets">
              {" "}
              <Image src={instagram} responsive></Image>
            </Nav.Link>
            <Nav.Link className="me-1" href="#deets">
              {" "}
              <Image src={twitter} responsive></Image>
            </Nav.Link>
            <Nav.Link href="#deets">
              {" "}
              <Image src={discord} responsive></Image>
            </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

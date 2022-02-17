import Image from "next/image";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../public/logo.png";
import facebook from "../public/facebook.png";
import twitter from "../public/twitter.png";
import instagram from "../public/instagram.png";
import discord from "../public/discord.png";

export default function NavBar() {
  
  return (
    <Navbar className="position-fixed top-0 w-100 nav_bar" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{backgroundColor:"#00000091 !important"}}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} width={70} height={70} alt="Hackmoreish logo"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="fs-4 me-1 navLinks" href="#Home">Home</Nav.Link>
            <Nav.Link className="fs-4 me-1 navLinks" href="#About">About</Nav.Link>
            <Nav.Link className="fs-4 me-1 navLinks" href="#Prizes">Prizes</Nav.Link>
            <Nav.Link className="fs-4 me-1 navLinks" href="#Theme">Theme</Nav.Link>
            <Nav.Link className="fs-4 me-1 navLinks" href="#Schedule">Schedule</Nav.Link>
            <Nav.Link className="fs-4 navLinks" href="#Sponsors">Sponsors</Nav.Link>
            <Nav.Link className="fs-4 navLinks" href="#FAQs">FAQs</Nav.Link>
            <Nav.Link className="fs-4 navLinks" href="#Team">Team</Nav.Link>
            <Nav.Link className="fs-4 navLinks" href="#Contact_Us">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <div className="d-flex flex-row">
            <Nav.Link className="me-1" href="https://www.facebook.com/profile.php?id=100074956186696" target={"_blank"}>
              {" "}
              <Image src={facebook} alt="facebook logo" responsive></Image>
            </Nav.Link>
            <Nav.Link className="me-1" href="https://instagram.com/hackmoreish?utm_medium=copy_link" target={"_blank"}>
              {" "}
              <Image src={instagram} alt="instagram logo" responsive></Image>
            </Nav.Link>
            <Nav.Link className="me-1" href="https://twitter.com/HackMoreish?t=HPo06xXtMNosPUf1ltngAA&s=08" target={"_blank"}>
              {" "}
              <Image src={twitter} alt="twitter logo" responsive></Image>
            </Nav.Link>
            <Nav.Link href="https://discord.gg/PqwCqPxhkd" target={"_blank"}>
              {" "}
              <Image src={discord} alt="discord logo" responsive></Image>
            </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

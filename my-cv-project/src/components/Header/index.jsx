import { Container, Navbar } from "react-bootstrap";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import img from "../../assets/2185901_1.png"
function Header() {
  return (
    <Navbar
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        paddingTop: "20px",
        paddingBottom: "20px",
        height: "100px",
        zIndex: 999,
      }}
      className="bg-body-tertiary"
    >
      <Container>
        <img style={{ width: "5%", marginRight:"10px" }} src={img} alt="" />
        
        <Navbar.Brand href="#home">Wakabayashi</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a style={{ textDecoration: "none", color: "black" }} href="#login">
              Farid Asgarli
            </a>
            <span style={{ marginLeft: "35px" }}>
              <a href="https://www.instagram.com/">
                <FaInstagram
                  style={{
                    fontSize: "24px",
                    color: "black",
                    marginRight: "10px",
                  }}
                />
              </a>
              <a href="https://www.facebook.com/">
                <CiFacebook
                  style={{
                    fontSize: "24px",
                    color: "black",
                    marginRight: "10px",
                  }}
                />
              </a>
              <a href="https://x.com/">
                <FaXTwitter style={{ fontSize: "24px", color: "black" }} />
              </a>
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

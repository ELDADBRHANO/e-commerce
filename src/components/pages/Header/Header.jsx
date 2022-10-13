import { useContext, useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BiSun, BiMoon, BiCart,BiUserCircle } from "react-icons/bi";
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";
import { ThemeContext } from "../../../GlobalComponents/ThemeProvider";

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);
  const { isEmpty, totalItems } = useCart();
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant={darkMode ? "dark" : "light"}
      className={
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      style={{ width: "100%", position: "fixed", zIndex: 100 }}
    >
      <Container className="ms-auto">
        <Link to="/">
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}
          >
            <b>ALL.</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link
              to="/cart"
              className={`${
                darkMode ? "text-dark-primary" : "text-light-primary"
              } d-flex align-items-center`}
            >
              <BiCart size="2rem" />
              {!isEmpty && (
                <span
                  style={{ position: "relative", left: "-21px", top: "-18px" }}
                >
                  {totalItems}
                </span>
              )}
              <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}></span>
            </Link>
            

            <Link
              to="/login"
              className={`${
                darkMode ? "text-dark-primary" : "text-light-primary"
              } d-flex align-items-center`}
            >
              <BiUserCircle size="2rem" />
              <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}></span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

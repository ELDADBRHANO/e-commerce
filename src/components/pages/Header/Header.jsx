import { useContext, useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { Link, useNavigate } from "@reach/router";
import { useCart } from "react-use-cart";
import { ThemeContext } from "../../../GlobalComponents/ThemeProvider";
import { useUserAuth } from "../../context/user-context";
import { Avatar, Box,  } from "@mui/material";

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  const { isEmpty, totalItems } = useCart();
  const { user,logOut} = useUserAuth();
  const navigate = useNavigate()
  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);
  const handleLogOut = async ()=>{
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Navbar 
      collapseOnSelect
      variant={darkMode ? "dark" : "light"}
      className={ 
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      style={{ width: "100%", position: "fixed", zIndex: 100 }}
    >
      <Container className="ms-auto">
        <Container className="d-flex" variant="secondary">
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id="popover-positioned-bottom">
                <Popover.Body>
                  <Box>

                {`Hello ${user?.displayName}`}
                  </Box> <br />
                  <Button onClick={handleLogOut} variant="secondary">Log out </Button>
                </Popover.Body>
              </Popover>
            }
          >
            <Avatar alt="user" src={user&&user.photoURL||user && user.email} />
          </OverlayTrigger>
            </Container>
        


        
        <Link to={user?'/Home':'/'}>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;



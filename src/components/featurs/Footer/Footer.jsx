import "./Footer.css";
import React from "react";
import { Col, Container } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Container id="footer" className="container-fluid d-flex justify-content-center">
      <Col>
      <a target='_blank' style={{color:'inherit'}} href="https://github.com/ELDADBRHANO">
        <GitHubIcon fontSize="large" />
      </a>
      
      </Col>

      <a target='_blank' style={{color:'inherit'}} href="https://www.linkedin.com/in/eldad-brhano-59b531235/">
           <Col>
        <LinkedInIcon fontSize="large" />
      </Col>
      </a>

    </Container>
  );
}

export default Footer;

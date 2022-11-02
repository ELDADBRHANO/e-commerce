import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span data-testid="spanFooter">Get connected with Me:</span>
        </div>

        <div>
          <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/eldad-brhano-59b531235/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a target='_blank' rel="noreferrer" href='https://github.com/ELDADBRHANO' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                ALL
              </h6>
              <p>
                Here you can find clothes,remotes,TV'S, and more.
                the prices are for ALL!<br/>
                We allways working for you to have it ALL!
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 data-testid="Title" className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                The King David, Lod 10012, ISRAEL
              </p>
              <a href="mailto:ebrhano@gmail.com" target="_blank" rel="noopener noreferrer">
                <p id='p-email'>
                <MDBIcon icon="envelope" className="me-3 " />
                Click to Send me an Email!
              </p>
              </a>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
       
          ALL
        
      </div>
    </MDBFooter>
  );
}
// import "./Footer.css";
// import React from "react";
// import { Col, Container } from "react-bootstrap";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// function Footer() {
//   return (
//     <Container id="footer" className="container-fluid d-flex justify-content-center">
//       <Col>
//       <a target='_blank' rel="noreferrer" style={{color:'inherit'}} href="https://github.com/ELDADBRHANO">
//         <GitHubIcon fontSize="large" />
//       </a>
      
//       </Col>

//       <a target='_blank' rel="noreferrer" style={{color:'inherit'}} href="https://www.linkedin.com/in/eldad-brhano-59b531235/">
//            <Col>
//         <LinkedInIcon fontSize="large" />
//       </Col>
//       </a>

//     </Container>
//   );
// }

// export default Footer;

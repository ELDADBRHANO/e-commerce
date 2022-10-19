
import { Row } from "react-bootstrap";
import Header from "../../pages/Header/Header";
import Footer from "../Footer/Footer";
import "./CheckOut.css";

import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js";
import { Input } from "@mui/material";
import { Link } from "@reach/router";





function CheckOut() {

  return (
    <>
    
      <div>
      <Row className="justify-content-center">
        <Header />
      </Row>
      <div className="mt-5 row d-flex justify-content-center">
        <div className="mt-5 col-md-7">
          <div className="card">
            <div className="card-header">
              <h4>Delivery Information</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label> First Name</label>
                    <input
                      required
                      type="text"
                      name="firstname"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label> Last Name</label>
                    <input
                      required
                      type="text"
                      name="lastname"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label> Phone Number</label>
                    <input
                      required
                      type="text"
                      name="phone"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label> Email Address</label>
                    <input  type="email" name="email" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <label> Full Address</label>
                    <textarea
                      rows="3"
                      name="address"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>City</label>
                    <input
                      required
                      type="text"
                      name="city"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>State</label>
                    <input
                      required
                      type="text"
                      name="state"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Zip Code</label>
                    <input
                      required
                      type="text"
                      name="zipcode"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="container d-flex mt-3 justify-content-center ">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    pay
                  </button>
                </div>

                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Payment</h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>

                      <div className="modal-body d-flex">
                      <label htmlFor="ccn">Credit Card Number:</label><br />
                      <Input required name="ccn" type="tel" inputMode="numeric"  pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx"/><br />
                      <label htmlFor="CVV">Valid Thru</label><br />
                        <Input required inputMode="numeric" maxLength="3" name="CVV" type="text"/><br />
                      <label htmlFor="ccn">CVV:</label><br />
                        <Input required maxLength="3"  type="text"/><br />
                      </div>

                      <div className="modal-footer">
                        <img id="credit" src="images/credit.png" alt="" />
                        <Link to="/Home">
                        <button
                        
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Sumbit
                        </button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5">

      <Footer />
    </div>
    </>
  )
  
  
}
export default CheckOut;

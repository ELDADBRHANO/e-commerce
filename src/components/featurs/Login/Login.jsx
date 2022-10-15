import "./Login.css";
import { Link, useNavigate } from "@reach/router";
import { useState } from "react";
import { Alert, Button,  Container } from "react-bootstrap";
import { useUserAuth } from "../../context/user-context";
import { GoogleButton } from "react-google-button";
import { Typography } from "@mui/material";
import ReactFacebookLogin from "react-facebook-login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { logIn, googleSignIn, signInWithFacebook } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("Home");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithFacebook();
      navigate("/Home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container id="from-Card" className="mt-5 container-fluid h-100">
      <div className="mt-5 d-flex justify-content-center">
        <form onSubmit={handleSumbit} className="mt-5">
          <br />
          <div>
            <h3 className="text-center">Log In</h3>
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
          <div className="mt-5 ">
            <div className="d-grid justify-content-center">
              <label>Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
              <label>Password</label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="form-control "
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="d-grid d-flex justify-content-center mt-3">
            <Button type="submit" className=" btn btn-primary">
              Log In
            </Button>
          </div>
          <div className="d-grid d-flex justify-content-center">
            <GoogleButton
              onClick={handleGoogleSignIn}
              className="g-btn justify-content-center mt-3"
              type="dark"
            />
          </div>
          <br />
          <div className="d-grid d-flex justify-content-center">
            <ReactFacebookLogin
              className="g-btn justify-content-center mt-3"
              type="dark"
              onClick={handleFacebookSignIn}
            />
          </div>
        </form>
      </div>
      <Link style={{ textDecoration: "none" }} to="signup">
        <Container className="forgot-password text-right">
          <Typography
            className="text-center mt-3"
            style={{ color: "green" }}
            variant="h6"
          >
            Want to registered? sign up!
          </Typography>
        </Container>
      </Link>
    </Container>
  );
}

import { Typography } from "@mui/material";
import { Link, useNavigate } from "@reach/router";
import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useUserAuth } from "../../context/user-context";

import './SignUp.css'
function SignUp() {
  const [email,setEmail]= useState("");
  const [password,setpassword]= useState("");
  const {signUp} = useUserAuth();
  const [error,setError] = useState("");
  const navigate = useNavigate()
  const handleSumbit = async (e)=>{
    e.preventDefault();
    setError("")
    try {
      await signUp(email,password)
    navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <Container id="signUp-Container" className="mt-5 d-flex justify-content-center">
       <form onSubmit={handleSumbit} className="mt-5">
        <h3 className="text-center">Sign Up</h3>
      {error && <Alert variant="danger">{error}</Alert> }
        <div className="mt-4">
          <label>Email address</label>
          <input onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
            
          />
        </div>
        <div className="mt-4 ">
          <label>Password</label>
          <input onChange={(e)=>setpassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
       
          />
        </div>
        <div className="mt-4">
          <label>Age</label>
          <input 
            type="number"
            className="form-control"
            placeholder="Please Enter Your Age"
            required
          />
        </div>
        <div className="mt-4">
          <label>Date Of Birth</label>
          <input 
            type="date"
            className="form-control"       
          />
        </div>
        <div className="d-grid ">
          <button type="submit" className="mt-3 btn btn-primary">
            Sign Up
          </button>
        </div>
        <Link style={{textDecoration:'none'}} to="/">
        <Typography style={{color:'black'}} className="forgot-password text-right">
          Already registered Log in?
        </Typography>
        </Link>
 
      </form>
    </Container>
   
  );
}

export default SignUp;
import { Link, useNavigate } from "@reach/router";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/user-context";


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
    <div className="mt-5">
      {error && <Alert variant="danger">{error}</Alert> }
       <form onSubmit={handleSumbit} className="mt-5">
        <h3>Sign Up</h3>
        <div className="mt-5">
          <label>Email address</label>
          <input onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
            
          />
        </div>
        <div className="mt-5">
          <label>Password</label>
          <input onChange={(e)=>setpassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
       
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <Link to="/">
        <p className="forgot-password text-right">
          Already registered Log in?
        </p>
        </Link>
 
      </form>
    </div>
   
  );
}

export default SignUp;
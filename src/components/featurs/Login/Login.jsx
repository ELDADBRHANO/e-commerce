import { Link, useNavigate } from "@reach/router";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/user-context";

export default function Login() {
  const [email,setEmail]= useState("");
  const [password,setpassword]= useState("");
  const {logIn} = useUserAuth();
  const [error,setError] = useState("");
  const navigate = useNavigate()
  const handleSumbit = async (e)=>{
    e.preventDefault();
    setError("")
    try {
      await logIn(email,password)
        navigate("Home")
    } catch (error) {
      setError(error.message)
    }
  }
  return(
      <div className="mt-5">
        {error&& <Alert variant="danger">{error}</Alert>}
       <form onSubmit={handleSumbit} className="mt-5">
        <h3>Log In</h3>
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
          {/* <Link to="/Home"> */}
              <button type="submit" className="btn btn-primary">
            Log In
          </button>
          {/* </Link> */}
      
        </div>
        <Link to="signup">
        <p className="forgot-password text-right">
          Want to registered? sign up!
        </p>
        </Link>
 
      </form>
    </div>
  )

}

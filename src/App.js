import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import { Router } from "@reach/router";
import { Cart, Header, Home, Product } from "./components";
import Login from "./components/featurs/Login/Login";
import { useEffect } from "react";
import UserProvider from "./components/context/user-context";
function App() {
  const [theme] = useThemeHook();
  useEffect(()=>{
    <Login/>
  },[])
  return (
    <main
      className={theme ? "bg=black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
        <Header />
      <Router>
       <Home path="home" />
        <Login path='/'/>
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;

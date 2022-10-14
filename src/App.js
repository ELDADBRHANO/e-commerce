import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import { Router } from "@reach/router";
import { Cart, Header, Home, Product } from "./components";
import Login from "./components/featurs/Login/Login";
import SignUp from "./components/featurs/SignUp/SignUp";

function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg=black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <Router>
        <Login path="/" />
        <SignUp path="signup"/>
        <Home path="Home"/>
        <Cart path="cart" />
      </Router>
    </main>
  );
}

export default App;

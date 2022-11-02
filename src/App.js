import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import { Router } from "@reach/router";
import { Cart, Home } from "./components";
import Login from "./components/featurs/Login/Login";
import SignUp from "./components/featurs/SignUp/SignUp";
import NotFound from "./components/pages/NotFound/NotFound";
import CheckOut from "./components/featurs/CheckOut/CheckOut";

function App() {
  const [theme] = useThemeHook();

  return (
    <main data-testid="main"
      className={theme ? "bg-black" : "bg-light"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
  
      <Router basename="ALL">
        <Login path="/" />
        <Login path="/ALL" />
        <SignUp path="signup"/>
        <Home path="Home"/>
        <CheckOut path="CheckOut"/>
        <Cart path="cart" />
        <NotFound default/>
      </Router>
    </main>
  );
}

export default App;



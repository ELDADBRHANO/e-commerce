import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./components/pages/Header/Header";
import { Router } from "@reach/router";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";

function App() {
  const [theme] = useThemeHook();

  return (
    <main
      className={theme ? "bg=black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <Router>
        <Home path="/" />
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;

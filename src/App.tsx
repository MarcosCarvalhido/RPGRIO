import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Event from "./Pages/EventContent";

import NavBar from "./Components/NavBar";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>
      <Route path="/sobre">
        <About />
      </Route>
      <Route path="/evento"></Route>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/:nome" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import NavBar from "./Components/NavBar";
import "./App.css";

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
    </BrowserRouter>
  );
}

export default App;

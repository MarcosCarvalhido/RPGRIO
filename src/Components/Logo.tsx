import {Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";




function Logo(){
    return(
        <Navbar.Brand >
        <Link to="/">
          <img
            alt=""
            src="Images/cropped-RPG-RIO.png"
            width="70"
            height="70"
          />
         
        </Link>
      </Navbar.Brand>
    )
}

export default Logo
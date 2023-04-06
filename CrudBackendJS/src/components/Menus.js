import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

import React from "react";
import { ListGroup, ListGroupItem, Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import { Link,Outlet } from "react-router-dom";
import "../css/course/menu.css";
const Menus=() =>{
    return(
       <>
       {/* <div id="header"> */}
      <Navbar style={{backgroundColor:"yellowgreen"}} variant="dark" fixed="top" id="header">
          
            <Link to="/" id="navlink">Home</Link>
            <Link to="/login" id="navlink">Login</Link> 
            <Link to="/register" id="navlink">Sign Up</Link>   
            <span>
            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/view-course" id="navlink1">View Courses</Link> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/add-course" id="navlink1">Add Courses</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            </span>
            <span>
            <NavDropdown title="Accommodation" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> <Link to="/accommodation" id="navlink1">Add Accommodation</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/view-accommodation" id="navlink1">View Accommodation</Link> 
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            </span>
            <span>
            <NavDropdown title="Hospital Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/hospitals" id="navlink1">Add Hospitals</Link> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/view-hospitals" id="navlink1">View Hospitals</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            </span>
            <span>
            <NavDropdown title="Mess Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> <Link to="/mess" id="navlink1">Add Mess</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/view-mess" id="navlink1">View Mess</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            </span>

            <span>
            <NavDropdown title="Gadget Shops" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> <Link to="/gadgetShop" id="navlink1">Add Shop</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/view-shop" id="navlink1">View Shop</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            </span>
      </Navbar>
      {/* </div> */}
      <Outlet/>

       </>

    )
}
export default Menus;
import { Col,Row } from "react-bootstrap";
import React from "react";
import Home from "./Home";
import Menus from "./Menus";

const MainPage=()=>{
    return(
        <div className="gradient">
            <Row>
                <Col md={4}>
                <h3>Hii Dear, Here is the solution which you are looking for to find Better Hostel/Accomodation by directly contacting owner without invoving any third party which saves your money </h3>
   
                </Col>
                <Col md={8}>
                    <Home/>
                    <Menus/>
                </Col>
            </Row>

       </div>
       
    );
}
export default MainPage;
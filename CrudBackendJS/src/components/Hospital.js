import React, { Fragment } from "react";
import { Card,CardImg,Button } from "react-bootstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import "../css/course/course.css";


const Hospital = ({hospitals}) => {

    const deleteHospital=(id)=>{
        axios.delete(`${base_url}/hospitals/${id}`).then(
          (response)=>{
              console.log(response);
              console.log("deleted");
        }).catch((error)=>{
              console.log(error);
              console.log("error");
        });
      };
 
    return (
      <Fragment>
        <div>
        <Card  id="card">
          <div id="odiv">
        <Card.Img variant="top" src="../images/hospital-building1.jpg" />
         </div>
         <div id="idiv">
        <Card.Body>
            {/* <CardImg>
                {course.image}
            </CardImg> */}
            <Card.Title id="hname">
               Hospital Name: {hospitals.hName}
            </Card.Title>
            <Card.Text  id="haddress">
                Address: {hospitals.hAddress}
            </Card.Text>
            <Card.Text  id="hContactNumber">
                Contact No: {hospitals.hContactNumber}
            </Card.Text>
            <Card.Text  id="hSpeciality">
                {hospitals.hSpeciality}
            </Card.Text>
            <Card.Text  id="hRating">
                 Rating : {hospitals.hRating}
            </Card.Text>
          <Button type="submit" color="success">Update</Button>
          <Button type="submit" color="red" onClick={()=>{
            deleteHospital(hospitals.id);
          }}
          >Remove</Button>
        </Card.Body>
      </div>
      </Card>
      
      </div>
      </Fragment>
    )
  }

export default Hospital;



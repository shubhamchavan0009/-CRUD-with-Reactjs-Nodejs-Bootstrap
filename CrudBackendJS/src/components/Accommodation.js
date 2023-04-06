import React, { Fragment } from "react";
import { Card,CardImg,Button } from "react-bootstrap";
import axios from "axios";
import base_url from "../api/bootapi";
//import "../css/course/course.css";


const Accommodation = ({accommodation}) => {

    const deleteAccommodation=(id)=>{
        axios.delete(`${base_url}/accommodation/${id}`).then(
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
        <div id="accommodation">
        <Card id="card">
            <div id="odiv">
        <Card.Img variant="top" src="../public/logo512.png" />
            </div>
            <div id="idiv">
        <Card.Body>
            {/* <CardImg>
                {course.image}
            </CardImg> */}
            <Card.Title id="aname">
                Accommodation Name: {accommodation.aName}
            </Card.Title>
            <Card.Title id="aowner">
                Owner Name: {accommodation.aOwner}
            </Card.Title>
            <Card.Text  id="haddress">
                Address: {accommodation.aAddress}
            </Card.Text>
            <Card.Text  id="acontact">
                Contact No: {accommodation.aContact}
            </Card.Text>
            <Card.Text  id="arent">
                Rent :{accommodation.aRent}
            </Card.Text>
            <Card.Text  id="arating">
                Rating: {accommodation.aRating}
            </Card.Text>
            <Card.Text  id="atype">
               Type: {accommodation.aType}
            </Card.Text>
            <Card.Text  id="other">
                Other Facilities: {accommodation.otherFacilities}
            </Card.Text>
          <Button type="submit" color="success">Update</Button>
          <Button type="submit" color="red" onClick={()=>{
            deleteAccommodation(accommodation.id);
          }}
          >Remove</Button>
        </Card.Body>
        </div>
      </Card>
      </div>
      </Fragment>
    )
  }

export default Accommodation;



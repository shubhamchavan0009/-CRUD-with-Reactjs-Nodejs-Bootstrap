import React, { Fragment } from "react";
import { Card,CardImg,Button } from "react-bootstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import "../css/course/course.css";


const Mess = ({mess}) => {

    const deleteMess=(id)=>{
        axios.delete(`${base_url}/mess/${id}`).then(
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
        <div id="mess">
        <Card id="card">
        <div id="odiv">
        <Card.Img variant="top" src="../public/logo512.png" />
        </div>
        <div id="idiv">
        <Card.Body>
            {/* <CardImg>
                {course.image}
            </CardImg> */}
            <Card.Title id="mname">
               Mess Name: {mess.mName}
            </Card.Title>
            <Card.Text  id="mowner">
               Mess Owner: {mess.mOwner}
            </Card.Text>
            <Card.Text  id="maddress">
               Address: {mess.mAddress}
            </Card.Text>
            <Card.Text  id="mcontact">
               Conatct No: {mess.mContact}
            </Card.Text>
            <Card.Text  id="mfees">
                Fees: {mess.mFees}/ month
            </Card.Text>
            <Card.Text  id="mrating">
               Rating: {mess.mRating}
            </Card.Text>
            <Card.Text  id="mtype">
                Food Type:{mess.mType}
            </Card.Text>
          <Button type="submit" color="success">Update</Button>
          <Button type="submit" color="red" onClick={()=>{
            deleteMess(mess.id);
          }}
          >Remove</Button>
        </Card.Body>
        </div>
      </Card>
      </div>
      </Fragment>
    )
  }

export default Mess;



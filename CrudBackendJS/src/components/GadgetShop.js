import React from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import { useEffect,useState } from "react";
import { Card,Button} from "react-bootstrap";
import { Fragment } from "react";


const GadgetShop=({gadgetShop})=>{
   
    const deleteGadgetShop=(id)=>{
        axios.delete(`${base_url}/gadgetShop/${id}`).then(
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
            <Card.Title id="sname">
               Gadget Shop Name: {gadgetShop.sName}
            </Card.Title>
            <Card.Text  id="saddress">
                Address: {gadgetShop.sAddress}
            </Card.Text>
            <Card.Text  id="scontact">
                Contact No: {gadgetShop.sContact}
            </Card.Text>
           

          <Button type="submit" color="success">Update</Button>
          <Button type="submit" color="red" onClick={()=>{
            deleteGadgetShop(gadgetShop.id);
          }}
          >Remove</Button>
        </Card.Body>
      </div>
      </Card>
      
      </div>
      </Fragment>
    )
  }


export default GadgetShop;
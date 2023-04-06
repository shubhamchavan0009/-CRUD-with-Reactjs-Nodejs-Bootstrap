import React, { Fragment } from "react";
import { Card,CardImg,Button } from "react-bootstrap";
import axios from "axios";
//import "../css/course/course.css";
import base_url from "../api/bootapi";

const Course = ({course}) => {

  // delete course
  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
          console.log(response);
          console.log("deleted");
    }).catch((error)=>{
          console.log(error);
          console.log("error");
    });
  };
 
    return (
      <>
        {/* <div id="course"> */}
        
       
          <div>
          <Card  id="card">   
            <div id="odiv" > 
            <Card.Img variant="top" src="../images/hospital-building1.jpg" /> 
            </div>
            <div id="idiv">
              <Card.Body>
                   {/* <CardImg>
                      {course.image}
                      </CardImg> */}
                 <Card.Title id="ctitle">
                      {course.title}
                 </Card.Title>
                 <Card.Text  id="cdesc">
                      {course.description}
                 </Card.Text>
                     <Button type="submit" color="success">Update</Button>
                    <Button type="submit" color="red" onClick={()=>{
                            deleteCourse(course.id);
                            }}
                             >Remove</Button>
              </Card.Body>
          </div>
         </Card>
         </div>
            
      {/* </div> */}
      </>
    );
  }

export default Course;



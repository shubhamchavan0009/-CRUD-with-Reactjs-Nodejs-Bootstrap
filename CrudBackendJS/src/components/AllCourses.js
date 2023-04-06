import React, { useState , useEffect} from "react";
import Course from "./Course";
import axios from 'axios';
import base_url from "../api/bootapi";
import { Container } from "react-bootstrap";


const AllCourses = () => {

    // function to call server
const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(                    // 
      (res)=>{
        console.log(res.data);    
        setCourses(res.data);
      },
      (error)=>{
        console.log(error);
      }
    );
  };

  //calling loading course function
useEffect(()=>{
    getAllCoursesFromServer();
  },[]);
  

    useEffect(()=>{
       
        document.title="All-courses";
    },[])
 
    const [courses,setCourses]=useState([
        // {id:"1",title:"java", description:"jbddsnccms"},
        // {id:"2",title:"java1", description:"jbddsnccms"},
        // {id:"3",title:"java2", description:"jbddsnccms"},
    ]);
    return (
     
       <div className="gradient"> 
       
        {
            courses.length >0 ? courses.map((item)=> <Course key={item.id} course={item}/>) : "No Course"
        }
       </div> 
      
    );
  };

export default AllCourses;
import React, { useState , useEffect} from "react";
import Accommodation from "./Accommodation";
import axios from 'axios';
import base_url from "../api/bootapi";


const AllAccommodation = () => {

    // function to call server
const getAllAccommodationFromServer=()=>{
    axios.get(`${base_url}/accommodation`).then(                    // 
      (res)=>{
        console.log(res.data);    
        setAccommodation(res.data);
      },
      (error)=>{
        console.log(error);
      }
    );
  };

  //calling loading course function
useEffect(()=>{
    getAllAccommodationFromServer();
  },[]);
  

    useEffect(()=>{
       
        document.title="All-Accommodation";
    },[])
 
    const [accommodation,setAccommodation]=useState([
    ]);
    return (
     
      <div className="gradient">
       
        {
           accommodation.length >0 ? accommodation.map((item)=> <Accommodation key={item.id} accommodation={item}/>) : "No Course"
        }
      </div>
    
    );
  };

export default AllAccommodation;
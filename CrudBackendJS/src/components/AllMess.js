import React, { useState , useEffect} from "react";
import Mess from "./Mess";
import axios from 'axios';
import base_url from "../api/bootapi";


const AllMess = () => {

    // function to call server
const getAllMessFromServer=()=>{
    axios.get(`${base_url}/mess`).then(                    // 
      (res)=>{
        console.log(res.data);    
        setMess(res.data);
      },
      (error)=>{
        console.log(error);
      }
    );
  };

  //calling loading course function
useEffect(()=>{
    getAllMessFromServer();
  },[]);
  

    useEffect(()=>{
       
        document.title="All-Mess";
    },[])
 
    const [mess,setMess]=useState([
    ]);
    return (
     
      <div className="gradient">
       
        {
          mess.length >0 ? mess.map((item)=> <Mess key={item.id} mess={item}/>) : "No Course"
        }
      </div>
    
    );
  };

export default AllMess;
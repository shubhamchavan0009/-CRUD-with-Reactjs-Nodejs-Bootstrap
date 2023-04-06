import React, { useState , useEffect} from "react";
import Hospital from "./Hospital";
import axios from 'axios';
import base_url from "../api/bootapi";


const AllHospital = () => {

    // function to call server
const getAllHospitalFromServer=()=>{
    axios.get(`${base_url}/hospitals`).then(                    // 
      (res)=>{
        console.log(res.data);    
        setHospitals(res.data);
      },
      (error)=>{
        console.log(error);
      }
    );
  };

  //calling loading course function
useEffect(()=>{
    getAllHospitalFromServer();
  },[]);
  

    useEffect(()=>{
       
        document.title="All-Hospitals";
    },[])
 
    const [hospitals,setHospitals]=useState([
    ]);
    return (
     
      <div className="gradient">
       
        {
           hospitals.length >0 ? hospitals.map((item)=> <Hospital key={item.id} hospitals={item}/>) : "No Course"
        }
      </div>
    
    );
  };

export default AllHospital;
import React from "react";
import GadgetShop from "./GadgetShop";
import base_url from "../api/bootapi";
import axios from "axios";
import { useEffect,useState } from "react";

const AllGadgetShop=()=>{

// function to call server
const getAllGadgetShopFromServer=()=>{

    axios.get(`${base_url}/gadgetShop`).then(                    
      (res)=>{
        console.log(res.data);    
        setgadgetShop(res.data);
      },
      (error)=>{
        console.log(error);
      }
    );
  };

  //calling loading course function
useEffect(()=>{
    getAllGadgetShopFromServer();
  },[]);
  

    useEffect(()=>{
       
        document.title="All-GadgetShop";
    },[])
 
    const [gadgetShop,setgadgetShop]=useState([
    ]);
    return (
     
      <div className="gradient">
       
        {
           gadgetShop.length >0 ? gadgetShop.map((item)=> <GadgetShop key={item.id} gadgetShop={item}/>) : "No Course"
        }
      </div>
    
    );

}

export default AllGadgetShop;
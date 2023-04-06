import React from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";


const GadgetShop=()=>{

    useEffect(()=>{
        document.title="Add-GadgetShop";

    },[])

    // form handler function
    const handleForm = (e)=>{
        console.log(gadgetshop);
        postDatatoServer(gadgetshop);
        e.preventDefault();
    };

    // function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/gadgetShop`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            });
    };

    const [gadgetshop, setgadgetshop] = useState('');

    return(
          <section className="gradient" style={{marginTop:"-50px"}}>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleForm}>
                    
                        <div className="inputbox">
                        <label>GadgetShop Id</label>
                        <input type="text" 
                                //placeholder="Enter id" 
                                name="gadgetshopId" id="gadgetshopId" 
                                onChange={(e)=>{
                                    setgadgetshop({...gadgetshop, id: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>GadgetShop Name</label>
                        <input type="text" 
                                //placeholder="Enter course" 
                                name="sName" id="sName" 
                                onChange={(e)=>{
                                    setgadgetshop({...gadgetshop, sName: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>GadgetShop Address</label>
                        <input type="textarea" 
                                //placeholder="Enter course description" 
                                name="sAddress" id="sAddress" 
                                onChange={(e)=>{
                                    setgadgetshop({...gadgetshop, sAddress: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>GadgetShop Contact</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="sContactNumber" id="sContactNumber" 
                                onChange={(e)=>{
                                    setgadgetshop({...gadgetshop, sContact: e.target.value});
                                }}/> 
                    </div>
                  
                    <div>
                    <Button color="sucess" type="submit" onClick={postDatatoServer}>Add </Button>
                          <Button color="sucess" type="reset"
                                  onClick={(e)=>{
                                    setgadgetshop({e});
                                  }}>Clear</Button>
                    </div>
                    
                    </form>
                </div>
            </div>
        </section>
    )

}
export default GadgetShop;
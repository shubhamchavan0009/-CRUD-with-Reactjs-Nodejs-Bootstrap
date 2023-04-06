import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";

// css
import "../css/course/AddCourse.css";

const AddMess = () =>{

    useEffect(()=>{
        document.title="Add-Mess";

    },[])

    // form handler function
    const handleForm = (e)=>{
        console.log(mess);
        postDatatoServer(mess);
        e.preventDefault();
    };

    // function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/mess`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            });
    };

    const [mess, setMess] = useState('');

    return(
          <section className="gradient" style={{marginTop:"-50px",padding:"100px"}}>
            <div className="form-box" style={{height:"600px"}}>
                <div className="form-value">
                    <form onSubmit={handleForm}>
                    
                        <div className="inputbox">
                        <label>Mess Id</label>
                        <input type="text" 
                                //placeholder="Enter id" 
                                name="messId" id="messlId" 
                                onChange={(e)=>{
                                    setMess({...mess, id: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Mess Name</label>
                        <input type="text" 
                                //placeholder="Enter course" 
                                name="mName" id="mName" 
                                onChange={(e)=>{
                                    setMess({...mess, mName: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Mess Owner</label>
                        <input type="textarea" 
                                //placeholder="Enter course description" 
                                name="mOwner" id="mOwner" 
                                onChange={(e)=>{
                                    setMess({...mess, mOwner: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Mess Address</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="mAddress" id="mAddress" 
                                onChange={(e)=>{
                                    setMess({...mess, mAddress: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Mess Contact</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="mContact" id="mContact" 
                                onChange={(e)=>{
                                    setMess({...mess, mContact: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Mess Fees</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="mFees" id="mFees" 
                                onChange={(e)=>{
                                    setMess({...mess, mFees: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Mess Rating</label>
                        <input type="number" 
                                //placeholder="Enter course description" 
                                name="mRating" id="mRating" 
                                onChange={(e)=>{
                                    setMess({...mess, mRating: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Mess Type</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="mType" id="mType" 
                                onChange={(e)=>{
                                    setMess({...mess, mType: e.target.value});
                                }}/> 
                    </div>
                    
                    <div>
                    <Button color="sucess" type="submit" onClick={postDatatoServer}>Add Mess</Button>
                          <Button color="sucess" type="reset"
                                  onClick={(e)=>{
                                  setMess({e});
                                  }}>Clear</Button>
                    </div>
                    
                    </form>
                </div>
            </div>
        </section>
    )
}
export default AddMess;













 
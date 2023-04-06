import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";

// css
import "../css/course/AddCourse.css";

const AddAccommodation = () =>{

    useEffect(()=>{
        document.title="Add-Accommodation";

    },[])

    // form handler function
    const handleForm = (e)=>{
        console.log(accommodation);
        postDatatoServer(accommodation);
        e.preventDefault();
    };

    // function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/accommodation`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            });
    };

    const [accommodation, setAccommodation] = useState('');

    return(
          <section className="gradient" style={{marginTop:"-50px", padding:"100px"}}>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleForm}>
                    
                        <div className="inputbox">
                        <label>Accommodation Id</label>
                        <input type="text" 
                                //placeholder="Enter id" 
                                name="accommodationId" id="accommodationId" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, id: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Accommodation Name</label>
                        <input type="text" 
                                //placeholder="Enter course" 
                                name="aName" id="aName" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, aName: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Accommodation Owner</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="aOwner" id="aOwner" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, aOwner: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Accommodation Address</label>
                        <input type="textarea" 
                                //placeholder="Enter course description" 
                                name="aAddress" id="aAddress" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, aAddress: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Accommodation Contact</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="aContact" id="aContact" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, aContact: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Accommodation Rent</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="aRent" id="aRent" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, aRent: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Accommodation Rating</label>
                        <input type="number" 
                                //placeholder="Enter course description" 
                                name="aRating" id="aRating" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, aRating: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Accommodation Type</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="aType" id="aType" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, aType: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Accommodation OtherFacilities</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="otherFacilities" id="otherFacilities" 
                                onChange={(e)=>{
                                    setAccommodation({...accommodation, otherFacilities: e.target.value});
                                }}/> 
                    </div>
                    
                    <div>
                    <Button color="sucess" type="submit" onClick={postDatatoServer}>Add </Button>
                          <Button color="sucess" type="reset"
                                  onClick={(e)=>{
                                    setAccommodation({e});
                                  }}>Clear</Button>
                    </div>
                    
                    </form>
                </div>
            </div>
        </section>
    )
}
export default AddAccommodation;













 
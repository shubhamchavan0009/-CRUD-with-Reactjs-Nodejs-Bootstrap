import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";

// css
import "../css/course/AddCourse.css";

const AddHospitals = () =>{

    useEffect(()=>{
        document.title="Add-hospitals";

    },[])

    // form handler function
    const handleForm = (e)=>{
        console.log(hospitals);
        postDatatoServer(hospitals);
        e.preventDefault();
    };

    // function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/hospitals`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            });
    };

    const [hospitals, setHospitals] = useState('');

    return(
          <section className="gradient" style={{marginTop:"-50px"}}>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleForm}>
                    
                        <div className="inputbox">
                        <label>Hospital Id</label>
                        <input type="text" 
                                //placeholder="Enter id" 
                                name="hospitalId" id="hospitalId" 
                                onChange={(e)=>{
                                    setHospitals({...hospitals, id: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Hospital Name</label>
                        <input type="text" 
                                //placeholder="Enter course" 
                                name="hName" id="hName" 
                                onChange={(e)=>{
                                    setHospitals({...hospitals, hName: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Hospital Address</label>
                        <input type="textarea" 
                                //placeholder="Enter course description" 
                                name="hAddress" id="hAddress" 
                                onChange={(e)=>{
                                    setHospitals({...hospitals, hAddress: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Hospital Contact</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="hContactNumber" id="hContactNumber" 
                                onChange={(e)=>{
                                    setHospitals({...hospitals, hContactNumber: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Hospital Speciality</label>
                        <input type="text" 
                                //placeholder="Enter course description" 
                                name="hSpeciality" id="hSpeciality" 
                                onChange={(e)=>{
                                    setHospitals({...hospitals, hSpeciality: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Hospital Rating</label>
                        <input type="number" 
                                //placeholder="Enter course description" 
                                name="hRating" id="hRating" 
                                onChange={(e)=>{
                                setHospitals({...hospitals, hRating: e.target.value});
                                }}/> 
                    </div>
                    
                    <div>
                    <Button color="sucess" type="submit" onClick={postDatatoServer}>Add </Button>
                          <Button color="sucess" type="reset"
                                  onClick={(e)=>{
                                  setHospitals({e});
                                  }}>Clear</Button>
                    </div>
                    
                    </form>
                </div>
            </div>
        </section>
    )
}
export default AddHospitals;













 
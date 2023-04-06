import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { signUp } from "../services/UserService";
import base_url from "../api/bootapi";

const SignUp=() => {

    // function to post data on server
    const postUserDatatoServer=(data)=>{
        axios.post(`${base_url}/register`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            });
    };

    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        description:'',

    });

    useEffect(()=>{
        console.log(data);
    },[data]);



    const handleChange=(event,property)=>{
        
       setData({...data, [property]:event.target.value});
    }

    const submtForm=(event) =>{
        event.preventDefault()
        console.log(data);

        // call server api for calling data
        SignUp(data).then((resp)=> {
            console.log(resp);
            console.log("sucess log");
        }).catch((error)=>{
            console.log(error);
            console.log("error log");
        });
    };


  return (
    <section className="gradient" style={{marginTop:"-50px"}}>
            <div className="form-box" style={{padding:'50px'}}>
                <div className="form-value">
                    <form onSubmit={submtForm}>
                    
                        <div className="inputbox">
                        <label for="name">Enter Name</label>
                        <input type="text" 
                                //placeholder="Enter id" 
                                name="username" id="username" 
                                onChange={(e)=>handleChange(e, 'name')}
                               /> 
                    </div>
                    <div className="inputbox">
                        <label for="email">Enter Email</label>
                        <input type="email" 
                                //placeholder="Enter id" 
                                name="email" id="email" 
                                onChange={(e)=>handleChange(e, 'email')}
                               /> 
                    </div>
                    <div className="inputbox">
                        <label for="password">Password</label>
                        <input type="password" 
                                //placeholder="Enter course" 
                                name="pass" id="pass" 
                                onChange={(e)=>handleChange(e, 'password')}
                               /> 
                    </div>
                    {/* <div className="inputbox">
                        <label for="description">Description</label>
                        <input type="textarea" 
                                //placeholder="Enter course description" 
                                name="description" id="description" 
                                onChange={(e)=>handleChange(e, 'description')}
                               /> 
                               value={data.description}
                    </div> */}
                  
                    <div>
                    <Button color="sucess" type="submit"  onClick={postUserDatatoServer} >Register</Button>
                          <Button color="sucess" type="reset"
                                  >Reset</Button>
                    </div>
                    
                    </form>
                </div>
            </div>
        </section>
  );
}

export default SignUp;
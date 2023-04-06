
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";

const Login =() =>{

return (
     <section className="gradient" style={{marginTop:"-50px"}}>
            <div className="form-box" style={{padding:"50px"}}>
                <div className="form-value">
                    <form >
                    
                        <div className="inputbox">
                        <label>UserName</label>
                        <input type="text" 
                                //placeholder="Enter id" 
                                name="username" id="username" 
                               /> 
                    </div>
                    <div className="inputbox">
                        <label>Password</label>
                        <input type="password" 
                                //placeholder="Enter course" 
                                name="pass" id="pass" 
                               /> 
                    </div>
                    {/* <div className="inputbox">
                        <label>Course Description</label>
                        <input type="textarea" 
                                //placeholder="Enter course description" 
                                name="description" id="description" 
                               /> 
                    </div> */}
                  
                    <div>
                    <Button color="sucess" type="submit" >Login</Button>
                          <Button color="sucess" type="reset"
                                  >Reset</Button>
                    </div>
                    
                    </form>
                </div>
            </div>
        </section>
);
}
export default Login;




// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import { Link } from 'react-router-dom';
// import '../css/course/login_component.css';

// const Login=()=> {
  
//     return ( 
//       <div className='container'>
//         <div className='collapse navbar-collapse'> 
//       <form>
//         <h3>Log In</h3>

//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//         <div className='div_forgotpass'>
//                <div className='div_forgotpass_left'>
//                     <b><p className="forgot-password text-left">
//                     To Register  <Link className="nav-link" aria-current="page" to={'/sign-up'}><u>sign up</u></Link>
//                     </p> </b>                
//                 </div>                
//         </div>
//       </form>
//       </div>
//       </div> 
//     );
  
// }
// export default Login;
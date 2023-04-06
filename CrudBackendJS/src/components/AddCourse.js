import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import base_url from "../api/bootapi";


// css
import "../css/course/AddCourse.css";

const AddCourse = () =>{

    useEffect(()=>{
        document.title="Add-courses";

    },[])

    // form handler function
    const handleForm = (e)=>{
        console.log(course);
        console.log(immage);
        postDatatoServer(course);
        e.preventDefault();
    };

    // function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            });

            let formData= new FormData();
            formData.append("immage",immage);
            return axios.post(`${base_url}/courses/${data.id}`,formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
    
            }).then((response)=>response.data);
    };

    const [course, setCourse] = useState('');

    const [immage, setImmage] = useState('');



    // function to handle image

    //  const uploadPostImage=(immage,id)=>{
    //     let formData= new FormData();
    //     formData.append("immage",immage);
    //     return axios.post(`${base_url}/courses/${id}`,formData,{
    //         headers:{
    //             'Content-Type':'multipart/form-data'
    //         }

    //     }).then((response)=>response.data);
    // };

    // const handleFileChange = (event) => {
    //     console.log(event.target.files[0]);
    //     setImmage(event.target.files[0]);
    // }

   
    return(
          <section className="gradient" style={{marginTop:"-50px"}}> 
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleForm}>
                    
                        <div className="inputbox">
                        <label>Course Id</label>
                        <input type="text" 
                                //placeholder="Enter id" 
                                name="userId" id="userId" 
                                onChange={(e)=>{
                                setCourse({...course, id: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Course Title</label>
                        <input type="text" 
                                //placeholder="Enter course" 
                                name="title" id="title" 
                                onChange={(e)=>{
                                setCourse({...course, title: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Course Description</label>
                        <input type="textarea" 
                                //placeholder="Enter course description" 
                                name="description" id="description" 
                                onChange={(e)=>{
                                setCourse({...course, description: e.target.value});
                                }}/> 
                    </div>
                    <div className="inputbox">
                        <label>Course image</label>
                        <input type="file" 
                                //placeholder="Enter course description" 
                                name="immage" id="immage" accept="immage/*"
                                onChange={(e)=>{                                          //handleFileChange
                                    setImmage({...immage, immage: e.target.files[0]});
                                    }}/> 
                    </div>
                    <div>
                    <Button color="sucess" type="submit" onClick={postDatatoServer}>Add Course</Button>
                    {/* <Button color="sucess" type="submit" onClick={uploadPostImage}>upload Image</Button> */}
                          <Button color="sucess" type="reset"
                                  onClick={(e)=>{
                                  setCourse({e});
                                  }}>Clear</Button>
                    </div>
                    
                    </form>
                </div>
            </div>
        </section>
    )
}
export default AddCourse;













 //<Fragment id="fragment">
        // <section>
        
        //    <Form onSubmit={handleForm} className="form-box">
        //     <FormGroup>
        //         <label>Course Id</label>
        //         <input type="text" 
        //         placeholder="Enter id" 
        //         name="userId" id="userId" 
        //         onChange={(e)=>{
        //         setCourse({...course, id: e.target.value});
        //         }}/>
        //     </FormGroup>
            
        //     <FormGroup>
        //         <label>Course Title</label>
        //         <input type="text"
        //          placeholder="Enter title"
        //          name="title" id="title"
        //          onChange={(e)=>{
        //          setCourse({...course, title: e.target.value});
        //          }}/>
        //     </FormGroup>
            
        //     <FormGroup>
        //         <label>Course Title</label>
        //         <input type="textarea"
        //          placeholder="Enter title" 
        //          id="description"
        //          onChange={(e)=>{
        //          setCourse({...course, description: e.target.value});
        //          }}/>
        //     </FormGroup>
        //     <Container>
        //         <Button color="sucess" type="submit">Add Course</Button>
        //         <Button color="sucess" type="reset"
        //         onClick={(e)=>{
        //             setCourse({});
        //         }}>Clear</Button>
        //     </Container>
        //    </Form>
        // </section>
        //</Fragment>
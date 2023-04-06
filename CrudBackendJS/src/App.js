import { useEffect } from 'react';
//import { Container, Row,Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import AddCourse from './components/AddCourse';
import AllCourses from './components/AllCourses';
import Course from './components/Course';
import Home from './components/Home';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import base_url from './api/bootapi';
import axios from 'axios';
import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Login from './Security/Login';
import SignUp from './Security/SignUp';
import AddHospitals from './components/AddHospitals';
import AllHospitals from './components/AllHospitals';
import AddMess from './components/AddMess';
import AllMess from './components/AllMess';
import AddAccommodation from './components/AddAccommodation';
import AllAccommodation from './components/AllAccommodation';
import 'bootstrap/dist/css/bootstrap.css';
import AboutUs from './components/AboutUs';
import AddGadgetShop from './components/AddGadgetShop';
import AllGadgetShop from './components/AllGadgetShop';



function App() {
  useEffect(()=>{
    document.title="Home";
},[]);

return (
  
       <Router>
         <Container style={{paddingLeft:"0px",paddingTop:"50px", paddingRight:"100",marginRight:"100",position:'relative'}}>
          <Row >
          <Col md={0}>
            <Menus/>
          </Col>
          <Col md={12}>
          <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/add-course" element={<AddCourse/>} exact/>
          
          <Route path="/view-course" element={<AllCourses/> } exact/> 


          <Route path="/hospitals" element={<AddHospitals/> } exact/> 
          <Route path="/view-hospitals" element={<AllHospitals/> } exact/> 
 
          <Route path="/mess" element={<AddMess/> } exact/> 
          <Route path="/view-mess" element={<AllMess/> } exact/> 
        
          <Route path="/accommodation" element={<AddAccommodation/> } exact/> 
          <Route path="/view-accommodation" element={<AllAccommodation/> } exact/> 

            <Route path="/login" element={<Login/> } exact/> 
          <Route path="/register" element={<SignUp/> } exact/>  
           
          <Route path="/aboutUs" element={<AboutUs/> } exact/>  

          <Route path="/gadgetShop" element={<AddGadgetShop/> } exact/>
          <Route path="/view-shop" element={<AllGadgetShop/> } exact/>

          </Routes>
          </Col>
          <div style={{backgroundColor:"yellowgreen",position:"relative"}}> <p style={{textAlign:"center", color:"white"}}> @copyRight</p></div>
         
        </Row>
      </Container>

       </Router>
      
 
  );
}

export default App;

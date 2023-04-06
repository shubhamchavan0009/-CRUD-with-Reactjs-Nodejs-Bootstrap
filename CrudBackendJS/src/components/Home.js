

import React from 'react'
//import "../css/course/AddCourse.css";
import AllCourses from './AllCourses';
import { Link } from 'react-router-dom';
import "../css/course/home.css";
import { Container,Row,Col } from 'react-bootstrap';

const Home = () => {

 
    return (
        <>
         
            
        <div className="gradient" style= {{backgroundImage : "-webkit-gradient()"}} >  
    
    {/* <div className="div_after_nav"> */}
      <Col>
      <br/><br/>
      <marquee><h3 style={{color:"white"}}><b>Hii Dear, Here is the solution which you are looking for to find Better amenities by directly contacting with owner (Broker free), which saves your money as well as efforts.</b> </h3></marquee>
     </Col>
     <Col>
<ul className="cards">
    <li>
      {/* <a href="#" classname="card"> */}
      <div className="homecard">
      {/* <Link to="/" id="navlink">Home</Link> */}
        <img src="images/courses.jpg" className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header"> 
            <div className="card__header-text">
              <h2 className="card__title"><Link to="/view-course" id="navlink1"> Courses</Link></h2>            
              
            </div>
          </div>
          <p className="card__description">Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT, Electronics and associated areas.</p>
        </div>
      {/* </a>       */}
      </div>
    </li>
    <li>
      {/* <a href="#" classname="card"> */}
      <div className="homecard">
      {/* <Link to="/view-course" id="navlink">View Courses</Link>  */}
        <img src="images/Institute.jpg" className="card__image" alt="" />
        <div className="card__overlay">        
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
            <div className="card__header-text">
              <h2 className="card__title"><a href='https://softpolynomials.com/' style={{textDecoration:"none"}}>Institute</a></h2>            
            </div>
          </div>
          <p className="card__description">Ckeck out all the premium institutes who offering DAC couse.Ckeck out all the premium institutes who offering DAC couse.
            Ckeck out all the premium institutes who offering DAC couse.</p>
        </div>
      {/* </a> */}
      </div>
    </li>
    <li>
      {/* <a href="#" classname="card"> */}
      <div className="homecard">
        <img src="images/hostelbulding.jpg" className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
            <div className="card__header-text">
              <h2 className="card__title"> <Link to="/view-accommodation" id="navlink1">Accommodation</Link> </h2>
            </div>          
          </div>
          <p className="card__description">Find broker free, transparent, well equiped residential facilities for both male and female candidate as well.</p>
        </div>
      {/* </a> */}
      </div>
    </li>      
      <li>
        {/* <a href="#" classname="card"> */}
        <div className="homecard">
        {/* <Link to="/view-mess" id="navlink">View Mess</Link> */}
          <img src="images/kitchen.jpg" className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                                  
              <div className="card__header-text">
                <h2 className="card__title"><Link to="/view-mess" id="navlink1">Mess/Canteen</Link></h2>          
              </div>
            </div>
            <p className="card__description">Find out the best canteen based on service, variety of food, quality of food and feedback-rating .</p>
          </div>
        {/* </a>       */}
        </div>
      </li>
      <li>     
        <div className="homecard">
          <img src="images/hospital-building.jpg" className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                                  
              <div className="card__header-text">
                <h2 className="card__title"><Link to="/view-hospitals" id="navlink1">View Hospitals</Link></h2>                            
              </div>
            </div>
            <p className="card__description">Students will get study material for their entire cdac Course </p>
          </div>
        </div>
      </li>
      <li>
        {/* <a href="#" classname="card"> */}
        <div className="homecard">
          <img src="images/books-avif.jpg" className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                                  
              <div className="card__header-text">
                <h2 className="card__title"><a href="https://drive.google.com/drive/folders/1ajNUZJmo55IAPgCPubWjlkgrP8ry_JPn?usp=sharing" style={{textDecoration:"none"}}>Study Material</a></h2>                            
              </div>
            </div>
            <p className="card__description">Students will get study material for their entire cdac Course </p>
          </div>
        {/* </a>       */}
        </div>
      </li>
      <li>
        {/* <a href="#" classname="card"> */}
        <div className="homecard">
          <img src="images/college-university-students-group.jpg" className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">              
              <div className="card__header-text">
                <h2 className="card__title">Student Community</h2>                           
              </div>
            </div>
            <p className="card__description">Here you can share your & receive ideas,problems,opinions of other students </p>
          </div>
        {/* </a>       */}
        </div>
      </li>
      <li>
        {/* <a href="#" classname="card"> */}
        <div className="homecard">
          <img src="images/about-us.jpg" className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
           <div className="card__header-text">
                <h2 className="card__title"><Link to="/aboutUs" id="navlink1">About Us</Link></h2>            
              </div>
            </div>
            <p className="card__description">details about Developers team</p>
          </div>
        {/* </a>       */}
        </div>
      </li>
  </ul>
  </Col>
</div> 

  
       </>
       
    );
  }

export default Home;









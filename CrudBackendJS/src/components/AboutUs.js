import React from "react";

import {
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardImgOverlay,
  Container,
  Form,
  Row,
  Table,
  CardTitle,
} from "reactstrap";
const AboutUs = () => {
  return (
    <body className="gradient">

      <Container style={{display:"inline-block"}}>
      <br/>
        <div className="fluid-container row" style={{ alignItems: "left" }}>
          {/* First Card */}
          <Card
            style={{
            //   backgroundColor: "transparent",
              color: "light",
              width: "15rem",
              height: "25rem",
              padding: "10px",
              margin: "10px",
            }}
          >
            <img alt="ab" src={("../images/hospital-building1.jpg")} ></img>

            <h5 className="mt-2">Ajinkya Wagh</h5>
            <CardText className="mb-2 text-muted">Business Partner</CardText>
            <CardText className="mb-2 text-muted">
              Phone: +91-8871579014
            </CardText>
            <CardText className="mb-2 text-muted">
              Email: shubhammawle@gmail.com
            </CardText>
          </Card>

          <Card
            style={{
                // backgroundColor: "transparent",
                color: "light",
                width: "15rem",
                height: "25rem",
                padding: "10px",
                margin: "10px",
            }}
          >
            <img src={("../images/hospital-building1.jpg")}></img>

            <h5 className="mt-2">Shubham Chavhan</h5>
            <CardText className="mb-2 text-muted">Business Partner</CardText>
            <CardText className="mb-2 text-muted">
              Phone: +91-9145609434
            </CardText>
            <CardText className="mb-2 text-muted">
              Email: chavanshubham308@gmail.com
            </CardText>
          </Card>

          <Card
            style={{
                // backgroundColor: "transparent",
                color: "light",
                width: "15rem",
                height: "25rem",
                padding: "10px",
                margin: "10px",
            }}
          >
            <img src={("../images/hospital-building1.jpg")}></img>

            <h5 className="mt-2">Jayesh Mhatre</h5>
            <CardText className="mb-2 text-muted">Business Partner</CardText>
            <CardText className="mb-2 text-muted">
              Phone: +91-9021790273
            </CardText>
            <CardText className="mb-2 text-muted">
              Email: jayeshmhatre1802@gmail.com
            </CardText>
          </Card>
          <Card
            style={{
                // backgroundColor: "transparent",
                color: "light",
                width: "15rem",
                height: "25rem",
                padding: "10px",
                margin: "10px",
            }}
          >
            <img src={("../images/hospital-building1.jpg")}></img>

            <h5 className="mt-2">Mayur Rane</h5>
            <CardText className="mb-2 text-muted">Business Partner</CardText>
            <CardText className="mb-2 text-muted">
              Phone: +91-9588425091
            </CardText>
            <CardText className="mb-2 text-muted">
              Email: mayurrane2107@gmail.com
            </CardText>
          </Card>

          <Card
            style={{
                // backgroundColor: "transparent",
                color: "light",
                width: "15rem",
                height: "25rem",
                padding: "10px",
                margin: "10px",
            }}
          >
            <img src={("../images/hospital-building1.jpg")}></img>

            <h5 className="mt-2">Shridhar kate</h5>
            <CardText className="mb-2 text-muted">Business Partner</CardText>
            <CardText className="mb-2 text-muted">
              Phone: +91-7744976383
            </CardText>
            <CardText className="mb-2 text-muted">
              Email: kateshri2022@gmail.com
            </CardText>
          </Card>
          <Card
            style={{
                // backgroundColor: "transparent",
                color: "light",
                width: "15rem",
                height: "25rem",
                padding: "10px",
                margin: "10px",
            }}
          >
            <img src={("../images/hospital-building1.jpg")}></img>

            <h5 className="mt-2">Yash Gogulwar</h5>
            <CardText className="mb-2 text-muted">Business Partner</CardText>
            <CardText className="mb-2 text-muted">
              Phone: +91-8805871310
            </CardText>
            <CardText className="mb-2 text-muted">
              Email: psuyash4@gmail.com
            </CardText>
          </Card>
        </div>
      </Container>
      </body>
     
    
  );
};
export default AboutUs;

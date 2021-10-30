import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FcComboChart,
  FcSalesPerformance,
  FcVoicePresentation,
} from "react-icons/fc";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="my-5">
        <h5 className="default-color fw-bold">Why TourX</h5>
        <h1 className="fw-bold">
          Why You Are Travel With <br /> Tourx
        </h1>
        <Container>
          <Row xs={1} md={3} sm={1} className="g-4 mt-4">
            <Col className="card">
              <Card>
                <div className="text-center">
                  <FcComboChart className="icon" />
                </div>
                <Card.Body>
                  <Card.Text>
                    <h5>2000+ Our worldwide guide</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="card">
              <Card>
                <div className="text-center">
                  <FcVoicePresentation className="icon" />
                </div>
                <Card.Body>
                  <Card.Text>
                    <h5>10+ year of travel experience</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="card">
              <Card>
                <div className="text-center">
                  <FcSalesPerformance className="icon" />
                </div>
                <Card.Body>
                  <Card.Text>
                    <h5>20% off our traveller happy</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="my-5">
        <h5 className="default-color fw-bold">Our Traveller Say</h5>
        <h1 className="fw-bold">
          What Oue Traveller Say <br /> About Us
        </h1>
        <Container className="my-5">
          <Row xs={1} md={3} sm={1} className="g-4">
            <Col>
              <Card className="card-de">
                <Card.Img
                  variant="top w-50 mx-auto"
                  src="https://i.ibb.co/WzCqnKL/reviewer-1-07859027.png"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Dina Jems</Card.Title>
                  <Card.Text>
                    <h6>Traveller</h6>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-de">
                <Card.Img
                  variant="top w-50 mx-auto rounded-circle"
                  src="https://i.ibb.co/26ZmSFm/reviewer-3-21d99f5c.png"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Dina Jems</Card.Title>
                  <Card.Text>
                    <h6>Traveller</h6>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-de">
                <Card.Img
                  variant="top w-50 mx-auto rounded-circle"
                  src="https://i.ibb.co/MsZ778X/reviewer-2-52e03342.png"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Dina Jems</Card.Title>
                  <Card.Text>
                    <h6>Traveller</h6>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

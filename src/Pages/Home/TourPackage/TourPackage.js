import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TourPackage = () => {
  const [packages, setPakages] = useState([]);

  useEffect(() => {
    fetch("https://shocking-web-80767.herokuapp.com/card")
      .then((res) => res.json())
      .then((data) => setPakages(data));
  }, []);

  return (
    <>
      {packages.length !== 0 ? (
        <div className="my-5">
          <div className="tour-title">
            <h5 className="default-color fw-bold">Choose Your Package</h5>
            <h1 className="fw-bold">
              Select Your Best Package <br /> For Your Travel
            </h1>
          </div>
          <div className="tour-card my-5">
            <Container>
              <Row xs={1} md={3} className="g-4">
                {packages.map((pack) => (
                  <Col>
                    <Card>
                      <Card.Img
                        style={{ height: "260px" }}
                        variant="top"
                        src={pack.img}
                      />
                      <Card.Body style={{ height: "260px" }}>
                        <Card.Title>{pack.name}</Card.Title>
                        <Card.Title>Population :{pack.population}</Card.Title>
                        <Card.Text>{pack.dec}</Card.Text>
                      </Card.Body>
                      <Link to={`/selected/${pack._id}`}>
                        <button className="btn mx-1 default-bg text-white border-0 rounded-pill mb-4">
                          Book Now
                        </button>
                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default TourPackage;

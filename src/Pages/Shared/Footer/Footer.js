import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelopeOpenText,
  FaFacebookF,
  FaInstagram,
  FaMailBulk,
  FaPhoneAlt,
  FaRoute,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Col className="mt-5">
            <img
              className="my-3"
              src="https://i.ibb.co/VYg906h/download-1.png"
              alt=""
            />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam culpa temporibus ea provident atque quae!
            </p>
            <h4 className="text-white fw-bold">Follow Us:</h4>
            <span>
              <FaFacebookF className="default-color fs-4 me-4" />
            </span>
            <span>
              <FaInstagram className="default-color fs-4 me-4" />
            </span>
            <span>
              <FaTwitter className="default-color fs-4 me-4" />
            </span>
            <span>
              <FaMailBulk className="default-color fs-4 " />
            </span>
          </Col>
          <Col className="text-center mt-5 pt-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <p>
              <FaPhoneAlt className="default-color" />
              <span className="text-white ms-2">+01852-1265122</span>
            </p>
            <p>
              <FaEnvelopeOpenText className="default-color" />
              <span className="text-white ms-2">support@example.com</span>
            </p>
            <p>
              <FaRoute className="default-color" />
              <span className="text-white ms-2">2752 Willison Street</span>
            </p>
          </Col>
          <Col className="text-center mt-5 pt-4">
            <h4 className="text-white mb-4">Support</h4>
            <ul class="text-white list-unstyled">
              <li class="">Contact Us</li>
              <li>About Us</li>
              <li class="">Destinations</li>
              <li class="">Our Blogs</li>
              <li class="">Package</li>
            </ul>
          </Col>
        </Row>
        <hr className="text-white" />
      </Container>
      <div className="d-flex justify-content-center align-items-center">
        <small className="text-white ">
          Copyright 2021 <small className="default-color fw-bold">TourX</small>{" "}
          | Design By{" "}
          <small className="default-color fw-bold">Parvez Ahmed</small>
        </small>
      </div>
    </div>
  );
};

export default Footer;

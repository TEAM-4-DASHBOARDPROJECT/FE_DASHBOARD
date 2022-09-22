import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const Greeting = ({ title, clickLogOut }) => {
  return (
    <div className="congreet">
      <Row>
        <Col md={{ span: 8, offset: 0 }} className="colgreet1">
          <div>
            <h1>Immerive Dashboard</h1>
            <h2>{title}</h2>
          </div>
        </Col>
        <Col md={{ span: 4, offset: 0 }}>
          <div className="hellogreet">
            <RiAccountPinBoxLine className="react-icons1" />
          </div>
          <FiLogOut className="react-icons2 hellogreet" onClick={clickLogOut} />
        </Col>
      </Row>
      <hr></hr>
    </div>
  );
};

export default Greeting;

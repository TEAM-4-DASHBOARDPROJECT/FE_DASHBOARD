import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Greeting = ({title}) => {
  return (
    <div className="congreet">
      <Row>
        <Col md={{ span: 8, offset: 0 }} className='colgreet1'>
          <div>
            <h1>Immerive Dashboard</h1>
            <h2>{title}</h2>
          </div>
        </Col>
        <Col md={{ span: 4, offset: 0 }}>
          <div className="hellogreet">
            Hello, <span className="name">Kamil</span>
          </div>
        </Col>
      </Row>
      <hr></hr>
    </div>
  );
};

export default Greeting;

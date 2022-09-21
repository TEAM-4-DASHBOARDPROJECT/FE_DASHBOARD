import React from 'react';
import Sidebar from "../component/sidebar";
import Greeting from '../component/greeting';
import Chart from '../component/chart';
import { Container, Row, Col } from 'react-bootstrap';

const dashboard = () => {
  return (
    <div className='condash'>
      <Row>
        <Col md={{ span: 4, offset: 0 }} className="col1">
          <Sidebar />
        </Col>
        <Col md={{ span: 8, offset: 0 }} className="col2">
            <Greeting />
          <div className="div0">
            <div className="div1">
              <h1>52</h1>
              <h5>Mentee Active</h5>
            </div>
            <div className="div2">
              <h1>52</h1>
              <h5>Mentee Placement</h5>
            </div>
            <div className="div3">
              <h1>52</h1>
              <h5>Mentee Feedback</h5>
            </div>
            <div className="div4">
              <Chart />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default dashboard;

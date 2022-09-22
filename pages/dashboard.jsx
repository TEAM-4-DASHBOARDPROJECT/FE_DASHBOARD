import React from "react";
import Sidebar from "../component/sidebar";
import Greeting from "../component/greeting";
import Chart from "../component/chart";
import { Container, Row, Col } from "react-bootstrap";
import Router from "next/router";
import { deleteCookie } from "cookies-next";


const dashboard = () => {
  const logOut = () => {
    deleteCookie("Token");
    Router.push({
      pathname: "/",
    });
  };

  return (
    <div className="condash">
      <Container className="condash1">
        <Row>
          <Col lg={{ span: 4, offset: 0 }} className="col1">
            <Sidebar />
          </Col>
          <Col lg={{ span: 8, offset: 5 }} className="col2">
            <div className="colr2">
              <Greeting title="Dashboard" clickLogOut={() => logOut()} />
            </div>
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
      </Container>
    </div>
  );
};

export default dashboard;

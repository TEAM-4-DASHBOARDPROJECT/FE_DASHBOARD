import React from "react";
import Greeting from "../component/greeting";
import Sidebar from "../component/sidebar";
import { Form, Button, Row, Col, InputGroup, Table, Pagination } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import { AiFillWallet, AiFillEdit, AiFillDelete } from "react-icons/ai";

const menteelist = () => {
  const addNewMentee = () => {
    Router.push({
      pathname: "/addnewmentee",
    });
  };

  const editMentee = () => {
    Router.push({
      pathname: "/editmentee",
    });
  };

  const menteeLog = () => {
    Router.push({
      pathname: "/menteelog",
    });
  };

  const logOut = () => {
    Router.push({
      pathname: '/',
    });
  };

  return (
    <div className="condash">
      <Row>
        <Col lg={{ span: 4, offset: 0 }} className="col1">
          <Sidebar />
        </Col>
        <Col lg={{ span: 8, offset: 0 }} className="col2">
          <div className="colr2">
            <Greeting title="Mentee" clickLogOut={() => logOut()} />
          </div>
          <div className="searchbutton">
            <InputGroup>
              <Form.Control placeholder="Search" aria-label="Recipient's username with two button addons" />
              <Button variant="outline-warning">Search</Button>
              <button onClick={() => addNewMentee()} className="buttonlist1">
                Add New
              </button>
            </InputGroup>
          </div>
          <div className="d-flex flex-wrap" style={{ marginTop: "70px", justifyContent: "flex-end" }}>
            <div style={{ marginTop: "38px" }}>
              <button className="buttonlist2">Export</button>
            </div>
            <Form className="d-flex flex-wrap" style={{ margin: "0px 15px" }}>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col>
                    <Form.Label column sm="2">
                      Class
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>All Class</option>
                      <option value="1">BE 11</option>
                      <option value="2">FE 8</option>
                      <option value="3">FE 7</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col>
                    <Form.Label column sm="2">
                      Status
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>All Status</option>
                      <option value="1">Active</option>
                      <option value="2">Placement</option>
                      <option value="3">Graduate</option>
                      <option value="4">Eliminate</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col>
                    <Form.Label column sm="2">
                      Category
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>All Category</option>
                      <option value="1">Informatics</option>
                      <option value="2">Non-Informatics</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
            </Form>
            <div style={{ marginTop: "38px" }}>
              <button className="buttonlist3">Filter</button>
            </div>
          </div>
          <div className="tableclass" style={{ marginTop: "40px" }}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th>Genre</th>
                  <th>Detail</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Yoga</td>
                  <td>FE 8</td>
                  <td>Active</td>
                  <td>IT</td>
                  <td>Male</td>
                  <td onClick={() => menteeLog()}>
                    <AiFillWallet />
                  </td>
                  <td onClick={() => editMentee()}>
                    <AiFillEdit />
                  </td>
                  <td>
                    <AiFillDelete />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div style={{ float: "right" }}>
            <Pagination>
              <Pagination.Item>{"Prev"}</Pagination.Item>
              <Pagination.Item>{"Next"}</Pagination.Item>
            </Pagination>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default menteelist;

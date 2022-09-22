import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Greeting from '../component/greeting';
import { Table, Modal, Button, Container, Form, Row, Col, InputGroup, Pagination } from "react-bootstrap";
import Router from 'next/router';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function AddNew(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New Class</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Name</label>
              <input placeholder="Nama"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Total Mentee</label>
              <input placeholder="Total Mente" type="number"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Start Date</label>
              <input type="date"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">End Date</label>
              <input type="date"></input>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ background: "#F07539", border: "#f7731c" }} onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Edit(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Class</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Name</label>
              <input placeholder="Nama"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Total Mentee</label>
              <input placeholder="Total Mente" type="number"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Start Date</label>
              <input type="date"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">End Date</label>
              <input type="date"></input>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ background: "#F07539", border: "#f7731c" }} onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Class = () => {
  const [modalShowNew, setModalNew] = useState(false);
  const [modalShowEdit, setModalEdit] = useState(false);

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
          <div className="container">
          <Greeting title="Class" clickLogOut={() => logOut()} />
            <div>
              <div className="searchbutton">
              <InputGroup>
                <Form.Control placeholder="Search" aria-label="Recipient's username with two button addons" />
                <Button variant="outline-warning">Search</Button>
                <button onClick={() => setModalNew(true)} className="buttonlist1">
                  Add New
                </button>
                <AddNew show={modalShowNew} onHide={() => setModalNew(false)} />
              </InputGroup>
              </div>
            </div>
            <div className="tableclass">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Class Name</th>
                    <th>Total Mentee</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Front End Batch 7</td>
                    <td>21</td>
                    <td>1 Januari 2022</td>
                    <td>1 April 2022</td>
                    <td>
                      <AiFillEdit onClick={() => setModalEdit(true)} />
                      <Edit show={modalShowEdit} onHide={() => setModalEdit(false)} />
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
                <Pagination.Prev>{"Prev"}</Pagination.Prev>
                <Pagination.Next>{"Next"}</Pagination.Next>
              </Pagination>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Class;

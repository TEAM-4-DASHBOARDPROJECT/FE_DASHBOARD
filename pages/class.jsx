import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Greeting from '../component/greeting';
import { Table, Modal, Button, Container, Row, Col } from "react-bootstrap";
import Router from 'next/router';

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
              <label className="me-5 mb-5">Tanggal Mulai</label>
              <input type="date"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Tanggal Selesai</label>
              <input type="date"></input>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>save</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Edit(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Mentee</Modal.Title>
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
              <label className="me-5 mb-5">Tanggal Mulai</label>
              <input type="date"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Tanggal Selesai</label>
              <input type="date"></input>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>save</Button>
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
    <div className="main-container d-flex">
      <Sidebar />
      <div className="container">
      <Greeting title="Class" clickLogOut={() => logOut()} />
        <div>
          <div className="searchbutton">
            <input type="search"></input>
            <button>Search</button>
            <button onClick={() => setModalNew(true)}>Add New</button>
            <AddNew show={modalShowNew} onHide={() => setModalNew(false)} />
          </div>
        </div>
        <div className="tableclass">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Total Mentee</th>
                <th>Tanggal Mulai</th>
                <th>Tanggal Selesai</th>
                <th>Edit</th>
                <th>Delete</th>
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
                  <button onClick={() => setModalEdit(true)}>Edit</button>
                  <Edit show={modalShowEdit} onHide={() => setModalEdit(false)} />
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Class;

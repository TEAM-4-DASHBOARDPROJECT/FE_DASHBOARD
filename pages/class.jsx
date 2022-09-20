import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import { Table, Modal, Button, Container, Row, Col } from "react-bootstrap";

function AddNew(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New Mentee</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5">Name</label>
              <input></input>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <label className="me-1">Total Mentee</label>
              <input></input>
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
              <input></input>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <label className="me-1">Total Mentee</label>
              <input></input>
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
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="main-container d-flex">
      <Sidebar />
      <div className="container">
        <div className="menteelog d-flex justify-content-around">
          <div>
            <h1>Immersive Dashboard</h1>
            <h2>Class List</h2>
          </div>

          <div className="hello">
            Hello, <span className="name">Kamil</span>
          </div>
        </div>
        <div>
          <div className="searchbutton">
            <input type="search"></input>
            <button>Search</button>
            <button onClick={() => setModalShow(true)}>Add New</button>
            <AddNew show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
        <div className="tableclass">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Total Mentee</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Front End Batch 7</td>
                <td>21</td>
                <td>
                  <button onClick={() => setModalShow(true)}>Edit</button>
                  <Edit show={modalShow} onHide={() => setModalShow(false)} />
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

import React, { useState } from "react";
import Greeting from '../component/greeting';
import Sidebar from "../component/sidebar";
import { Form, Modal, Button, Container, Row, Col, Table } from "react-bootstrap";

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
              <label className="me-5 mb-5">Full Name</label>
              <input placeholder="Nama"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Form.Select aria-label="Default select example">
                <option>Status</option>
                <option value="1">Active</option>
                <option value="2">Repeat</option>
                <option value="3">Dropout</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <label className="me-5 mb-5 mt-5">Class</label>
              <input placeholder="Class"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Form.Select aria-label="Default select example">
                <option>Category</option>
                <option value="1">Informatic</option>
                <option value="2">Non-Informatic</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} md={12}>
              <Form.Select aria-label="Default select example">
                <option>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
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

const menteelist = () => {
  const [modalShowNew, setModalNew] = useState(false);
  return (
    <div className="main-container d-flex">
      <Sidebar />

      <div className="container">
      <Greeting title="Mentee List" />
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
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default menteelist;

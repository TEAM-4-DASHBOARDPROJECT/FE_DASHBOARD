import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Greeting from '../component/greeting';
import { Row, Col, Modal, Container, Button, Form } from "react-bootstrap";

function AddNewLog(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New Log</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Form.Select aria-label="Default select example">
                <option>Status</option>
                <option value="1">Active</option>
                <option value="2">Repeat</option>
                <option value="3">Dropout</option>
              </Form.Select>
            </Col>
            <Col xs={6} md={4}>
              Date:
              <input type="date"></input>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <p>Feedback</p>
              <input className="w-100 h-100" type="text-field"></input>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mt-4" onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
const Menteelog = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="main-container d-flex">
      <Sidebar />
      <div className="container">
      <Greeting title="Mentee Log" />

        <div className="menteelog2 mt-4 d-flex justify-content-around">
          <div>
            <h1 className="fs-3">Rachman Kamil</h1>
            <h2 className="fs-6">Quality Enggineer Batch 8</h2>
            <h2 className="fs-6">IPA</h2>
            <h2 className="fs-6">SMA N 29 Palembang</h2>
          </div>

          <div className="mt-3">
            <h2 className="fs-6">Phone : 08218341294</h2>
            <h2 className="fs-6">Telegram:@Rachman</h2>
            <h2 className="fs-6">Discord:@Rachman</h2>
            <h2 className="fs-6">Email:Rachman@gmail.com</h2>
          </div>
        </div>
        <button onClick={() => setModalShow(true)} className="button1">
          Add New Log
        </button>
        <AddNewLog show={modalShow} onHide={() => setModalShow(false)} />
        <div className="cardlog">
          <Row>
            <Col xs={2}>
              <div>
                <p>22 Oktober 2022</p>
                <p>End Of Section</p>
              </div>
            </Col>
            <Col>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, et eos, perferendis similique porro commodi facere dolor placeat aliquid tenetur dolores sapiente eius rem dolorum recusandae animi neque consectetur. Iure?
              </div>
              <div className="mt-4 fw-bold ">Change Status : Continue To Session 2</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Menteelog;

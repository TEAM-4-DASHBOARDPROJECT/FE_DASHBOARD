import React, { useState } from 'react';
import Sidebar from '../component/sidebar';
import Greeting from '../component/greeting';
import { Row, Col, Modal, Container, Button, Form } from 'react-bootstrap';
import { AiOutlineFileSearch } from 'react-icons/ai';
import Router from 'next/router';

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
          <Row>
            <Col xs={12} md={12} className="my-5">
              <input type="file"></input>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mt-4" style={{ background: "#F07539", border: "#f7731c" }} onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
const Menteelog = () => {
  const [modalShow, setModalShow] = useState(false);

  const logOut = () => {
    Router.push({
      pathname: '/',
    });
  };

  return (
    <div>
      <Row>
        <Col lg={{ span: 4, offset: 0 }} className="col1">
          <Sidebar />
        </Col>
        <Col lg={{ span: 8, offset: 0 }} className="col2">
          <div className="colr2">
            <Greeting title="Mentee Log" clickLogOut={() => logOut()} />
          </div>
          <div className="colr">
            <div>
              <Row>
                <Col sm={12} md={6}>
                  <h1 className="fs-3 pt-0">Rachman Kamil</h1>
                  <h2 className="fs-6">Quality Enggineer Batch 8</h2>
                  <h2 className="fs-6">IPA</h2>
                  <h2 className="fs-6">SMA N 29 Palembang</h2>
                </Col>
                <Col sm={12} md={6}>
                  <h2 className="fs-6">Phone : 08218341294</h2>
                  <h2 className="fs-6">Telegram:@Rachman</h2>
                  <h2 className="fs-6">Discord:@Rachman</h2>
                  <h2 className="fs-6">Email:Rachman@gmail.com</h2>
                </Col>
              </Row>
            </div>
            <div>
              <button onClick={() => setModalShow(true)} className="button1">
                Add New Log
              </button>
              <AddNewLog show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            <div className="log">
              <Row>
                <Col xs={3}>
                  <div>
                    <p>22 Oktober 2022</p>
                    <p>End Of Section</p>
                    <p className="fs-1">
                      <AiOutlineFileSearch />
                    </p>
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
        </Col>
      </Row>
    </div>
  );
};

export default Menteelog;

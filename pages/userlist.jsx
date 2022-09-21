import React, { useState } from "react";
import { Button, InputGroup, Form, Modal, Container, Row, Col, Table } from "react-bootstrap";
import Sidebar from "../component/sidebar";

function AddNewUser(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Col><Form.Label>Full Name</Form.Label></Col>
              <Col><Form.Control type="text" placeholder="Full Name" /></Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Col><Form.Label>Email</Form.Label></Col>
              <Col><Form.Control type="email" placeholder="Enter email" /></Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Col><Form.Label>Password</Form.Label></Col>
              <Col><Form.Control type="password" placeholder="Password" /></Col>
            </Form.Group>
          </Row>
          <div style={{ display:"flex", flexWrap:"wrap"}}>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col><Form.Label>Team</Form.Label></Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>Team</option>
                      <option value="1">Academic</option>
                      <option value="2">Admisson</option>
                      <option value="3">People</option>
                      <option value="4">Placement</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col><Form.Label>Role</Form.Label></Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>Role</option>
                      <option value="1">Admin</option>
                      <option value="2">Default</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
          </div>
          <Row>
              <Form.Group className="mb-3" controlId="formPlaintext">
                <Col><Form.Label>Status</Form.Label></Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Status</option>
                    <option value="1">Active</option>
                    <option value="2">Non-Active</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mt-4" onClick={props.onHide}>
          Cancel
        </Button>
        <Button className="mt-4" onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function EditNewUser(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit New User</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Col><Form.Label>Full Name</Form.Label></Col>
              <Col><Form.Control type="text" placeholder="Full Name" /></Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Col><Form.Label>Email</Form.Label></Col>
              <Col><Form.Control type="email" placeholder="Enter email" /></Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Col><Form.Label>Password</Form.Label></Col>
              <Col><Form.Control type="password" placeholder="Password" /></Col>
            </Form.Group>
          </Row>
          <div style={{ display:"flex", flexWrap:"wrap"}}>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col><Form.Label>Team</Form.Label></Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>Team</option>
                      <option value="1">Academic</option>
                      <option value="2">Admisson</option>
                      <option value="3">People</option>
                      <option value="4">Placement</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col><Form.Label>Role</Form.Label></Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>Role</option>
                      <option value="1">Admin</option>
                      <option value="2">Default</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
          </div>
          <Row>
              <Form.Group className="mb-3" controlId="formPlaintext">
                <Col><Form.Label>Status</Form.Label></Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Status</option>
                    <option value="1">Active</option>
                    <option value="2">Non-Active</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mt-4" onClick={props.onHide}>
          Cancel
        </Button>
        <Button className="mt-4" onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const userlist = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  return (
    <div className="main-container d-flex">
        <Sidebar />
        <div className="container">
          <div className="newmentee">
            <div>
              <h1>Immersive Dashboard</h1>
              <h2>User List</h2>
            </div>

            <div className="hello">
              Hello, <span className="name">Yoga</span>
            </div>
          </div>
          <div>
            <InputGroup>
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons"
              />
              <Button variant="outline-secondary">Search</Button>
              <Button variant="info"  onClick={() => setModalShow(true)}>Add New</Button>
              <AddNewUser show={modalShow} onHide={() => setModalShow(false)} />
            </InputGroup>
          </div>
        <div className="table-user">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Team</th>
                <th>Role</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Yoga</td>
                <td>yoga@gmail.com</td>
                <td>Academic</td>
                <td>Default</td>
                <td>Active</td>
                <td>
                  <Button variant="info"  onClick={() => setModalEdit(true)}>Edit New</Button>
                  <EditNewUser show={modalEdit} onHide={() => setModalEdit(false)} />
                </td>
                <td>
                  <Button variant="info">Delete</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Doffa</td>
                <td>doffa@gmail.com</td>
                <td>Placemenet</td>
                <td>Default</td>
                <td>Active</td>
                {/* <td>
                  <Button variant="info"  onClick={() => setModalEdit(true)}>Edit New</Button>
                  <EditNewUser show={modalEdit} onHide={() => setModalEdit(false)} />
                </td>
                <td>
                  <Button variant="info">Delete</Button>
                </td> */}
              </tr>
            </tbody>
          </Table>
        </div>
        </div>
    </div>
  )
}

export default userlist;
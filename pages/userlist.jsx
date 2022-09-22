import React, { useState } from "react";
import { Button, Pagination, Form, Modal, Container, Row, Col, InputGroup, Table } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import Greeting from '../component/greeting';
import Router from 'next/router';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

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
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
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
        <Button className="mt-4" style={{ background: "#F07539", border: "#f7731c" }} onClick={props.onHide}>
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
        <Modal.Title id="contained-modal-title-vcenter">Edit User</Modal.Title>
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
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
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
        <Button className="mt-4" style={{ background: "#F07539", border: "#f7731c" }} onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const userlist = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const logOut = () => {
    Router.push({
      pathname: '/',
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const handleUser = (item) => {
    var axios = require("axios");
    var data = JSON.stringify({
      state: {
        name: name,
        email: email,
        password: password,
        team: team,
        role: role,
        status: status,
      },
    });

    var config = {
      method: "post",
      url: "https://group4.altaproject.online/manager",
      header: {
        Authorization: `Bearer ${setCookie}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setCookie("Token", response.data)
        alert("data udah masuk yak");
        Router.push("/");
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert("data salah gaes");
        console.log(error);
      });
  }

  return (
    <div className="condash">
      <Container className="condash1">
      <Row>
        <Col lg={{ span: 4, offset: 0 }} className="col1">
          <Sidebar />
        </Col>
        <Col lg={{ span: 8, offset: 5 }} className="col2">
          <div className="container">
            <Greeting title="User List" clickLogOut={() => logOut()} />
            <div className="searchbutton">
              <InputGroup>
                <Form.Control placeholder="Search" aria-label="Recipient's username with two button addons" />
                <Button variant="outline-warning">Search</Button>
                <button onClick={() => setModalShow(true)} className="buttonlist1">
                  Add New
                </button>
                <AddNewUser show={modalShow} onHide={() => setModalShow(false)} />
              </InputGroup>
            </div>
            <div className="tableclass">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Team</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.team}</td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
                    <td>
                      <AiFillEdit onClick={() => setModalEdit(true)} />
                      <EditNewUser show={modalEdit} onHide={() => setModalEdit(false)} />
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
      </Container>
      
    </div>
  )
}

export default userlist;
import React, { useState, useEffect } from "react";
import { Button, Pagination, Form, Modal, Container, Row, Col, InputGroup, Table } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import Greeting from '../component/greeting';
import Router from 'next/router';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { getCookie } from "cookies-next";

function AddNewUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const handleAddUser = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      email: email,
      password: password,
      team: team,
      role: role,
      status: status,
    });

    var config = {
      method: "post",
      url: "https://group4.altaproject.online/manager",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response)
        alert("Data sudah masuk yaa");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Data gagal masuk nih");
      });
  };

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
              <Col><Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" /></Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Col><Form.Label>Email</Form.Label></Col>
              <Col><Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" /></Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Col><Form.Label>Password</Form.Label></Col>
              <Col><Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /></Col>
            </Form.Group>
          </Row>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col><Form.Label>Team</Form.Label></Col>
                  <Col>
                    <Form.Select onChange={(e) => setTeam(e.target.value)} aria-label="Default select example">
                      <option>Team</option>
                      <option value="academic">Academic</option>
                      <option value="admisson">Admisson</option>
                      <option value="people">People</option>
                      <option value="placement">Placement</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col><Form.Label>Role</Form.Label></Col>
                  <Col>
                    <Form.Select onChange={(e) => setRole(e.target.value)} aria-label="Default select example">
                      <option>Role</option>
                      <option value="admin">Admin</option>
                      <option value="default">Default</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
          </div>
          <Row>
              <Form.Group className="mb-3" controlId="formPlaintext">
                <Col><Form.Label>Status</Form.Label></Col>
                <Col>
                  <Form.Select onChange={(e) => setStatus(e.target.value)} aria-label="Default select example">
                    <option>Status</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non-Active</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mt-4" style={{ background: "#F07539", border: "#f7731c" }} onClick={props.onHide}>
          Cancel
        </Button>
        <Button className="mt-4" style={{ background: "#F07539", border: "#f7731c" }} onClick={handleAddUser}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function EditNewUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const handleEditUser = (data) => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      email: email,
      password: password,
      team: team,
      role: role,
      status: status,
    })

    var config = {
      method: "put",
      url: `https://group4.altaproject.online/users/${data.ID}`,
      headres: {
        Authorization: `Bearer ${getCookie("Token")}`,
        "Content-Type": "aplication/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response);
        alert("Data berhasil di Edit yaa");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Data gagal di Edit nih");
      });
  };

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
              <Col><Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" /></Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Col><Form.Label>Email</Form.Label></Col>
              <Col><Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" /></Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Col><Form.Label>Password</Form.Label></Col>
              <Col><Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /></Col>
            </Form.Group>
          </Row>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col><Form.Label>Team</Form.Label></Col>
                  <Col>
                    <Form.Select onChange={(e) => setTeam(e.target.value)} aria-label="Default select example">
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
                    <Form.Select onChange={(e) => setRole(e.target.value)} aria-label="Default select example">
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
                  <Form.Select onChange={(e) => setStatus(e.target.value)} aria-label="Default select example">
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
        <Button className="mt-4" style={{ background: "#F07539", border: "#f7731c" }} onClick={handleEditUser}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const userlist = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://group4.altaproject.online/users?page=1",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then((response) => {
        setDatas(response.data.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    Router.push({
      pathname: '/',
    });
  };

  const handleDelete = ({ id }) => {
    var axios = require("axios");
    var config = {
      method: "delete",
      url: `https://group4.altaproject.online/users/${id}`,
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then((response) => {
        getUser();
      })
      .catch((error) => {
        console.log(error);
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
              {datas.map((data, index) => {
                return (
                  <div key={index}>
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
                          <td>{data.ID}</td>
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>{data.team}</td>
                          <td>{data.role}</td>
                          <td>{data.status}</td>
                          <td>
                            <AiFillEdit onClick={() => setModalEdit(true, data)} />
                            <EditNewUser show={modalEdit} onHide={() => setModalEdit(false)} />
                          </td>
                          <td>
                            <AiFillDelete onClick={() => handleDelete(data)} />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                );
              })}
            </div>
            <div style={{ float: "right", marginTop: "100px" }}>
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
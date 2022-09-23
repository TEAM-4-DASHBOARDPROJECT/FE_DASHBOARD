import React, { useState, useEffect } from "react";
import { Button, Pagination, Form, Modal, Container, Row, Col, InputGroup, Table } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import Greeting from "../component/greeting";
import Router from "next/router";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { getCookie, deleteCookie } from "cookies-next";

function AddNewUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const handleAddUser = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      status: status,
    });

    var config = {
      method: "post",
      url: "https://group4.altaproject.online/users",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(response);
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
              <Col>
                <Form.Label>Full Name</Form.Label>
              </Col>
              <Col>
                <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Col>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col>
                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Col>
                <Form.Label>Password</Form.Label>
              </Col>
              <Col>
                <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Row>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            <Row>
              <Form.Group className="mb-3" controlId="formPlaintext">
                <Col>
                  <Form.Label>Role</Form.Label>
                </Col>
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
              <Col>
                <Form.Label>Status</Form.Label>
              </Col>
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

const userlist = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const [datas, setDatas] = useState([]);
  const [datasid, setDatasid] = useState("");

  console.log(datasid);

  // logout
  const logOut = () => {
    deleteCookie("Token");
    Router.push({
      pathname: "/",
    });
  };

  function EditNewUser(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("");

    const handleEditUser = (data) => {
      var axios = require("axios");
      var data = JSON.stringify({
        name: name,
        email: email,
        password: password,
        status: status,
        role: role,
      });

      var config = {
        method: "put",
        url: `https://group4.altaproject.online/users/${datasid.id}`,
        headers: {
          Authorization: `Bearer ${getCookie("Token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          alert("update berhasil");
          window.location.reload();
        })
        .catch(function (error) {
          alert("gagal update", error);
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
                <Col>
                  <Form.Label>Full Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder={datasid.name} />
                </Col>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Col>
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col>
                  <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Col>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Col>
                  <Form.Label>Password</Form.Label>
                </Col>
                <Col>
                  <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Row>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintext">
                  <Col>
                    <Form.Label>Role</Form.Label>
                  </Col>
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
                <Col>
                  <Form.Label>Status</Form.Label>
                </Col>
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
          <Button className="mt-4" style={{ background: "#F07539", border: "#f7731c" }} onClick={handleEditUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th style={{ width: "20px" }}>No.</th>
                      <th style={{ width: "150px" }}>Full Name</th>
                      <th style={{ width: "200px" }}>Email</th>
                      <th style={{ width: "130px" }}>Role</th>
                      <th style={{ width: "130px" }}>Status</th>
                      <th style={{ width: "70px" }}>Edit</th>
                      <th style={{ width: "70px" }}>Delete</th>
                    </tr>
                  </thead>
                </Table>
                {datas.map((data, index) => {
                  return (
                    <div key={index}>
                      <Table>
                        <tbody>
                          <tr>
                            <td style={{ width: "35px" }}>{index}</td>
                            <td style={{ width: "150px" }}>{data.name}</td>
                            <td style={{ width: "200px" }}>{data.email}</td>
                            <td style={{ width: "130px" }}>{data.role}</td>
                            <td style={{ width: "130px" }}>{data.status}</td>
                            <td style={{ width: "70px" }}>
                              <input onClick={() => setDatasid(data)} type="checkbox" />
                              <AiFillEdit onClick={() => setModalEdit(true, data)} />
                              <EditNewUser show={modalEdit} onHide={() => setModalEdit(false)} />
                            </td>
                            <td style={{ width: "70px" }}>
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
  );
};

export default userlist;

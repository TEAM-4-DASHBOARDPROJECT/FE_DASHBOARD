import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import Greeting from "../component/greeting";
import { Table, Modal, Button, Container, Form, Row, Col, InputGroup, Pagination } from "react-bootstrap";
import Router from "next/router";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { getCookie, deleteCookie } from "cookies-next";

const Class = () => {
  const [modalShowNew, setModalNew] = useState(false);
  const [modalShowEdit, setModalEdit] = useState(false);

  const [datasid, setDatasid] = useState("");
  const [datas, setDatas] = useState([]);
  console.log(datasid);

  useEffect(() => {
    getClass();
  }, []);

  // MODAL ADD NEW MENTEE
  function AddNew(props) {
    const [name, setName] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [mulai, setMulai] = useState("");
    const [akhir, setAkhir] = useState("");

    const handleAddClass = () => {
      var axios = require("axios");
      var data = JSON.stringify({
        name: name,
        jumlah: jumlah,
        mulai: mulai,
        akhir: akhir,
      });

      var config = {
        method: "post",
        url: "https://group4.altaproject.online/class",
        headers: {
          Authorization: `Bearer ${getCookie("Token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          alert("Data Berhasil ditambah");
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    };

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
                <input onChange={(e) => setName(e.target.value)} placeholder="Nama"></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <label className="me-5 mb-5">Total Mentee</label>
                <input onChange={(e) => setJumlah(e.target.value)} placeholder="Total Mente" type="number"></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <label className="me-5 mb-5">Start Date</label>
                <input onChange={(e) => setMulai(e.target.value)} type="date" name="mulai"></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <label className="me-5 mb-5">End Date</label>
                <input onChange={(e) => setAkhir(e.target.value)} type="date" name="akhir"></input>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ background: "#F07539", border: "#f7731c" }} onClick={props.onHide}>
            Cancel
          </Button>
          <Button style={{ background: "#F07539", border: "#f7731c" }} onClick={handleAddClass}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // MODAL EDIT MENTEE
  function Edit(props) {
    const [name, setName] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [mulai, setMulai] = useState("");
    const [akhir, setAkhir] = useState("");

    const handleEditClass = () => {
      var axios = require("axios");
      var data = JSON.stringify({
        name: name,
        jumlah: jumlah,
        mulai: mulai,
        akhir: akhir,
      });
      var config = {
        method: "put",
        url: `https://group4.altaproject.online/class/${datasid.ID}`,
        headers: {
          Authorization: `Bearer ${getCookie("Token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          alert("Data berhasil di Edit");
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    };

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
                <input onChange={(e) => setName(e.target.value)} placeholder={datasid.Name}></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <label className="me-5 mb-5">Total Mentee</label>
                <input onChange={(e) => setJumlah(e.target.value)} placeholder={datasid.JumlahKelas} type="number"></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <label className="me-5 mb-5">Start Date</label>
                <input onChange={(e) => setMulai(e.target.value)} type="date"></input>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <label className="me-5 mb-5">End Date</label>
                <input onChange={(e) => setAkhir(e.target.value)} type="date"></input>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ background: "#F07539", border: "#f7731c" }} onClick={props.onHide}>
            Cancel
          </Button>
          <Button style={{ background: "#F07539", border: "#f7731c" }} onClick={handleEditClass}>
            Save Edit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // get Data Api
  const getClass = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://group4.altaproject.online/class",
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setDatas(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // logout
  const logOut = () => {
    deleteCookie("Token");
    Router.push({
      pathname: "/",
    });
  };

  // Delete Class
  const handleDelete = ({ ID }) => {
    var axios = require("axios");
    var config = {
      method: "delete",
      url: `https://group4.altaproject.online/class/${ID}`,
      headers: {
        Authorization: `Bearer ${getCookie("Token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        getClass();
      })
      .catch(function (error) {
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
                      <th style={{ width: "25px" }}>No</th>
                      <th style={{ width: "150px" }}>Class Name</th>
                      <th style={{ width: "120px" }}>Total Mentee</th>
                      <th style={{ width: "120px" }}>Start Date</th>
                      <th style={{ width: "120px" }}>End Date</th>
                      <th style={{ width: "50px" }}>Edit</th>
                      <th style={{ width: "50px" }}>Delete</th>
                    </tr>
                  </thead>
                </Table>
                {datas.map((data, index) => {
                  return (
                    <div key={index}>
                      <Table>
                        <tbody>
                          <tr>
                            <td style={{ width: "35px" }}>{data.ID}</td>
                            <td style={{ width: "150px" }}>{data.Name}</td>
                            <td style={{ width: "120px" }}>{data.JumlahKelas}</td>
                            <td style={{ width: "120px" }}>{data.MulaiKelas}</td>
                            <td style={{ width: "120px" }}>{data.AkhirKelas}</td>
                            <td style={{ width: "50px" }}>
                              <input onClick={() => setDatasid(data)} type="checkbox" />
                              <AiFillEdit onClick={() => setModalEdit(true)} />
                              <Edit show={modalShowEdit} onHide={() => setModalEdit(false)} />
                            </td>
                            <td style={{ width: "50px" }}>
                              <AiFillDelete onClick={() => handleDelete(data)} />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  );
                })}
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
  );
};

export default Class;

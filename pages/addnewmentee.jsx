import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import Sidebar from '../component/sidebar';
import Greeting from '../component/greeting';
import Router from 'next/router';
import { useState } from 'react';
import { setCookie } from 'cookies-next';
import axios from 'axios';

const addnewmentee = () => {
  const logOut = () => {
    Router.push({
      pathname: '/',
    });
  };

  const menteelist = () => {
    Router.push({
      pathname: '/menteelist',
    });
  };

  const [name, setName] = useState("");
  const [class_id, setClass_id] = useState("");
  const [status, setStatus] = useState("");
  const [homeaddress, setHomeaddress] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [telegram, setTelegram] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyname, setEmergencyname] = useState("");
  const [emergencyphone, setEmergencyphone] = useState("");
  const [emergencystatus, setEmergencystatus] = useState("");
  const [educationcategory, setEducationcategory] = useState("");
  const [educationmajor, setEducationmajor] = useState("");
  const [educationgraduate, setEducationgraduate] = useState('');

  const handleMentee = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: name,
      class_id: class_id,
      status: status,
      homeaddress: homeaddress,
      email: email,
      gender: gender,
      telegram: telegram,
      phone: phone,
      emergencyname: emergencyname,
      emergencyphone: emergencyphone,
      emergencystatus: emergencystatus,
      educationcategory: educationcategory,
      educationmajor: educationmajor,
      educationgraduate: educationgraduate,
    });

    var config = {
      method: "post",
      url: "https://group4.altaproject.online/mentee",
      headers: {
        Authorization: `Bearer ${setCookie}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setCookie("Token", response.data)
        alert("data berhasil masuk yak");
        Router.push("/menteelist");
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert("data salah cuy");
        console.log(error);
      });
  };

  return (
    <div className="condash">
      <Row>
        <Col lg={{ span: 4, offset: 0 }} className="col1">
          <Sidebar />
        </Col>
        <Col lg={{ span: 8, offset: 0 }} className="col2">
          <div className="container">
          <Greeting title="Add Mentee" clickLogOut={() => logOut()} />
          <Container className="formnewmentee" style={{justifyContent:"flex-start"}}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Address
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setAddress(e.target.value)} type="address" placeholder="Address" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Home Address
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setHomeaddress(e.target.value)} type="address" placeholder="Home Address" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={2}>
                    Gender
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Check onChange={(e) => setGender(e.target.value)} type="radio" label="Male" name="formVerticalRadios" id="formVerticalRadios1" />
                  </Col>
                  <Col sm={5}>
                    <Form.Check onChange={(e) => setGender(e.target.value)} type="radio" label="Female" name="formVerticalRadios" id="formVerticalRadios2" />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Telegram
                </Form.Label>
                <Col sm="10">
                  <InputGroup className="mb-2">
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control onChange={(e) => setTelegram(e.target.value)} id="inlineFormInputGroup" placeholder="Telegram" />
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Phone
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" />
                </Col>
              </Form.Group>
              <div>
                <h4>Emergency Data</h4>
              </div>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setEmergencyname(e.target.value)} type="text" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Phone
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setEmergencyphone(e.target.value)} type="text" placeholder="Phone" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Hubungan
                </Form.Label>
                <Col sm="8">
                  <Form.Select onChange={(e) => setEmergencystatus(e.target.value)} aria-label="Default select example">
                    <option>Status</option>
                    <option value="1">Orang Tua</option>
                    <option value="2">Saudara Kandung</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <div>
                <h4>Education Data</h4>
              </div>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={2}>
                    Category
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Check onChange={(e) => setEducationcategory(e.target.value)} type="radio" label="informatics" name="formVerticalRadios" id="formVerticalRadios1" />
                  </Col>
                  <Col sm={5}>
                    <Form.Check onChange={(e) => setEducationcategory(e.target.value)} type="radio" label="non-informatics" name="formVerticalRadios" id="formVerticalRadios2" />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Major
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setEducationmajor(e.target.value)} type="text" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                <Form.Label column sm="2">
                  Graduate
                </Form.Label>
                <Col sm="10">
                  <Form.Control onChange={(e) => setEducationgraduate(e.target.value)} type="text" placeholder="Phone" />
                </Col>
              </Form.Group>
              <div>
                <h4>Class Data</h4>
              </div>
              <Row>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                      Class
                    </Form.Label>
                  <Col sm="10">
                    <Form.Select onChange={(e) => setClass_id(e.target.value)} aria-label="Default select example">
                      <option>Class</option>
                      <option value="1">BE 11</option>
                      <option value="2">FE 8</option>
                      <option value="3">FE 7</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                      Status
                    </Form.Label>
                  <Col sm="10">
                    <Form.Select onChange={(e) => setStatus(e.target.value)} aria-label="Default select example">
                      <option>Status</option>
                      <option value="1">Active</option>
                      <option value="2">Placement</option>
                      <option value="3">Graduate</option>
                      <option value="4">Eliminate</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Row>
            </Form>
          </Container>
          <Container className="save">
            <Button onClick={menteelist} variant="outline-warning" style={{ margin: "0px 15px" }}>
              Cancel
            </Button>
            <Button onClick={handleMentee} style={{ background: "#F07539", border: "#f7731c" }} type="submit">
              Save
            </Button>
          </Container>
        </div>
        </Col>
      </Row>
    </div>
  );
};

export default addnewmentee;

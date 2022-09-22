import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import Sidebar from '../component/sidebar';
import Greeting from '../component/greeting';
import Router from 'next/router';
import { useState } from 'react';
import { setCookie } from 'cookies-next';
import axios from 'axios';

const editmentee = () => {
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

  const [name, setName] = useState('');
  const [class_id, setClass_id] = useState('');
  const [status, setStatus] = useState('');
  const [homeaddress, setHomeaddress] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [telegram, setTelegram] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyname, setEmergencyname] = useState('');
  const [emergencyphone, setEmergencyphone] = useState('');
  const [emergencystatus, setEmergencystatus] = useState('');
  const [educationcategory, setEducationcategory] = useState('');
  const [educationmajor, setEducationmajor] = useState('');
  const [educationgraduate, setEducationgraduate] = useState('');

  const handleMentee = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      name: name,
      class_id: class_id,
      status: status,
      address: address,
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
      method: 'put',
      url: 'https://group4.altaproject.online/mentee',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        setCookie('Token', response.data);
        alert('data berhasil masuk yak');
        Router.push('/menteelist');
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert('data salah cuy');
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
              <Greeting title="Edit Mentee" clickLogOut={() => logOut()} />
              <Container className="formnewmentee" style={{ justifyContent: 'center' }}>
                <Form>
                  <h4>Biodata</h4>
                  <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Name :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="John Due" className="formctrl" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Address :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setAddress(e.target.value)} type="address" placeholder="Jl. Satu Nusa" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Home Address :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setHomeaddress(e.target.value)} type="address" placeholder="Jl. Satu Bangsa" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      <p>Email :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johndue@gmail.com" />
                    </Col>
                  </Form.Group>
                  <fieldset>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={3}>
                        <p>Gender :</p>
                      </Form.Label>
                      <Col sm={2}>
                        <Form.Check onChange={(e) => setGender(e.target.value)} type="radio" label="Male" name="formVerticalRadios" id="formVerticalRadios1" />
                      </Col>
                      <Col sm={2}>
                        <Form.Check onChange={(e) => setGender(e.target.value)} type="radio" label="Female" name="formVerticalRadios" id="formVerticalRadios2" />
                      </Col>
                    </Form.Group>
                  </fieldset>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3">
                      <p>Telegram :</p>
                    </Form.Label>
                    <Col sm="9">
                      <InputGroup className="mb-2">
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control onChange={(e) => setTelegram(e.target.value)} id="inlineFormInputGroup" placeholder="johndue" />
                      </InputGroup>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Phone :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="+62" />
                    </Col>
                  </Form.Group>
                  <div>
                    <h4>Emergency Data</h4>
                  </div>
                  <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Name :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEmergencyname(e.target.value)} type="text" placeholder="John Lenon" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Phone :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEmergencyphone(e.target.value)} type="tel" placeholder="+62" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Relations :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Select onChange={(e) => setEmergencystatus(e.target.value)} aria-label="Default select example">
                        <option>Status</option>
                        <option value="1">Parents</option>
                        <option value="2">Siblings</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <div>
                    <h4>Education Data</h4>
                  </div>
                  <fieldset>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={3}>
                        <p>Category :</p>
                      </Form.Label>
                      <Col sm={2}>
                        <Form.Check onChange={(e) => setEducationcategory(e.target.value)} type="radio" label="informatics" name="formVerticalRadios" id="formVerticalRadios1" />
                      </Col>
                      <Col sm={3}>
                        <Form.Check onChange={(e) => setEducationcategory(e.target.value)} type="radio" label="non-informatics" name="formVerticalRadios" id="formVerticalRadios2" />
                      </Col>
                    </Form.Group>
                  </fieldset>
                  <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Major :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEducationmajor(e.target.value)} type="text" placeholder="Bachelor of" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Graduate :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEducationgraduate(e.target.value)} type="text" placeholder="University of" />
                    </Col>
                  </Form.Group>
                  <div>
                    <h4>Class Data</h4>
                  </div>
                  <Row>
                    <Form.Group as={Row} controlId="formPlaintext">
                      <Form.Label column sm="3">
                        <p>Class :</p>
                      </Form.Label>
                      <Col sm="9">
                        <Form.Select onChange={(e) => setClass_id(e.target.value)} aria-label="Default select example">
                          <option>Class</option>
                          <option value="1">BE 11</option>
                          <option value="2">FE 8</option>
                          <option value="3">FE 7</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintext">
                      <Form.Label column sm="3">
                        <p>Status :</p>
                      </Form.Label>
                      <Col sm="9">
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
                <Button onClick={menteelist} variant="outline-warning" style={{ margin: '0px 15px', width: '80px' }}>
                  Cancel
                </Button>
                <Button onClick={handleMentee} style={{ background: '#F07539', border: '#f7731c', width: '80px' }} type="submit">
                  Save
                </Button>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default editmentee;

import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import Sidebar from '../component/sidebar';
import Greeting from '../component/greeting';
import Router from 'next/router';
import { useState } from 'react';
import { getCookie } from 'cookies-next';

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

  const [name, setName] = useState('');
  const [class_id, setClass_id] = useState('');
  const [status, setStatus] = useState('');
  const [address, setAddress] = useState('');
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

  const handleAddMentee = () => {
    var axios = require('axios');

    var data = JSON.stringify({
      name: name,
      class_id: parseInt(class_id),
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
      method: 'post',
      url: 'https://group4.altaproject.online/mentee',
      headers: {
        Authorization: `Bearer ${getCookie('Token')}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert('berhasil ditambahahkan');
        Router.push('/menteelist');
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
          <Col lg={{ span: 8, offset: 5 }} className="coladd2">
            <div className="container">
              <Greeting title="Add Mentee" clickLogOut={() => logOut()} />
              <Container className="formnewmentee" style={{ justifyContent: 'flex-start' }}>
                <Form>
                  <h4>Biodata</h4>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Name :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="John Due" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Address :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setAddress(e.target.value)} type="address" placeholder="Jl. Nusa Dua" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Home Address :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setHomeaddress(e.target.value)} type="address" placeholder="Jl. Nusa Dua" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      <p>Email :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johndue@gmail.com" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={3}>
                      <p>Gender :</p>
                    </Form.Label>
                    <Col sm={3}>
                      <Form.Check onChange={(e) => setGender(e.target.value)} type="radio" label="Male" name="formVerticalRadios" id="formVerticalRadios1" value="male" />
                    </Col>
                    <Col sm={3}>
                      <Form.Check onChange={(e) => setGender(e.target.value)} type="radio" label="Female" name="formVerticalRadios" id="formVerticalRadios2" value="female" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
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
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
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
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Name :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEmergencyname(e.target.value)} type="text" placeholder="John Lenon" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Phone :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEmergencyphone(e.target.value)} type="tel" placeholder="+62" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Relations :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Select onChange={(e) => setEmergencystatus(e.target.value)} aria-label="Default select example">
                        <option>Status</option>
                        <option value="orang tua">Orang Tua</option>
                        <option value="saudara kandung">Saudara Kandung</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <div>
                    <h4>Education Data</h4>
                  </div>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={3}>
                      <p>Category :</p>
                    </Form.Label>
                    <Col sm={3}>
                      <Form.Check onChange={(e) => setEducationcategory(e.target.value)} type="radio" value="informatics" label="informatics" name="formVerticalRadios" id="formVerticalRadios3" />
                    </Col>
                    <Col sm={3}>
                      <Form.Check onChange={(e) => setEducationcategory(e.target.value)} type="radio" value="non-informatics" label="non-informatics" name="formVerticalRadios" id="formVerticalRadios4" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Major :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEducationmajor(e.target.value)} type="text" placeholder="Bachelor of" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="3">
                      <p>Graduate :</p>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control onChange={(e) => setEducationgraduate(e.target.value)} type="text" placeholder="Harvard University" />
                    </Col>
                  </Form.Group>
                  <div>
                    <h4>Class Data</h4>
                  </div>
                  <Row>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                      <Form.Label column sm="3">
                        <p>Class :</p>
                      </Form.Label>
                      <Col sm="9">
                        <Form.Select onChange={(e) => setClass_id(e.target.value)} aria-label="Default select example">
                          <option>Class</option>
                          <option type="number" value="24">
                            QE 05
                          </option>
                          <option type="number" value="28">
                            FE 08
                          </option>
                          <option type="number" value="30">
                            BE 11
                          </option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                      <Form.Label column sm="3">
                        <p>Status :</p>
                      </Form.Label>
                      <Col sm="9">
                        <Form.Select onChange={(e) => setStatus(e.target.value)} aria-label="Default select example">
                          <option>Status</option>
                          <option value="active">Active</option>
                          <option value="placement">Placement</option>
                          <option value="graduate">Graduate</option>
                          <option value="eliminate">Eliminate</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </Row>
                </Form>
              </Container>
              <Container className="save">
                <Button onClick={menteelist} variant="outline-warning" style={{ margin: '0px 15px' }}>
                  Cancel
                </Button>
                <Button onClick={handleAddMentee} style={{ background: '#F07539', border: '#f7731c' }} type="submit">
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

export default addnewmentee;

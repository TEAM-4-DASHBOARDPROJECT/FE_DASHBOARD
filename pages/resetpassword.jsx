import Image from 'next/image';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img from '../picture/login.png';

const resetpassword = () => {
  return (
    <div>
      <Container className="contlog">
        <Row className="contlog">
          <Col md={{ span: 7 }} className="contlog">
            <Image src={img} alt="Picture of the author" width="550px" height="625px" />
          </Col>
          <Col md={{ span: 5 }} style={{ paddingTop: '100px !important' }} className="contlog">
            <div>
              <h2>Wanna Reset Password?</h2>
            </div>
            <Form>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Col>
                    <Form.Label>Email</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Col>
                    <Form.Label>Old Password</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control type="password" placeholder="Old Password" />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Col>
                    <Form.Label>New Password</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control type="password" placeholder="New Password" />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Col>
                    <Form.Label>Retype Password</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control type="password" placeholder="Retype Password" />
                  </Col>
                </Form.Group>
              </Row>
            </Form>
            <Button className="button" style={{ background: '#F07539', border: '#f7731c', width: '209px' }}>
              Reset Password
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default resetpassword;

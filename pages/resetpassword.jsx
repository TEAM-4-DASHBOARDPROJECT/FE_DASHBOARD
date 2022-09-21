import Image from "next/image";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import img from "../picture/login.png";

const resetpassword = () => {
  return (
    <div className="log-page">
            <Image src={img} width="600px"></Image>
            <Container style={{ width:"600px", height:"100%"}}>
                    <div>
                        <h2>Wanna Reset Password?</h2>
                    </div>
                    <Form>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Col><Form.Label>Email</Form.Label></Col>
                                <Col><Form.Control type="email" placeholder="Enter email" /></Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Col><Form.Label>Old Password</Form.Label></Col>
                                <Col><Form.Control type="password" placeholder="Old Password" /></Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Col><Form.Label>New Password</Form.Label></Col>
                                <Col><Form.Control type="password" placeholder="New Password" /></Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Col><Form.Label>Retype Password</Form.Label></Col>
                                <Col><Form.Control type="password" placeholder="Retype Password" /></Col>
                            </Form.Group>
                        </Row>
                    </Form>
                    <Button className="button" style={{background:"#F07539", width:"209px"}}>
                        Reset Password
                    </Button>
            </Container>
        </div>
  )
}

export default resetpassword;
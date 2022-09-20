import Image from "next/image";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import img from "../picture/login.png";

const LoginPage = () => {
  return (
    <div className="log-page">
            <Image src={img} width="600px"></Image>
            <Container style={{ width:"600px", height:"100%"}}>
                    <div>
                        <h2>Login to your account!</h2>
                    </div>
                    <Form>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Col><Form.Label>Email</Form.Label></Col>
                                <Col><Form.Control type="email" placeholder="Enter email" /></Col>
                                <Col><Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text></Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Col><Form.Label>Password</Form.Label></Col>
                                <Col><Form.Control type="password" placeholder="Password" /></Col>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                    </Form>
                    <Button className="button" style={{background:"#F07539", width:"209px"}}>
                        LOGIN
                    </Button>
            </Container>
        </div>
  )
}

export default LoginPage;
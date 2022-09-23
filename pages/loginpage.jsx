import Image from "next/image";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import img from "../picture/login.png";
import { useState } from "react";
import Router from "next/router";
import { setCookie } from "cookies-next";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      email: email,
      password: password,
    });
    var config = {
      method: "post",
      url: "https://group4.altaproject.online/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setCookie("Token", response.data.data);
        alert("login berhasil");
        Router.push("/dashboard");

        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Container className="contlog">
        <Row className="contlog">
          <Col md={{ span: 7 }} className="contlog">
            <Image src={img} alt="Picture of the author" width="550px" height="625px" />
          </Col>
          <Col md={{ span: 5 }} style={{ paddingTop: "150px !important" }} className="contlog">
            <div>
              <h2>Login to your account!</h2>
            </div>
            <Form>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Col>
                    <Form.Label>Email</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                  </Col>
                  <Col>
                    <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
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
            </Form>
            <div>
              <Button onClick={handleLogin} className="buttonlogin" style={{ background: "#F07539", border: "#f7731c", width: "150px", height: "35px", marginTop: "35px" }}>
                <p>LOGIN</p>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;

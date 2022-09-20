import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import Sidebar from '../component/sidebar'

const addnewmentee = () => {
  return (
    <div className="main-container d-flex">
        <Sidebar />
        <div className="container">
            <div className="newmentee">
                <div>
                    <h1>Immersive Dashboard</h1>
                    <h2>Add New Mentee</h2>
                </div>

                <div className="hello">
                    Hello, <span className="name">Yoga</span>
                </div>
            </div>
            <Container className="formnewmentee">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Address
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="address" placeholder="Address" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Home Address
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="address" placeholder="Home Address" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Gender
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Check
                            type="radio"
                            label="Male"
                            name="formVerticalRadios"
                            id="formVerticalRadios1"
                            />
                        </Col>
                        <Col sm={5}>
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="formVerticalRadios"
                                id="formVerticalRadios2"
                                />
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
                                <Form.Control id="inlineFormInputGroup" placeholder="Telegram" />
                            </InputGroup>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Phone
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Phone" />
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
                        <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Phone
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Phone" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                            Status
                        </Form.Label>
                        <Col sm="8">
                            <Form.Select aria-label="Default select example">
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
                            Type
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Check
                            type="radio"
                            label="informatics"
                            name="formVerticalRadios"
                            id="formVerticalRadios1"
                            />
                        </Col>
                        <Col sm={5}>
                            <Form.Check
                                type="radio"
                                label="non-informatics"
                                name="formVerticalRadios"
                                id="formVerticalRadios2"
                                />
                        </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Major
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="2">
                        Graduate
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Phone" />
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
            <Container className="save">
                <Button variant="info" type="submit">
                    Cancel
                </Button>
                <Button variant="info" type="submit">
                    Save
                </Button>
            </Container>
        </div>
    </div>
  )
}

export default addnewmentee;
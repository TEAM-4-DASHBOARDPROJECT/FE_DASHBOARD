import Image from 'next/image';
import { Button, Container, Row, Col } from 'react-bootstrap';
import img from '../picture/login1.png';
import Link from 'next/link';

const login = () => {
  return (
    <div>
      <Container className="contlog">
        <Row className="contlog">
          <Col md={{ span: 7 }} className="contlog">
            <Image src={img} alt="Picture of the author" width="550px" height="625px" />
          </Col>
          <Col md={{ span: 5 }} style={{ paddingTop: '150px !important' }} className="contlog">
            <div>
              <h2>Hello Again</h2>
              <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
              <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat fugiat sapiente, commodi, eligendi iure ipsa ducimus sint repellat nemo illo voluptatem similique ut aut facilis voluptas voluptates libero porro nulla.</h6>
            </div>
            <Button className="button" style={{ background: '#F07539', border: '#f7731c', width: '150px', height: '35px', color: 'white' }}>
              <Link href="/loginpage">
                <p>LOGIN</p>
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default login;

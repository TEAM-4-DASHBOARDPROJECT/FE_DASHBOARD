import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import img from "../picture/login.png";

export default function LoginPage() {
  return (
    <div className="log-page">
            <Image src={img} width="600px"></Image>
            <Container style={{ width:"600px", height:"100%"}}>
                    <div>
                        <h2>Hello Again</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat fugiat sapiente, commodi, eligendi iure ipsa ducimus sint repellat nemo illo voluptatem similique ut aut facilis voluptas voluptates libero porro nulla.</p>
                    </div>
                    <Button className="button" style={{background:"#F07539", width:"209px"}}>
                        LOGIN
                    </Button>
            </Container>
        </div>
  )
}

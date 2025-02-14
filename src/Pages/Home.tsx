import { Row, Col, Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
function Home() {
  return (
<Row xs={1} md={2} xl={3} className="g-4 m-1">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              
              </Card.Text>
                <Button variant="primary">Primary</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Home;

import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function EventCard({ infos }: any) {
  return (
    <div className="card m-3" style={{ maxWidth: "700px" }}>
      <div className="row g-0 ">
        {/* <div className="col-md-4  " style={{display: 'flex', justifyContent: 'center'}}> */}
        <div className="col-md-4 my-auto  ">
          <img
            src="https://rpgrio.com.br/wp-content/uploads/2024/12/IniciativaRPG.png"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{infos.nome}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {infos.data} | {infos.data}
            </Card.Subtitle>
            <Card.Text className="fw-bold">
              {infos.cidade}, {infos.bairro}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Numero de mesas: {infos.nMesas}</ListGroup.Item>
            <ListGroup.Item>
              Outras Atrações:
              <ul>
                <li>Prototipos</li>
                <li>Cardgames</li>
                <li>BoardGames</li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <div className="d-grid gap-2">
              <Link to={`/${infos.nome}`}>
                <Button variant="primary" size="lg" style={{ width: "100%" }}>
                  Ver Mais
                </Button>
              </Link>
            </div>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
{
  /* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://rpgrio.com.br/wp-content/uploads/2024/12/IniciativaRPG.png" />
      
      <Card.Body>
        <Card.Title>Nome do Evento</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">13/04/25 | 11:00 - 19:00</Card.Subtitle>
        <Card.Text className="fw-bold">
       Rio de Janeiro, Tijuca
        </Card.Text>
    
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Numero de mesas: 9</ListGroup.Item>
        <ListGroup.Item>Outras Atrações:
          <ul>
            <li>Prototipos</li>
            <li>Cardgames</li>
            <li>BoardGames</li>
          </ul>
          </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Ver Mais
      </Button>
    
    </div>
      </Card.Body>
    </Card> */
}

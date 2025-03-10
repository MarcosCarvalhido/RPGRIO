import { Row, Col, Card, Button, ThemeProvider } from "react-bootstrap";
import { Link } from "react-router-dom";

import EventCard from "../Components/EventCard";
import { useState } from "react";
function Home() {
  const [infos, setinfos] = useState([
    {
      nome: "Iniciativa RPG",
      data: "13/04/25",
      horario: "11:00 - 19:00",
      cidade: "Rio de Janeiro",
      bairro: "Tijuca",
      nMesas: 19,
      Atracoes: ["Prototipos", "cardgame", "boardgames"],
    },
    {
      nome: "RPG RJ",
      data: "09/03/25",
      horario: "11:00 - 19:00",
      cidade: "Rio de Janeiro",
      bairro: "Tijuca",
      nMesas: 9,
      Atracoes: ["cardgame", "boardgames"],
    },
    {
      nome: "Iniciativa RPG",
      data: "13/04/25",
      horario: "11:00 - 19:00",
      cidade: "Rio de Janeiro",
      bairro: "Tijuca",
      nMesas: 19,
      Atracoes: ["Prototipos", "cardgame", "boardgames"],
    },
    {
      nome: "RPG RJ",
      data: "09/03/25",
      horario: "11:00 - 19:00",
      cidade: "Rio de Janeiro",
      bairro: "Tijuca",
      nMesas: 9,
      Atracoes: ["cardgame", "boardgames"],
    },
  ]);

  return (
    <div className="d-flex flex-wrap gap-3">
      {infos.map((item) => (
        <EventCard infos={item} />
      ))}
    </div>
  );
}

export default Home;

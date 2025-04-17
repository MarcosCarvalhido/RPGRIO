import { useParams } from "react-router-dom";

function EventContent() {
  const { nome } = useParams();

  return (
    <div>
      <h1>CONTEUDO {nome}</h1>
    </div>
  );
}

export default EventContent;

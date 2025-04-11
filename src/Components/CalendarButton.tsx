import { Button } from "react-bootstrap";

function CalendarButton({ infos }: any) {
  const [dia, mes, ano] = infos.data.split("/").map(Number);
  const [horaInicio, horaFim] = infos.horario.split(" - ");
  const [hiHora, hiMin] = horaInicio.split(":").map(Number);
  const [hfHora, hfMin] = horaFim.split(":").map(Number);

  // Criando objetos Date em horário local (sem UTC!)
  const inicio = new Date(ano, mes - 1, dia, hiHora, hiMin);
  const fim = new Date(ano, mes - 1, dia, hfHora, hfMin);

  // Formatando manualmente para o formato Google (sem o "Z" final)
  const toGoogleFormatLocal = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, "0");
    const yyyy = date.getFullYear();
    const mm = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const min = pad(date.getMinutes());
    const ss = "00";
    return `${yyyy}${mm}${dd}T${hh}${min}${ss}`;
  };

  const inicioFormatado = toGoogleFormatLocal(inicio);
  const fimFormatado = toGoogleFormatLocal(fim);

  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    infos.nome
  )}&dates=${inicioFormatado}/${fimFormatado}&location=${encodeURIComponent(
    `${infos.bairro}, ${infos.cidade}`
  )}&details=inserir detales aqui`;

  return (
    <Button
      variant="outline-primary"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Salve na sua agenda!
    </Button>
  );
}

export default CalendarButton;

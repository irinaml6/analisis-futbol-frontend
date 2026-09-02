function getRowStyle(posicion) {
  if (posicion === 1) return { backgroundColor: "#f5fff5" };      // verde muy suave
  if (posicion >= 2 && posicion <= 4) return { backgroundColor: "#f6f8ff" }; // azul muy suave
  if (posicion >= 18) return { backgroundColor: "#fff5f5" };      // rojo muy suave
  return {};
}

export default function ClasificacionRow({ equipo }) {
  const style = {
    ...getRowStyle(equipo.position),
    borderBottom: "1px solid #eee"
  };

  return (
    <tr style={style}>
      <td style={{ padding: "0.6rem" }}>{equipo.position}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.team_name}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.points}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.played}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.won}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.drawn}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.lost}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.goals_for}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.goals_against}</td>
    </tr>
  );
}

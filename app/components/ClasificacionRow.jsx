function getRowStyle(posicion) {
  if (posicion === 1) return { backgroundColor: "#f5fff5" };      // verde muy suave
  if (posicion >= 2 && posicion <= 4) return { backgroundColor: "#f6f8ff" }; // azul muy suave
  if (posicion >= 18) return { backgroundColor: "#fff5f5" };      // rojo muy suave
  return {};
}

export default function ClasificacionRow({ equipo }) {
  const style = {
    ...getRowStyle(equipo.posicion),
    borderBottom: "1px solid #eee"
  };

  return (
    <tr style={style}>
      <td style={{ padding: "0.6rem" }}>{equipo.posicion}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.nombre}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.puntos}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.partidosJugados}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.victorias}</td>
      <td style={{ padding: "0.6rem" }}>{equipo.derrotas}</td>
    </tr>
  );
}

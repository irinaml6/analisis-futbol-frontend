function getIndicatorColor(posicion) {
  if (posicion === 1) return "#4caf50";       // verde campeón
  if (posicion >= 2 && posicion <= 4) return "#2196f3"; // azul Champions
  if (posicion >= 18) return "#f44336";       // rojo descenso
  return "#888";                              // gris neutro
}

export default function ClasificacionRow({ equipo }) {
  const indicatorColor = getIndicatorColor(equipo.position);
  const escudo = `https://media.api-sports.io/football/teams/${equipo.team_id}.png`;

  return (
    <tr style={{ borderBottom: "1px solid #333" }}>
      {/* Mini rectángulo lateral */}
      <td style={{ padding: 0 }}>
        <div
          style={{
            width: "6px",
            height: "100%",
            backgroundColor: indicatorColor,
          }}
        ></div>
      </td>

      {/* Equipo + escudo */}
      <td style={{ padding: "0.6rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "white", fontFamily: "Arial" }}>
        <img 
          src={escudo} 
          alt={equipo.team_name} 
          width={22} 
          height={22} 
          style={{ opacity: 0.9 }}
        />
        {equipo.team_name}
      </td>

      <td style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}>{equipo.position}</td>
      <td style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}>{equipo.points}</td>
      <td style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}>{equipo.played}</td>
      <td style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}>{equipo.won}</td>
      <td style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}>{equipo.drawn}</td>
      <td style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}>{equipo.lost}</td>
      <td style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}>{equipo.goals_for}</td>
      <td style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}>{equipo.goals_against}</td>
    </tr>
  );
}

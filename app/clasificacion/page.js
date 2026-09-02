import ClasificacionRow from "../components/ClasificacionRow";

export default async function ClasificacionPage() {
  const res = await fetch("https://analisis-futbol-frontend.vercel.app/api/home", {
    next: { revalidate: 60 }
  });

  const data = await res.json();

  const clasificacionOrdenada = [...data.clasificacion].sort(
    (a, b) => a.position - b.position
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto", backgroundColor: "#121212", minHeight: "100vh" }}>
      <h1 style={{ fontWeight: 500, marginBottom: "1rem", color: "white", fontFamily: "Arial" }}>
        Clasificación
      </h1>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #333" }}>
            <th style={{ padding: "0.6rem", color: "white", fontFamily: "Arial" }}></th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>Equipo</th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>Pos</th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>Pts</th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>Jug</th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>V</th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>E</th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>D</th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>GF</th>
            <th style={{ textAlign: "left", padding: "0.6rem", color: "white", fontFamily: "Arial" }}>GC</th>
          </tr>
        </thead>

        <tbody>
          {clasificacionOrdenada.map((equipo, i) => (
            <ClasificacionRow key={i} equipo={equipo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

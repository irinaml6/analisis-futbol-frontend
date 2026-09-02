import ClasificacionRow from "../components/ClasificacionRow";

export default async function ClasificacionPage() {
  const res = await fetch("https://analisis-futbol-frontend.vercel.app/api/home", {
    next: { revalidate: 60 }
  });

  const data = await res.json();
  const clasificacion = data.clasificacion;

  return (
    <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontWeight: 500, marginBottom: "1rem" }}>Clasificación</h1>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd" }}>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>Pos</th>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>Equipo</th>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>Pts</th>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>Jug</th>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>V</th>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>E</th>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>D</th>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>GF</th>
            <th style={{ textAlign: "left", padding: "0.6rem" }}>GC</th>
          </tr>
        </thead>

        <tbody>
          {clasificacion.map((equipo, i) => (
            <ClasificacionRow key={i} equipo={equipo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

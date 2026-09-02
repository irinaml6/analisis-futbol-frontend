import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff", display: "flex", gap: "1rem" }}>
      <Link href="/">Inicio</Link>
      <Link href="/clasificacion">Clasificación</Link>
    </nav>
  );
}

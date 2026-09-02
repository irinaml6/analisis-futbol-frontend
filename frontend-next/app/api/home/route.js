export async function GET() {
  const res = await fetch("https://analisis-futbol-backend.onrender.com/api/home");
  const data = await res.json();
  return Response.json(data);
}

export async function GET() {
  const res = await fetch("https://la-liga-web.onrender.com/api/home");
  const data = await res.json();
  return Response.json(data);
}

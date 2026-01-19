export async function getStatus() {
  const response = await fetch("http://localhost:8000/");
  return response.json();
}
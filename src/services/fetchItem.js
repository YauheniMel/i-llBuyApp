export default async function fetchItem(url) {
  const response = await fetch(url);

  return response.json();
}

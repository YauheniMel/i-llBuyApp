export default async function fetchItems(url) {
  const response = await fetch(url);

  return response.json();
}

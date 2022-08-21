const url = 'https://api.escuelajs.co/api/v1/products';

export default async function fetchItems() {
  const response = await fetch(url);

  if (!response.ok) throw new Error('Error: ' + response.statusText);

  return response.json();
}

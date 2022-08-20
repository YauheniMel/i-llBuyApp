const url = 'https://api.escuelajs.co/api/v1/products';

export default async function fetchItems() {
  const response = await fetch(url);

  return response.json();
}

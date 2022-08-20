const getItemURL = (id) => `https://api.escuelajs.co/api/v1/products/${id}`;

export default async function fetchItem(id) {
  const itemURL = getItemURL(id);

  const response = await fetch(itemURL);

  return response.json();
}

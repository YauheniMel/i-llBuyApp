const getItemURL = (id) => `https://fakestoreapi.com/products/${id}`;

export default async function fetchItem(id) {
  const itemURL = getItemURL(id);

  const response = await fetch(itemURL);

  return await response.json();
}

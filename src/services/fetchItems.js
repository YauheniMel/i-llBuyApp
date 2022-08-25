const getItemURL = (page) => `https://fakestoreapi.com/products?limit=${page}`;

export default async function fetchItems(page = 1) {
  const PAGE_SIZE = 10;

  const url = getItemURL(page * PAGE_SIZE);

  const response = await fetch(url);

  return await response.json();
}

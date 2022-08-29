const BASE_URL = 'https://fakestoreapi.com/products/';

export default async function fetchData(id, page) {
  const PAGE_SIZE = 10;

  const url = id ? BASE_URL + id : BASE_URL + `?limit=${page * PAGE_SIZE}`;

  const response = await fetch(url);

  return await response.json();
}

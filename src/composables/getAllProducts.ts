// getAllProducts.ts
async function getAllProducts(limit?: number) {
  let url = 'https://fakestoreapi.com/products';
  if (limit) {
    url += '?limit=' + limit.toString();
  }
  const response = await fetch(url);
  return response.json();
}

export default getAllProducts;

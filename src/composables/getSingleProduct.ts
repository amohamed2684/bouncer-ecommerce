async function getSingleProduct(id:number)  {
  let response = await fetch('https://fakestoreapi.com/products/'+ id);
  let cart = response.json();

  return cart;
}

export default getSingleProduct
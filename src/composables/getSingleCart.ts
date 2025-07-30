async function getSingleCart(id:number = 1)  {
  let response = await fetch('https://fakestoreapi.com/carts/'+ id);
  let cart = response.json();

  return cart;
}

export default getSingleCart
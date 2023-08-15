  //This is the initial array. Do not change anything in it
  const products = [
    { id: 1, name: 'Biscuit', price: 15, quantity: 10 },
    { id: 2, name: 'Chocolates', price: 30, quantity: 5 },
    { id: 3, name: 'Rice', price: 300, quantity: 3 },
  ];
  
  // Shopping cart array. Don't change anything in it
  let cart = [];
  
  // Arrow function to add a product to the cart
  const addToCart = (cart, productId) => {
    /*Complete this function that will add productId 1, 2 or 3 
    present inside the products into array cart*/
    //---------------Write below this line...----------------

    

    //----------------Write above this line...----------------
  };
  
  // Arrow function to remove a product from the cart
  const removeFromCart = (cart, productId) => {
    /*Complete this function that will remove the productId from the cart*/
    //---------------Write below this line...------------------



    //--------------Write above this line...-------------------
  };
  

  // Test the shopping cart - Do not remove the code below
  addToCart(cart, 1);
  addToCart(cart, 2);
  addToCart(cart, 1);
  console.log('Cart after adding products:', cart);
  
  removeFromCart(cart, 1);
  console.log('Cart after removing one biscuit:', cart);
  

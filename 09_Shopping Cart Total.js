function calculateTotal(products) {
    const totalCost = products.reduce((accumulator, product) => {
      return accumulator + (product.price * product.quantity);
    }, 0);
    return totalCost;
  }
  const products = [
    { name: 'Laptop', price: 1200, quantity: 1 },
    { name: 'Phone', price: 800, quantity: 2 },
    { name: 'Tablet', price: 300, quantity: 3 },
  ];
  
  const totalCost = calculateTotal(products);
  console.log('Total cost:', totalCost); 
    
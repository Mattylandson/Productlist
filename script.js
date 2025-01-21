document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
     
      const productName = button.dataset.productName;

      let matchingItem;
      
      cart.forEach((item) => {
        if (productName == item.productName) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productName: productName,
          quantity: 1
        });
      }

      let cartQuantity = 0

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      
      document.querySelector('.js-cart-quantity')
       .innerText = cartQuantity; 

      console.log(cartQuantity);
      console.log(cart);
    });
  });
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("myBtn").click();


// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.w3-button.w3-black');
  const carritoTable = document.getElementById('carrito-table').getElementsByTagName('tbody')[0];
  const totalElement = document.getElementById('total');
  let total = 0;

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const productContainer = button.closest('.w3-container');
      const productName = productContainer.querySelector('p').innerText.split('\n')[0];
      const productPrice = parseFloat(productContainer.querySelector('p b').innerText.replace('$', ''));
      const productImage = productContainer.querySelector('img').src;

      // Crear una nueva fila en el carrito
      const newRow = carritoTable.insertRow();
      const nameCell = newRow.insertCell(0);
      const priceCell = newRow.insertCell(1);
      const imageCell = newRow.insertCell(2);

      nameCell.innerText = productName;
      priceCell.innerText = `$${productPrice.toFixed(2)}`;
      imageCell.innerHTML = `<img src="${productImage}" style="width:50px;height:50px;">`;

      // Actualizar el total
      total += productPrice;
      totalElement.innerText = `Total: $${total.toFixed(2)}`;
    });
  });
});

  const cart = [];

  function addToCart(name, price, img) {
    const product = { name, price, img };
    cart.push(product);
    updateCart();
  }

  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'w3-row w3-margin-bottom';
      cartItem.innerHTML = `
        <div class="w3-col s4">
          <img src="${item.img}" style="width:100%">
        </div>
        <div class="w3-col s8">
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)}</p>
        </div>
      `;
      cartItems.appendChild(cartItem);
      total += item.price;
    });
    
    document.getElementById('cart-total').innerText = total.toFixed(2);
  }

  function showCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
  }

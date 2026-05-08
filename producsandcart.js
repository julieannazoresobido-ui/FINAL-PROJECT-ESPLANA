const product = [
  {
    id: 0,
    image: "photocard.jpg",
    title: "Random BL Photocards",
    price: 0.99,
  },
  {
    id: 1,
    image: "Jinx_keychain.jpg",
    title: "Jinx Keychais",
    price: 1.00,
  },
  {
    id: 2,
    image: "yaoi_bookmark.jpg",
    title: "Yaoi Bookmarks",
    price: 0.50,
  },
  {
    id: 3,
    image: "Alpha_stickers.jpg",
    title: "Alpha Stickers",
    price: 2.00,
  },
  {
    id: 4,
    image: "kim_dan_plushie.jpg",
    title: "Kim Dan's Plushies",
    price: 5.00,
  },
  {
    id: 5,
    image: "BJ_Alex_book_sets.jpg",
    title: "BJ Alex Books",
    price: 100.00,
  }
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `<div class='box'>
      <div class='img-box'>
        <img src="${image}" alt="${image}" class="image" />
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
      `</div>
    </div>`
  )
}).join('')

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0, total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  }
  else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { image, title, price } = items;
      total = total + price;
      document.getElementById("total").innerHTML = "$ " + total + ".00";
      return (
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join('');
  }
}
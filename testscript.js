let buttons = Array.from(document.querySelectorAll('.button'));

for (let button of buttons) {
    button.addEventListener('click', () => {
        extractData(button.parentElement)
    });
}

function extractData(item) {
  let productName = item.querySelector('h3').innerHTML;
  let productPrice = item.querySelector('.price').innerHTML;
  saveToCart({name: productName, price: productPrice});
}
let cartArray = [];

function saveToCart(data){
  // Check localStorage for existing data
  // If existing data, print it out
  if (localStorage.getItem('items')) {
      console.log('Current item:' + localStorage.getItem('items'));
      items = JSON.parse(localStorage.getItem('items'));
      cartArray.push(data);
      let concatArray = [...items, ...cartArray];
      console.log('cartArray:' + JSON.stringify(cartArray));
      localStorage.setItem('items', JSON.stringify(concatArray));
      // console.log(items);
  // If no data, add object to local storage
  } else {
      localStorage.setItem('items', JSON.stringify(data));
      console.log(localStorage);
  }
}

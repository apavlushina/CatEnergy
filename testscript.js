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

function saveToCart(data){
  const cart = localStorage;
  if (cart.getItem('items')) {
    console.log('we have items');
    let items = JSON.parse(cart.getItem('items'));
    console.log(items);
    // items.push(data);
    // cart.setItem('items', JSON.stringify(items));
    
  } else {
    console.log('we want to create items');
    
  }
  console.log('end of saveToCart');
}

// //Setting up local storage
// let items;

// //On page load, checks if local storage present or uses hardcoded array
// if (localStorage.getItem('items')) {
//     items = JSON.parse(localStorage.getItem('items'))
// } else {
//     items = arrayOfQuestions;
// }
// updateLocalStorage(items);

// // Syncing local storage and arrayOfQuestions
// function updateLocalStorage(items){
//     localStorage.setItem('items', JSON.stringify(items));
//     arrayOfQuestions = JSON.parse(localStorage.getItem('items'));
// };

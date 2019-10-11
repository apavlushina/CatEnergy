let buttons = Array.from(document.querySelectorAll('.button'));

for (let button of buttons) {
    button.addEventListener('click', () => {
        extractData(button.parentElement)
    });
}

function extractData(item) {
  let productName = item.querySelector('h3').innerHTML;
  let productPrice = item.querySelector('.price').innerHTML;
  //console.log(productPrice)
}


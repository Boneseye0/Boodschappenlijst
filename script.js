const table = document.getElementById('tab');
const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity');
const productTotalCost = document.getElementsByClassName('productTotalCost');
const totalCost = document.getElementById('totalCost');




const subtotal = () => {
    let total = 0
    for (let index = 0; index < productTotalCost.length; index++) {

        productTotalCost[index].innerHTML = (parseFloat(productPrice[index].innerHTML) * parseFloat(productQuantity[index].value)).toFixed(2);
        total += parseFloat(productTotalCost[index].innerHTML);
    }
    console.log(total);
    totalCost.innerHTML = '&euro; ' + total.toFixed(2);
}

const wijzigingen = () => {
    console.log('wijzigingen');
}

table.addEventListener("change", subtotal);

console.log(productPrice);
console.log(productQuantity);
console.log(productTotalCost);
console.log(totalCost);





/*

    
for (let j = 0; j < productQuantity.length; j++) {
    productQuantity[j].addEventListener("change", subtotal);

*/

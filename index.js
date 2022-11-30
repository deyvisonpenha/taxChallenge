/* 
  First step is define a variable called input, it is an array that 
  contains an object with the following fields: amount as number, 
  type as string, productName as string, price as number 
*/
var input = [{
  amount: 1,
  type: 'book',
  productName: 'book',
  price: 12.49
}, {
  amount: 1,
  type: 'music CD',
  productName: 'music CD',
  price: 14.99
}, {
  amount: 1,
  type: 'food',
  productName: 'chocolate bar',
  price: 0.85
}, {
  amount: 1,
  type: 'imported',
  productName: 'bottle of perfume',
  price: 27.99
}];

/* create a function called shoppingBaskets that will receive this input */
function shoppingBaskets(input) {
  let salesTaxes = 0;
  let total = 0;

  /* will map all input Items and calculate the appropriate tax */
  var output = input.map(function(item) {
    let taxITem = 0;
    
    if (item.type !== 'food' && item.type !== 'book' && item.type !== 'medical' && item.type !== 'imported') {
      taxITem = parseFloat((item.price*0.1).toFixed(2));
    }
    if (item.type === 'imported') {
      taxITem =  parseFloat((item.price*0.05).toFixed(2));
    }

    const totalItemPrice = parseFloat((item.price + taxITem).toFixed(2));
    total += totalItemPrice;
    item.price = totalItemPrice;
    salesTaxes += taxITem;
    
    return item;
  });
  return ({...output,salesTaxes, total})
}

console.log("receipt detail",shoppingBaskets(input))
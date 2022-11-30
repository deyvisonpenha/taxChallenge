/* 
  First step is define a variable called input, it is an array that 
  contains an object with the following fields: amount as number, 
  type as string, productName as string, price as number 
*/
const input = [{
  amount: 1,
  type: ['imported'],
  productName: 'bottle of perfume',
  price: 27.99
}, {
  amount: 1,
  type: ['perfume'],
  productName: 'bottle of perfume',
  price: 18.99
}, {
  amount: 1,
  type: ['medical'],
  productName: 'packet of headache pills',
  price: 9.75
}, {
  amount: 3,
  type: ['imported', 'food'],
  productName: 'boxes of chocolates',
  price: 11.25
}];

/* create a function called shoppingBaskets that will receive this input */
function shoppingBaskets(input) {
  let salesTaxes = 0;
  let total = 0;

  /* will map all input Items and calculate the appropriate tax */
  var output = input.map(function(item) {
    let taxITem = 0;
    
    if (!item.type.includes('food') && !item.type.includes('book') && !item.type.includes('medical')) {
      taxITem = parseFloat((item.price*0.1).toFixed(2));
    }
    if (item.type.includes('imported')) {
      taxITem = parseFloat((taxITem+item.price*0.05).toFixed(2));
    }

    const totalItemPrice = parseFloat((item.price + taxITem).toFixed(2))*item.amount;
    total = parseFloat((totalItemPrice+total).toFixed(2));
    item.price = totalItemPrice;
    salesTaxes = parseFloat((salesTaxes + taxITem).toFixed(2));
    
    return item;
  });
  return ({items: output, salesTaxes, total})
}

console.log("receipt detail",shoppingBaskets(input))

module.exports = shoppingBaskets;
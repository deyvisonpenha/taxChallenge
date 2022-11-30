/* 
  First step is define a variable called input, it is an array that 
  contains an object with the following fields: amount as number, 
  type as string, productName as string, price as number 
*/
const input = [{
  amount: 1,
  type: ['imported', 'food'],
  productName: 'box of chocolates',
  price: 10.00
}, {
  amount: 1,
  type: ['imported'],
  productName: 'bottle of perfume',
  price: 47.50
}];

/* create a function called shoppingBaskets that will receive this input */
function shoppingBaskets(input) {
  let salesTaxes = 0;
  let total = 0;

  /* will map all input Items and calculate the appropriate tax */
  var output = input.map(function(item) {
    let totalTaxITem = 0;
    
    if (!item.type.includes('food') && !item.type.includes('book') && !item.type.includes('medical')) {
      totalTaxITem = parseFloat((item.price*0.1).toFixed(2));
    }
    if (item.type.includes('imported')) {
      totalTaxITem = parseFloat((totalTaxITem+(item.price*0.05)).toFixed(2));
    }

    const totalItemPrice = parseFloat((item.price + totalTaxITem).toFixed(2))*item.amount;
    total = parseFloat((totalItemPrice+total).toFixed(2));
    item.price = totalItemPrice;
    salesTaxes = parseFloat((salesTaxes + totalTaxITem).toFixed(2));
    
    return item;
  });
  return ({items: output, salesTaxes, total})
}

console.log("receipt detail",shoppingBaskets(input))

module.exports = shoppingBaskets;
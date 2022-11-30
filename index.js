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

/*
  this is a hundle function to rounded up some calculations
*/
function roundedUp(number) {
  const formatNumber = +number.toFixed(2);
  const fraction = formatNumber.toString().split(".")[1];
  //check 0.05 precision
  if(fraction[1]>=5){
      return Math.round(formatNumber * 10)/10.00
  }
  return formatNumber
}

/* create a function called shoppingBaskets that will receive this input */
function shoppingBaskets(input) {
  let salesTaxes = 0;
  let total = 0;

  /* will map all input Items, calculate the appropriate tax and
      return the item with applied tax
   */
  var output = input.map(function(item) {
    let totalTaxITem = 0;
    
    if (!item.type.includes('food') && !item.type.includes('book') && !item.type.includes('medical')) {
      totalTaxITem = parseFloat((item.price*0.1).toFixed(2));
    }
    if (item.type.includes('imported')) {
      totalTaxITem = totalTaxITem + roundedUp(item.price*0.05);
    }
    const totalItemPrice = (item.price + totalTaxITem)*item.amount;
    total = parseFloat((totalItemPrice+total).toFixed(2));
    item.price = parseFloat(totalItemPrice.toFixed(2));
    salesTaxes = parseFloat((salesTaxes + (totalTaxITem*item.amount)).toFixed(2));
    
    return item;
  });
  return ({items: output, salesTaxes, total})
}

console.log("receipt detail",shoppingBaskets(input))

module.exports = shoppingBaskets;
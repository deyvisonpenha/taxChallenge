/*
  this is a hundle function to rounded up some calculations
*/
function roundedUp(number) {
  const formatNumber = +number.toFixed(2);
  const fraction = formatNumber.toString().split(".")[1];
  //check 0.05 precision
  if (fraction[1] >= 5) {
    return Math.round(formatNumber * 10) / 10.0;
  }
  return formatNumber;
}

/* create a function called calculateSalesTaxAndTotal that will receive this input */
function calculateSalesTaxAndTotal(input) {
  let salesTaxes = 0;
  let total = 0;
  /* will map all input Items, calculate the appropriate tax and
      return the item with applied tax
   */
  const items = input.map(function (item) {
    let totalTaxITem = 0;
    if (
      !item.type.includes("food") &&
      !item.type.includes("book") &&
      !item.type.includes("medical")
    ) {
      totalTaxITem = parseFloat((item.price * 0.1).toFixed(2));
    }
    if (item.type.includes("imported")) {
      totalTaxITem = totalTaxITem + roundedUp(item.price * 0.05);
    }
    const totalItemPrice = (item.price + totalTaxITem) * item.amount;
    total = parseFloat((totalItemPrice + total).toFixed(2));
    item.price = parseFloat(totalItemPrice.toFixed(2));
    salesTaxes = parseFloat(
      (salesTaxes + totalTaxITem * item.amount).toFixed(2)
    );
    console.log(`${item.amount} ${item.name}: ${item.price.toFixed(2)}`);

    return `${item.amount} ${item.name}: ${item.price.toFixed(2)}`;
  });
  console.log(`Sales Taxes: ${salesTaxes.toFixed(2)}`);
  console.log(`Total: ${total}`);

  return (
    items.join("\n") +
    `\nSales Taxes: ${salesTaxes.toFixed(2)}` +
    `\nTotal: ${total}`
  );
}

module.exports = calculateSalesTaxAndTotal;

const items = require("./constants/items");
const calculateSalesTaxAndTotal = require("./utils/taxCalculator");

const { input1, input2, input3 } = items;

const t = calculateSalesTaxAndTotal(input3);
console.log("-------");
console.log(t);
// calculateSalesTaxAndTotal(input2);
// console.log("-------");
// calculateSalesTaxAndTotal(input3);

const calculateSalesTaxAndTotal = require("./utils/taxCalculator");
const { input1, input2, input3 } = require("./constants/items");

describe("Write an application that prints out the receipt details", () => {
  test("Validate input 1", () => {
    const output =
      "2 book: 24.98\n1 music CD: 16.49\n1 chocolate bar: 0.85\nSales Taxes: 1.50\nTotal: 42.32";
    expect(calculateSalesTaxAndTotal(input1)).toEqual(output);
  });
  test("Validate input 2", () => {
    const output =
      "1 imported box of chocolates: 10.50\n1 imported bottle of perfume: 54.65\nSales Taxes: 7.65\nTotal: 65.15";
    expect(calculateSalesTaxAndTotal(input2)).toEqual(output);
  });
  test("Validate input 3", () => {
    const output =
      "1 imported bottle of perfume: 32.19\n1 bottle of perfume: 20.89\n1 packet of headache pills: 9.75\n3 imported box of chocolates: 35.55\nSales Taxes: 7.90\nTotal: 98.38";
    expect(calculateSalesTaxAndTotal(input3)).toEqual(output);
  });
  // test('Validate input 2', () => {
  //   // I manually calculate the value of tax on product prices and I believe that original output is incorrect
  //   const output2 = {
  //     items: [
  //       {
  //         amount: 1,
  //         type: ['imported', 'food'],
  //         productName: 'box of chocolates',
  //         price: 10.50
  //       },
  //       {
  //         amount: 1,
  //         type: ['imported'],
  //         productName: 'bottle of perfume',
  //         price: 54.65
  //       }
  //     ],
  //     salesTaxes: 7.65,
  //     total: 65.15
  //   }
  //   expect(shoppingBaskets(input2)).toEqual(output2);
  // });

  // test('Validate input 3', () => {
  //    // I manually calculate the value of tax on product prices and I believe that original output is incorrect
  //   const output3 = {
  //     items: [
  //       {
  //         amount: 1,
  //         type: ['imported'],
  //         productName: 'bottle of perfume',
  //         price: 32.19,
  //       }, {
  //         amount: 1,
  //         type: ['perfume'],
  //         productName: 'bottle of perfume',
  //         price: 20.89
  //       }, {
  //         amount: 1,
  //         type: ['medical'],
  //         productName: 'packet of headache pills',
  //         price: 9.75
  //       }, {
  //         amount: 3,
  //         type: ['imported', 'food'],
  //         productName: 'boxes of chocolates',
  //         price: 35.55
  //       }
  //     ],
  //     salesTaxes: 7.90,
  //     total: 98.38
  //   }
  //   expect(shoppingBaskets(input3)).toEqual(output3);
  // });
});

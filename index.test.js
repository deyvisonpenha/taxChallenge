const shoppingBaskets = require("./index");

const input1 = [{
  amount: 2,
  type: ['book'],
  productName: 'book',
  price: 12.49
}, {
  amount: 1,
  type: ['music CD'],
  productName: 'music CD',
  price: 14.99
}, {
  amount: 1,
  type: ['food'],
  productName: 'chocolate bar',
  price: 0.85
}];

const input2 = [{
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

const input3 = [{
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

describe("Write an application that prints out the receipt details", () => {
  test('Validate input 1', () => {
    const output1 = {
      items: [
        { amount: 2, type: ['book'], productName: 'book', price: 24.98 },
        {
          amount: 1,
          type: ['music CD'],
          productName: 'music CD',
          price: 16.49
        },
        {
          amount: 1,
          type: ['food'],
          productName: 'chocolate bar',
          price: 0.85
        }
      ],
      salesTaxes: 1.5,
      total: 42.32
    }
    expect(shoppingBaskets(input1)).toEqual(output1);
  });

  test('Validate input 2', () => {
    const output2 = {
      items: [
        {
          amount: 1,
          type: ['imported', 'food'],
          productName: 'box of chocolates',
          price: 10.50
        },
        {
          amount: 1,
          type: ['imported'],
          productName: 'bottle of perfume',
          price: 54.65
        }
      ],
      salesTaxes: 7.65,
      total: 65.15
    }
    expect(shoppingBaskets(input2)).toEqual(output2);
  });

  test('Validate input 3', () => {
    const output3 = {
      items: [
        {
          amount: 1,
          type: ['imported'],
          productName: 'bottle of perfume',
          price: 32.19,
        }, {
          amount: 1,
          type: ['perfume'],
          productName: 'bottle of perfume',
          price: 20.89
        }, {
          amount: 1,
          type: ['medical'],
          productName: 'packet of headache pills',
          price: 9.75
        }, {
          amount: 3,
          type: ['imported', 'food'],
          productName: 'boxes of chocolates',
          price: 35.55
        }
      ],
      salesTaxes: 7.90,
      total: 98.38
    }
    expect(shoppingBaskets(input2)).toEqual(output2);
  });

});

const input1 = [
  { name: "book", price: 12.49, amount: 2, type: ["book"] },
  { name: "music CD", price: 14.99, amount: 1, type: ["music"] },
  { name: "chocolate bar", price: 0.85, amount: 1, type: ["food"] },
];

const input2 = [
  {
    name: "imported box of chocolates",
    price: 10.00,
    amount: 1,
    type: ["food", "imported"],
  },
  {
    name: "imported bottle of perfume",
    price: 47.50,
    amount: 1,
    type: ["imported", "perfume"],
  },
];

const input3 = [
  {
    amount: 1,
    type: ["imported"],
    name: "imported bottle of perfume",
    price: 27.99,
  },
  {
    amount: 1,
    type: ["perfume"],
    name: "bottle of perfume",
    price: 18.99,
  },
  {
    amount: 1,
    type: ["medical"],
    name: "packet of headache pills",
    price: 9.75,
  },
  {
    amount: 3,
    type: ["imported", "food"],
    name: "imported box of chocolates",
    price: 11.25,
  },
];

module.exports = { input1, input2, input3 };

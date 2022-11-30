# torc Challenge
This is my solution for a Torc's challenge made in javascript.

In the index.js have all the logical handle the problem. In this file is defined a input that have all mocked data, and
the function responsable to calculate the receipt details.

## How to execute
You need to have installed NodeJs and be in the same folder (in terminal), and run: 

```
node index.js
```

## Test Plan
To execute the test file first you need to install globally Jest with: 

```
npm install -g jest
```
or
```
yarn global add jest
```

After that step you can run:

```
npm run test
```
or
```
yarn test
```

## Problem Statement

This problem requires some kind of input. You are free to implement any mechanism for feeding the input into your solution. You should provide sufficient evidence that your solution is complete by, as a minimum, indicating that it works correctly against the supplied test data.

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.

When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.



Write an application that prints out the receipt details for these shopping baskets

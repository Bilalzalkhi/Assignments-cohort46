'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  chips: 0.99,
  beer: 1.75,
  cake: 5.56,
  wine: 16.1,
  peanut: 4.39,
};

function calculateTotalPrice(obj) {
  const totalPrice = Object.values(obj).reduce((acc, curr) => acc + curr, 0);
  return `Total: €${totalPrice.toFixed(2)}`;

  beers: 1.99,
  chips: 1.99,
  cake: 1.50,
  redBull: 1.99,
  nuts: 0.99
};

function calculateTotalPrice(cartForParty) {
 const amount = Object.values(cartForParty);
 const totalAmount = amount.reduce((acc,cur)=> {
   return acc+=cur;
  },0)

  
  return(totalAmount);
}
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const expected = 1;
  const actual = calculateTotalPrice.length;
  console.assert(actual === expected);

  console.assert(calculateTotalPrice.length === 1);

}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: €28.79';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(actual === expected);

  console.assert(JSON.stringify(calculateTotalPrice(cartForParty)) === '8.46');

}

function test() {
  test1();
  test2();
}

test();

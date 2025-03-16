'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`===forEach===`);
movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`Movement ${index}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index}: You withdrew ${Math.abs(movement)}`);
  }
});

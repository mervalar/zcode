//exo1

function greet() {
  console.log("hello word!");
}
greet();
//Function with Parameters

function addNumber(num1, num2) {
  let sum = 0;
  sum = num1 + num2;
  return sum;
}
console.log(addNumber(5, 6));

//Function with Default Parameter

function square(number = 2) {
  return number * number;
}
console.log(square(3));

//Function Returning an Array

function findEvenNumbers(start, end) {
  let table = [];
  for (let i = start; i < end; i++) {
    if (i % 2 === 0) {
      table.push(i);
    }
  }
  return table;
}
console.log(findEvenNumbers(10, 100));

//Recursive Function

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    let fact = n * factorial(n - 1);

    return fact;
  }
}

console.log(factorial(4));

//Return the number (count) of vowels in the given string.

function countVowel(name) {
  let sum = 0;
  let vowel = ["a", "i", "u", "o", "e"];

  for (let i = 0; i < vowel.length; i++) {
    for (let j = 0; j < name.length; j++) {
      if (name[j] === vowel[i]) {
        sum = sum + 1;
      }
    }
  }
  return sum;
}
console.log(countVowel("merveille"));

//Return the number (count) of vowels in the given string with include fuction.

function include() {
  let vowel = ["a", "i", "u", "o", "e"];
  for (let i = 0; i < vowel.length; i++) {
    if (vowel.includes(word[i])) {
      console.log();
    }
  }
}
include();

//You get an array of numbers, return the sum of all of the positives ones.

function sum(total = 0) {
  let numberr = [1, -4, 7, 12];
  for (let n = 0; n < numberr.length; n++) {
    if (numberr[n] > 0) {
      total = total + numberr[n];
      console.log(total);
    } else {
      console.log(0);
    }
  }
  return total;
}
sum();

//reverse a string

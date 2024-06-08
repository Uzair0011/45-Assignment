// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let name1: string = "Uzair";
let name2: string = "Uzair Ahmed";
let name3: string = "Mr. Uzair Ahmed";

if (name1 == name3) {
  console.log("both are equal");
} else {
  console.log("both are not equal");
}
if (name1 != name3) {
  console.log("both are equal");
} else {
  console.log("both are not equal");
}

let num1 = 18;
let num2 = 20;

if (num1 == 18) {
  console.log("you are eligible");
} else {
  console.log("you are not eligible");
}
if (num2 == 17) {
  console.log("you are eligible");
} else {
  console.log("you are not eligible");
}

if (num1 != 18) {
  console.log("you are eligible");
} else {
  console.log("you are not eligible");
}
if (num2 != 17) {
  console.log("you are eligible");
} else {
  console.log("you are not eligible");
}

if (num1 <= num2) {
  console.log("younger");
} else {
  console.log("older");
}
if (num2 <= num1) {
  console.log("younger");
} else {
  console.log("older");
}

if (num1 == 18 && num2 == 20) {
  // && Operator check both condition
  console.log("you are right");
} else {
  console.log("you are not right");
}

if (num1 == 18 && num2 == 39) {
  // && Operator check both condition
  console.log("you are right");
} else {
  console.log("you are not right");
}

if (num1 == 18 || num2 == 20) {
  // Or Operator ||  any one condition check
  console.log("you are right");
} else {
  console.log("you are not right");
}

if (num1 == 45 || num2 == 39) {
  // Or Operator ||  any one condition check
  console.log("you are right");
} else {
  console.log("you are not right");
}

let country: string[] = ["Pakistan", "USA", "Canada", "UAE", "Saudia"];
if (country.includes("Pakistan")) {
  console.log("This is in Array List");
} else {
  console.log("This is not in Array List");
}
let country1: string[] = ["Pakistan", "USA", "Canada", "UAE", "Saudia"];
if (country1.includes("Turkey")) {
  console.log("This is in Array List");
} else {
  console.log("This is not in Array List");
}

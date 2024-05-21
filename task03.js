// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName1 = "Uzair Ahmed";
// console lowercase
console.log("Lowercase:", personName1.toLowerCase());
// console uppercase
console.log("Uppercase:", personName1.toUpperCase());
// console titlecase
console.log("Tilecase:", personName1.replace(/\b\w/g, c => c.toUpperCase()));
export {};

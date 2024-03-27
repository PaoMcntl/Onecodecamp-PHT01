//Array

let fruit = "Mango";
console.log(fruit);
console.log (typeof(fruit));

let fruits = ["Mango", "Banana", "Apple", "Cherry"]; //Index
console.log (fruits);
//Acess elements
console.log (fruits[2]);
console.log (fruits[7]); //undefined

//Length of he Index
console.log(fruits.length);

//Update elements
fruits [1] = 'Avocado';
console.log (fruits);

//Adding elements
//Add elements at the end of array.
fruits.push("Dewberry");
console.log (fruits);

//Add elements at the beginning of the array.
fruits.unshift("Banana");
console.log(fruits);

//Deleting elements
//Delete element at the end of the array.
fruits.pop();
console.log(fruits);

//Delete elements at the beginning of the array.
fruits.shift();
console.log(fruits);

//Sorting
//Alphabetically
fruits.sort();
console.log(fruits);

//Reverse
fruits.reverse();
console.log(fruits);

//Searching
//indexOf Method
let index = fruits.indexOf('Avocado');
console.log('Index:',index);

//Check if an element is present
//Includes Method
console.log("Is Apple in fruits:", fruits.includes("Apple"));

//Join Method
console.log("Joined fruits:", fruits.join("-"));

//Slice Method
//let sliced_fruits = fruits.slice(1, 3);
//console.log(sliced_fruits);
//console.log(fruits);

//Splice Method
//let splice_fruits = fruits.splice(0, 2);
///console.log(sliced_fruits);

//Looping through the elements
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

//For loop
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

//Reverse For loop
// for (let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

//For Of loop
for (fruit of fruits){
    console.log(fruit);
}

console.log("Welcome, now with the number you insert I will add it than I will give you the result");


const num1 = Math.floor(Math.random() * 10) + 1;


/* Here we are using a random number

Math.random() gives a decimal between 0 and 0.999...

Math.random() * 10 gives a decimal from 0 to 9.999...

Math.floor(...) turns that into an integer from 0 to 9

+ 1 shifts it to 1 through 10*/
const num2 = Math.floor(Math.random() * 10) + 1;



let result = num1 + num2;
// Here it logs the types and the results
console.log("Your number is:" + result); // 42
console.log(typeof num1); // string
console.log(typeof num2); // number
console.log(typeof result); // number


let num3 = Math.floor(Math.random() * 10) + 1;


if (num3 === result) {
    console.log("The number is equal to the result");

}
else {
  console.log("It's not the same number try again")
}

console.log("The right number was:" + num3);




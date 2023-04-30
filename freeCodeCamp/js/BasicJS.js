// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
// -----------------------
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
// -----------------------
let catName = "Oliver";
let catSound = "Meow!";
console.log(catName, catSound);
// -----------------------
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
// -----------------------
const sum1 = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;
let myVar = 87;
// -----------------------
// Only change code below this line
myVar++;
// Only change code below this line
myVar--;
// -----------------------
const ourDecimal = 5.7;
// Only change code below this line
let myDecimal = (5.7);
// -----------------------
let a = 3;
let b = 17;
let c = 12;
// Змініть код лише під цим рядком
a += 12;
b += 9;
c += 7;
a -= 6;
b -= 15;
c -= 1;
a *= 5;
b *= 3;
c *= 10;
a /= 12;
b /= 4;
c /= 11;
// -----------------------
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Змініть цей рядок
// -----------------------
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';
//------------------------
var myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";
// Змініть цей рядок
//------------------------
const myStr3 = "This is the start. " + "This is the end."; // Змініть цей рядок
//------------------------
let myStr4 = "This is the first sentence. ";
myStr += "This is the second sentence.";
//------------------------
// Змініть код лише під цим рядком
const myName = "Ihor";
const myStr5 = "My name is " + myName + "and I am well!";
//------------------------
// Змініть код під цим рядком
const someAdjective = "easy";
let myStr6 = "Learning to code is ";
myStr6 += someAdjective;
//------------------------
// Налаштування
let lastNameLength = 0;
const lastName = "Lovelace";
// Змініть код лише під цим рядком
lastNameLength = lastName.length;
console.log(lastNameLength);
//------------------------
const myArray = [50, 60, 70];
console.log(myArray[0]);
const myData = myArray[0];
//-------------------
// Налаштування
const myArray1 = [18, 64, 99];
// Змініть код лише під цим рядком
myArray1[0] = 45;
const myArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  const myData1 = myArray2[2][1];
  //-------------------
const myArray4 = [["John", 23], ["cat", 2]];
// Змініть код лише під цим рядком
myArray4.push(["dog", 3]);
  //-------------------// .pop() заміна осанього елемента
const myArray5 = [["John", 23], ["cat", 2]];
// Змініть код лише під цим рядком
const removedFromMyArray = myArray5.pop("dog", 1);
console.log(removedFromMyArray);
console.log(myArray5);
// Налаштування
const myArray6 = [["John", 23], ["dog", 3]];
myArray6.shift();
// Змініть код лише під цим рядком
myArray6.unshift(["Paul", 35]);
//-------------------//
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
//-------------------//
function timesFive(num) {
  return num * 5;
}
const answer = timesFive(3);
//-------------------//
function myLocalScope() {
  // Змініть код лише під цим рядком
let myVar = "foo";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
//-------------------//
// myVar не визначений за межами myLocalScope
console.log('outside myLocalScope', myVar);
//-------------------//
const outerWear = "T-Shirt";
function myOutfit() {
  // Змініть код лише під цим рядком
  const outerWear = "sweater";
  // Змініть код лише над цим рядком
  return outerWear;
}
myOutfit();
//-------------------//
let sum = 0;
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();
//-------------------//
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
//-------------------//
function nextInLine(arr, item) {
  // Змініть код лише під цим рядком
  arr.push(item);
  var removed = arr.shift();
  return removed; 
}

let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//-------------------//
function welcomeToBooleans() {
  return true;
 }
 welcomeToBooleans();
 //-------------------//
 function trueOrFalse(wasThatTrue) {
if(wasThatTrue ) {
  return "Yes, that was true";
}
return "No, that was false";
}
 //-------------------//
 function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);
 //-------------------//
 function testLessThan(val) {
  if (val < 25) {  
    return "Under 25";
  }
  if (val < 55) {  
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);
 //-------------------//
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);
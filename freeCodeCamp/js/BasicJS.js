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
 //-------------------//
function testLogicalOr(val) {
  if (val > 20 || val < 10) {
    return "Outside";
}
return "Inside";
}
testLogicalOr(15);
//-------------------//
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);
//-------------------//
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);
//-------------------//
function testSize(num) {
if(num < 5) {
  return "Tiny"; 
} else if(num < 10) {
  return "Small";
} else if(num < 15) {
  return "Medium";
} else if(num < 20) {
  return "Large";
} else {
  return "Huge";
}
  return "Change Me";
}
testSize(7);
//-------------------//
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par",
              "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
if (strokes == 1) {
    return names[0];
} else if(strokes <= par -2){
  return names[1];
} else if(strokes === par -1) {
  return names[2];
} else if(strokes === par) {
  return names[3];
} else if(strokes === par +1) {
  return names[4];
} else if(strokes === par +2) {
  return names[5];
} else {
  return names[6];
}         
  return "Change Me";
}
golfScore(5, 4);
//-------------------//
function caseInSwitch(val) {
  let answer = "";
switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}
caseInSwitch(1);
//-------------------//
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
        answer = "stuff";
        break;   
  }
  return answer;
}
switchOfStuff(1);
//-------------------//
function sequentialSizes(val) {
  let answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}
  return answer;
}
sequentialSizes(1);
//-------------------//
function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99: 
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine"
  }
  return answer;
}
chainToSwitch(7);
//-------------------//
function abTest(a, b) {
if (a < 0 || b < 0) {
  return undefined;
}
 return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);
//-------------------//

//-------------------//

//-------------------//

//-------------------//

//-------------------//

//-------------------//

//-------------------//
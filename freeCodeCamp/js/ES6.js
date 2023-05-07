function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
//---------------------//
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
  console.log(s);
//Object.freeze для запобігання мутації даних.//
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    try {
      Object.freeze(MATH_CONSTANTS);
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
//---------------------//
const magic = () => {
    return new Date();
  }
//---------------------//
// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
 }
 console.log(myConcat([1, 2], [3, 4, 5]));
//---------------------//
const increment = (number, value = 1) => number + value;
console.log(increment(6, 3));
console.log(increment(0))
//---------------------//
// const sum = (x, y, z) => {
    //   const args = [x, y, z];
    //   let total = 0;
    //   for (let i = 0; i < args.length; i++) {
    //     total += args[i];
    //   }
    //   return total;
    // }
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  
  console.log(sum(1, 3, 3, 23, ));
//---------------------//
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Скопіюйте весь вміст arr1
console.log(arr2);
//---------------------//
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  // const today = HIGH_TEMPERATURES.today;
  // const tomorrow = HIGH_TEMPERATURES.tomorrow;
  const {today, tomorrow} = HIGH_TEMPERATURES;
//---------------------//
const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  // const highToday = HIGH_TEMPERATURES.today;
  // const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES1;
//---------------------//
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  }; 
  // const lowToday = LOCAL_FORECAST.today.low;
  // const highToday = LOCAL_FORECAST.today.high;
  const {today: {low: lowToday, high: highToday1}} = LOCAL_FORECAST;
//---------------------//
let a = 8, b = 6;
 [a,b] = [b,a];
console.log(a, b);
//---------------------//
function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list; 
    return shorterList;
  }
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
//---------------------//
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  }
  // const half = (stats) => (stats.max + stats.min) / 2.0; 
  const half = ({max, min}) => ((max + min) / 2.0);
//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

//---------------------//

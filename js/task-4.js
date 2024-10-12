// function counter(start, end) {
//     const arr = [];
  
//     for (let i = start; i <= end; i++) {
//       const find5 = String(i).split('').find(item => item === '5');
  
//       if (find5 === undefined) {
//         arr.push(i);
//       }
//     }
  
//     return arr.length;
//   }
  
//   console.log(counter(1, 6));








// const start = 2;
// const end = 11;
// let number;
// for (let i = start; i <= end; i+=1) {
//   if ( i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number)
// const start = 8;
// const end = 17;
// const divisor = 3;
// let number;




//  function findNumber(start, end, divisor) {
//     let number;
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return number = i;
      
//       }
//     }
// }
//     console.log(findNumber(8, 17, 3));
// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];

//   return [lastElementIndex, lastElement];
// }

// function getExtremeElements(array) {
//   const firstElementIndex = [0]
//     const firstElement = array[0];
//     const lastElementIndex = array.length - 1;
//     const lastElement = array[lastElementIndex];
    
//     return [firstElement, lastElement];
//   }

//  console.log(getExtremeElements(["apple", "peach", "orange", "lemon"]));

//  console.log(getExtremeElements([1, 3, 5, 9]));

 

// function getCommonElements(array1, array2) {
// let arr = [];
// for (let index = 0; index < array1.length; index++) {
//   if(array2.includes(array1[index])) {
//     arr.push(array1[index]);
//   }
// }
// return arr;
// }

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1[1] = 1;
// arr2[2] = 1;
// console.log(arr2); //Обидва вирази: arr1[1] = 1; і arr2[2] = 1; змінюють значення елементів одного й того самого масиву. 
// Отже, фінальне значення змінної arr2 буде [1, 1, 1].


// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const result = arr1 === arr2;
// console.log(result)   // У прикладі масиви містять однакові значення, але оператор === поверне false,
//  тому що він перевіряє рівність посилань на масиви, а не самих елементів усередині масивів.


// const array= [false];
// const result = array ? "A" : "B";
// console.log(result);
//При перетворенні масиву в логічне значення масив перетворюється на true. Отже, виконається вираз тернарного 
//оператора для істинної умови, а саме змінній result буде присвоєно значення "A".

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   const totalValue = words.length * pricePerWord;
  
//   return totalValue;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat( newClients );


// console.log(allClients)

// function getSlice(array, value) {
//   const array = ["Mango", "Poly", "Ajax"];
//   const value = array[array.length];
  
//  if (value [0]) {
//    return array.indexOf(value);
//  } else {
//    return array[];
//  }
// }
// function getSlice(array, value) {
//   const array = ["Mango", "Poly", "Ajax"];
//   const value = array[array.length];
  
//  if (getSlice [0]) {
//    return array.indexOf(value);

//  }
// }


// function getSlice(array, value) {
//   if(array.indexOf(value) === -1) 
//   { for (let i = 0; i <= array.length; ) {
//     return array.indexOf(value);
//   }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));

//  @param {number[]} nums
//  @param {number} target * @return {number}
 
// var searchInsert = function(nums, target) {
//   if (nums.indexOf(target) === -1) {    
//     for (let i = 0; i <= nums.length; ) {
//     if (nums[i] < target) { 
//       i++;
//     } else {          
//       return i
//     }    }
// } else {    
//   return nums.indexOf(target);
// }
// };
// console.log(searchInsert(nums, target));
// const user = {
//   name: "Peter",
//   age: 30,
//   pet: "cat",
//   "Wether is good": false,
// };


// console.log(user["Wether is good"]);
 


// function calcAverageCalories(days) {
//    const sum = 0;
//    for(const i = 0; i < days.length; i++) {
//        sum += days[i];
//    }
//    return sum / days.length
//   }
// function calcAverageCalories(days) {
//   let sum = 0 
//   for (let i = 0; i < days.length; i++) {
//     sum += days[i].calories;
//   }
//   return sum / days.length
// }
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

function calcAverageCalories(days) {
  let sumCalories = 0;
  if(days.length === 0){
    return 0;
  }
  for(let daysCalories of days) {
      sumCalories += daysCalories.calories;
  }
  return sumCalories / days.length;
}
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0
  
// function averageСost(arr) {
//   return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length; 
// }

// console.log(averageСost([33, 46, 12, 19]));
// console.log(averageСost([3, 6, 2, 9]));
// console.log(averageСost([6, 6, 32, 9]));
// console.log(averageСost([]));

// const data = [
//   {name: "Ann", age: 24},
//   {name: "Bred", age: 27},
//   {name: "Grace", age: 21},
//   {name: "Alex", age: 30},
//   {name: "Robby", age: 25}
// ];

// let avg = data.reduce((r,i) => r + i.age, 0) / (data.length || 1);
// console.log(avg);
// console.log();

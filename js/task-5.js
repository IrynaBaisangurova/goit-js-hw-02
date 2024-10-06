
// function  getSubscriptionPrice(type) {
//     let price;
//     switch (type) {
//         case 'starter': price = 0;
//             break;
//         case 'professional': price = 20;
//             break;
//         case 'organization': price = 50;
//             break;
      
//         default:
//             return 'Invalid subscription type!';
//     }
//     return `${price}`;
//   }


// console.log(getSubscriptionPrice("professional"))  // повертає число 20
// console.log(getSubscriptionPrice("organization")) // повертає число 50
// console.log(getSubscriptionPrice("starter")) // повертає число 0
// console.log(getSubscriptionPrice("random")) // повертає рядок "Invalid subscription type!"
// console.log(getSubscriptionPrice("premium")) // повертає рядок "Invalid subscription type!"




// function checkAccess(subType) {

// 	if (subType == 'pro' || subType == 'starter') {
// 			return true;
// 	} else if (subType == 'pro' || subType == 'starter'){
// 			return false;
// 	} else if (subType == 'vip' || subType == 'free'){
// 			return true;
// 	} else if (subType == 'vip' || subType == 'free') {
// 			return false;
// 	}			
// }
// function checkAccess(subType) {
//   const check = subType === "pro" || subType === "vip"; 

//   return check;
// }
// console.log(checkAccess("pro"))  //возвращаетtrue
// console.log(checkAccess("starter"))  //возвращаетfalse
// console.log(checkAccess("vip"))  //возвращаетtrue
// console.log(checkAccess("free")) //возвращаетfalse


// function toggleModalVisibility(isVisible) {
// 	const isModal = isVisible === true && ! false ; 
// 	return !isModal;
// }

// function getSubstring(string, length) {
//   let stringName = "Hello world";
  
//   return stringName. slice ( "Hello world", length )
  
// }

// console.log(getSubstring("Hello world", 3)) //возвращает"Hel"
// console.log(getSubstring("Hello world", 5)) //возвращает"Hello"
// console.log(getSubstring("Hello world", 8)) //возвращает"Hello wo"
// console.log(getSubstring("Hello world", 11)) //возвращает"Hello world"
// console.log(getSubstring("Hello world", 0)) //возвращает""


// function normalizeInput(input, to) {
//   if(to === 'lower'){
//     return input.toLowerCase()
//   }
//   else if(to === 'upper'){
//     return input.toUpperCase();
//   } 
     
//   }
//   console.log(normalizeInput('Big SALE', 'upper'));
//   console.log(normalizeInput('Big SALE', 'lower'));



// function checkForName(fullName, firstName){
//    fullName = fullName.toLowerCase();
//    firstName = firstName.toLowerCase();
//  if(fullName.toLowerCase().includes(firstName.toLowerCase())){
//    return true
//  }else{
   
//    return false
//  }
// }


//    console.log(checkForName("Jason Neis", "Jason"));
//    console.log(checkForName("Jason Neis", "jAsOn"));
//    console.log(checkForName("Caty Stars", "cAtY"));    
//    console.log(checkForName("Jason Neis", "Jacob"));


// function getFileName(file){
//   const ext = file.indexOf(".");
//   if(ext === -1){
//       return file 
//     }else{
//       return file.slice(0, ext);
//    }
// }
//  console.log(getFileName("css.css"));

//  console.log(checkFileExtension("index.html", ".html"));
//   console.log(checkFileExtension("index.html", ".js"));
//  console.log(checkFileExtension("app.js", ".js"));

// function createFileName(name, ext) {
  
//    return `${name.trim()}.${ext.trim()}`;
// }

//   console.log(createFileName(" order ", "txt"));
//   console.log(createFileName(" index", "  js"));

  
//   function isNumberInRange(start, end, number) {
// 	return number >= start && number <= end;
// }
// console.log(isNumberInRange(10, 30, 17)) //возвращаетtrue
// console.log(isNumberInRange(10, 30, 5)) //возвращаетfalse
// console.log(isNumberInRange(20, 50, 24)) //возвращаетtrue
// console.log(isNumberInRange(20, 50, 76)) //возвращаетfalse


// function calculateTotal(number) 
// { let sum = 0; 
//   for (let i = 0; i <= number; i += 1) { sum += i; } 
//    return sum
// } 
// function calculateTotal(number) {
//   let sum = 0;

//   for(let i = 1; i <= number; i++){
//     sum += i;
//   }

//   return sum;
// }

//  function calculateTotal(number) {
//   let sum = 0;
//   let index = 0;
//   while (index <= number) {
//     sum = sum + index;
//     index = index + 1;
//   }
//   return sum;
// }


// console.log(calculateTotal(1)); 
// console.log(calculateTotal(3)); 
// console.log(calculateTotal(0)); 
// console.log(calculateTotal(18)); 
// console.log(calculateTotal(24)); 
// console.log(calculateTotal(56)); 


// function calculateEvenTotal(number) {
//    let sum = 0; 
//    for (let i = 0; i <= number; i += 2) { sum += i; } 
//   return sum; 
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));



// function  findNumber(startNumber, endNumber) {
//   const start = startNumber; 
//   const end = endNumber; 
//   let number;

//   for (let i = 5; i <= endNumber; i+=1) {
 
//   if (i === 5) {
//     return number;
//     break
//   }
// }
// }
// console.log(findNumber(2, 14));

// const fruits = ["Яблуко", "Груша", "Апельсин"];
// const shoppingCart = fruits;
// shoppingCart.push("Банан");

// console.log(fruits.length);

// function getOrderQuantity(order) {
//   const order = [];
//   const shoppingCart = order.length;
//   if (order.length !== 0) 
//       return length
//    }
  //  consol.log(getOrderQuantity(order));
  const order = ["apple", "peach", "pear", "banana"];
  // getOrderQuantity(order);
  
  // order.length = 5; // устанавливает длину массива 5.
  // getOrderQuantity(order);
  
  // function getOrderQuantity(order)  {
   
  //   if (order.length > 0) {
  //     return length;
  //   }
   
  //   }

  //   consol.log(getOrderQuantity(order));


  // function createArrayOfNumbers(min, max) {
  //   const numbers = [];
  //   for(let i = min;  i <= max; i++)
  //     numbers.push(i);
  //   return numbers;
  // }
  
  // console.log(createArrayOfNumbers(1,3));
  // console.log(createArrayOfNumbers(14,17));
  // console.log(createArrayOfNumbers(29,34));


// function highAndLow(numbers) {
//   let array = numbers.split(' ').map(i => +i);
//   let max = array[0];
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return {min, max};
// }
// console.log(highAndLow('1 2 3 4 5'));

// function createReversedArray() {
//   const reversedArray = Array.from(arguments).toReversed();
//   return reversedArray;
// }
// console.log(createReversedArray(164, 48, 291));


// function calculateTax(amount, taxRate = 0.2) {
//   const sum = amount;
//   const tax = taxRate;

  
//   return sum * tax;
// }
// console.log(calculateTax(100, 0.3));
// console.log(calculateTax(300));

// function slugify(title) {

//   return title.toLowerCase().split(' ').join('-');
// }

// function slugify(title) {
//    return title.toLowerCase().replaceAll(' ', '-');

// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   newArray.splice(maxLength);
//   return newArray;
// }
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   newArray.splice(maxLength);
//     if(length > maxLength) {
//     return newArray.slice(maxLength);
//     } else {
//       return newArray;
//     }
//   }


//  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
//  console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
//  console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
//  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
//  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
//  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

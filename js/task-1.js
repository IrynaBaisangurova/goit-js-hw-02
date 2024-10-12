

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//        let message;
//        let totalPrice = quantity * pricePerDroid;
     
//        if(totalPrice > customerCredits){
//        message = 'Insufficient funds!';
//        } else {
//         customerCredits = customerCredits - totalPrice;
//         message = `You ordered ${quantity} droids worth ${totalPrice} credits!`; 
//        }
   
//        return message;
//      }
     

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 }
// ];
  
// function getAllPropValues(propName) {
//   return (!products.length || !(propName in products[0]))? 
//     [] : products.map(i => i[propName]);
// }

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 }
//   ];
//   let valueArray = [];
   
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       valueArray.push(product[propName]);
//     }
//   }
//   return valueArray;
// }
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
// const propValues = [];

// for (const product of products) {
//   if (product.hasOwnProperty(propName)) {
//     propValues.push(product[propName]);
//   }
// }
// return propValues;
// }
  
   
// console.log(JSON.stringify(getAllPropValues('name')));
// console.log(JSON.stringify(getAllPropValues('price')));
// console.log(JSON.stringify(getAllPropValues('quantity')));
// console.log(JSON.stringify(getAllPropValues('category')));


  // function calculateTotalPrice(productName) {
  //   const products = [
  //     { name: "Radar", price: 1300, quantity: 4 },
  //     { name: "Scanner", price: 2700, quantity: 3 },
  //     { name: "Droid", price: 400, quantity: 7 },
  //     { name: "Grip", price: 1200, quantity: 9 },
  //   ];
  //     for(const product of products) {
  //    const totalPrice = product.price * product.quantity;
  //     if(product.hasOwnProperty(propName)){
  //       return totalPrice;
  //      } else {
  //       return `Product ${productName} not found!`;
  //      }
  //   }
  // }
function calculateTotalPrice(productName){
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (let product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
        }
      }    
      return `Product ${productName} not found!`;
};

      
    
  
  // for(const product of products){ 
  //   if(products.find(p => p.name == productName)){
  //     return product.price * product.quantity;
  //   }else{
  //     return `Product ${productName} not found!`;
  //   }
     
  // }

  
  //     
     
  //  };


  console.log(calculateTotalPrice("Radar"));
  console.log(calculateTotalPrice("Scanner"));
  console.log(calculateTotalPrice("Droid"));
  console.log(calculateTotalPrice("Grip"));
  console.log(calculateTotalPrice("Blaster"));

//   for(const product of products) {
//     const totalPrice = product.price * product.quantity;
//      if(productName === product.name){
//        return totalPrice;
//       } else {
//        return `Product ${productName} not found!`
//       }
//    }
//  }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = apartment[key];
// const keys = Object.keys(apartment);

// console.log(keys);
// console.log(values);


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);




// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//     for (const key in salaries) {
//     totalSalary += salaries[key];
//     }
//     console.log("🚀 ~ countTotalSalary ~ totalSalary:", totalSalary);
//     return totalSalary;
// }

// countTotalSalary({}) //повертає 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) //повертає 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) //повертає 400




// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];


// for (const product of products) {
  
//     if (product.name === productName) {
//         console.log(product.price);
//         // return product.price;
//     } else {
//         // return null;
//         console.log(null);
//     }
//     }
//     }

// console.log(getProductPrice("Radar")); //повертає 1300.
// console.log(getProductPrice("Grip")); //повертає 1200.
// console.log(getProductPrice("Scanner")); //повертає 2700.
// console.log(getProductPrice("Engine")); //повертає null.
// console.log(getProductPrice("Droid")); //повертає 400.



// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//  const propValues = [];

//   for (const product of products) {
//     if (product(propName)) {
//       propValues.push(product[propName]);
//     }
//   }

//     //   return propValues;
//     console.log(propValues)
// }

// getAllPropValues("name") //повертає ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity") //повертає [4, 3, 7, 9]
// getAllPropValues("price") //повертає [1300, 2700, 400, 1200]
// getAllPropValues("category") //повертає []





// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//     for (const product of products) {
//         if (product.name === productName) {
//             // console.log(product.quantity * product.price);
//             return product.quantity * product.price
//         } else {
//             return `"Product ${productName} not found!"`
//         }
  
// }
    
// }

// console.log(calculateTotalPrice("Radar")); //повертає 5200
// console.log(calculateTotalPrice("Droid")); //повертає 2800
// console.log(calculateTotalPrice("Grip")); //повертає 10800
// console.log(calculateTotalPrice("Scanner")); //повертає 8100




// const atTheOldToad = {
//   potions: [],

//   getPotions() {
//     return "List of all available potions";
//   },

//   addPotion(potionName) {
// 		return `Adding ${potionName}`;
//   },
// };

// // Виклики методів
// console.log(atTheOldToad.getPotions()) //повертає рядок "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility")) //повертає рядок "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion")) //повертає рядок "Adding Power potion"
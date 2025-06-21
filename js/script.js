'use strict';
// const weekdays = ['mon', 'tues', 'wednes', 'thurs', 'fri', 'sat', 'sun'];
// destructuring করে মান বের করে সেটা key হিসেবে বসানো যায়,
// কিন্তু destructuring টা আলাদা করে করতে হয়, তারপর সেই ভেরিয়েবলটাকে key বানাতে হয়।
//const [firstDay, ...rest] = [...weekdays];
// // console.log(firstDay);
// const day = weekdays[1];
// const newOpeningHours = {
//   [firstDay]: {
//     open: 12,
//     close: 22,
//   },
//   [day]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[2]]: {
//     //computed property name with the global array and using as key
//     open: 11,
//     close: undefined,
//   },
//   [`dayNo-${2 + 2}`]: {
//     //just demo that we can also rite key name with a template literal
//     open: 0, //open 24 hours
//     close: 24,
//   },
// };
// console.log(newOpeningHours);
const restaurant = {
  name: 'Classico Italiano',
  loaction: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //old way to add a obj in a object
  // nOpeningHours: newOpeningHours,
  // OR ES6 enhanced obj literals to add a obj
  //newOpeningHours,
  openingHours: {
    thurs: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 24,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //old way to write method
  },
  orderDelivery(obj) {
    console.log(obj); //es6 method writing
  },
  // orderDelivery: function ({
  //   time = '20:00',
  //   address,
  //   mainIndex = 0,
  //   starterIndex = 0,
  // }) {
  //   console.log(
  //     `Order Received : ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}, will be delivered to : ${address} at ${time}, `
  //   );
  // },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//work with strings 3

//repeat
// const message = ' Bad Weather ';
// console.log(message.repeat(3));
// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(2);
//split and join

//masking credit card Advanced

// const number = 1234567890123456;
// const maskedCreditCard = function (number) {
//   const str = number + '';
//   let newStr = '';
//   for (let i = 0; i < str.length; i += 4) {
//     newStr += str.slice(i, i + 4) + ' ';
//   }
//   let newStr2 = newStr.trim().split(' ');
//   for (let i = 0; i < newStr2.length - 1; i++) {
//     newStr2[i] = '****';
//   }
//   const masked = newStr2.join(' ');
//   console.log(masked);
// };
// maskedCreditCard(number);

// const number = 123456789;
// const maskedCreditCard = function (number) {
//   const str = String(number);
//   const newNum = str.slice(-3).padStart(str.length, '*');
//   console.log(newNum);
// };
// maskedCreditCard(number);

// const passenger = 'jessica ann smith davis';
// const capitalizeName = function (name) {
//   let nameArray = name.split(' ');
//   let nameNewArray = [];
//   for (const first of nameArray) {
//     nameNewArray.push(
//       first[0].replace(first[0], first[0].toUpperCase()) +
//         first.slice(1).toLowerCase()
//     ); //first[0].toUpperCase() + first.slice(1).toLowerCase());
//   }
//   return nameNewArray.join(' ');
// };
// console.log(capitalizeName(passenger));
// console.log(capitalizeName('passenger xyZabhvAVB'));
// console.log('a+very+nice+string'.split('+'));
// console.log('Md. Shaqibul Islam Mabiu'.split(' '));
// const name = 'Shaqibul Neil';
// const [firstName, lastName] = name.split(' ');
// console.log(firstName, lastName);
// const newName = ['Md.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = [];
//   for (const word of names) {
//     nameUpper.push(word[0].toUpperCase() + word.slice(1)); //word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(nameUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('shaqibul neil');
//or
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   console.log(names);
//   const nameUpper = [];
//   for (let i = 0; i < names.length; i++) {
//     nameUpper.push(names[i].replace(names[i][0], names[i][0].toUpperCase()));
//   }
//   console.log(nameUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('shaqibul neil');

//padding a string
// const message = ' Go to gate 23! ';
// console.log(message.length);
// const messagePadStartEnd = message.padStart(25, '+').padEnd(34, '+');
// console.log(messagePadStartEnd);
// console.log(messagePadStartEnd.length);

// const maskedCreditCard = function (number) {
//   const str = number + ''; //String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskedCreditCard(1234567890));
// console.log(maskedCreditCard(4578940));
// console.log(maskedCreditCard('09876543210536566'));
//work with strings 2

// const airline = 'Tap Air Portugal';
// const plane = 'A320';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('neil'.toUpperCase());

//fix capitalization
// const passenger = 'nEiL';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// const correctCapitalization = function (name) {
//   const nameCorrected = name[0].toUpperCase() + name.slice(1).toLowerCase();
//   return nameCorrected;
// };
// console.log(correctCapitalization('aKramUddin'));

//comparing emails
// const email = 'hello@jonas.com';
// const loginEmail = ' Hello@Jonas.Com \n';
// const trimmedEmail = loginEmail.toLowerCase().trim(); //whitespace remove
// console.log(trimmedEmail);
// console.log(email === trimmedEmail);
// const emailCheck = function (correctEmail, inputEmail) {
//   correctEmail.trim().toLowerCase() === inputEmail.trim().toLowerCase();
// };
// emailCheck(email, loginEmail);

//replacing
// const priceUS = '298.87$';
// const priceBD = priceUS.replace('$', 'Taka').replace('.', ',');
// console.log(priceBD);
// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log('Regex: ', announcement.replace(/door/g, 'gate'));
// console.log(announcement);
// const nameNew = 'Nqwerqwerqwerqwerqqqqqqqqqqqq';
// console.log(nameNew.replaceAll('q', 'n'));

//Booleans
// const plane = 'AirBus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('B320'));
// console.log(plane.startsWith('AirB'));
// console.log(plane.startsWith('A3'));
// if (plane.startsWith('AirBus') && plane.endsWith('neo')) {
//   console.log('Part of family');
// }

// const checkBeggage = function (items) {
//   const beggage = items.toLowerCase();
//   if (beggage.includes('knife') || beggage.includes('gun')) {
//     console.log('Arrest him right now');
//   } else {
//     console.log('Welcome Abroad');
//   }
// };
// checkBeggage('I have a Laptop, some Food and a Pocket Knife');
// checkBeggage('socks and camera');
// checkBeggage('Got some snacks and gunS');

//work with strings 1
// console.log(new String('Neil'));
// console.log(typeof 'Neil');
// console.log(typeof new String('Neil'));
// console.log(typeof new String('Neil').slice(1));
// const airline = 'Tap Air Portugal';
// const plane = 'A320';
// const seat = '11B';
// console.log(seat.slice(-1));
// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const middleOrAisle =
//     seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
//       ? 'Middle Seat'
//       : 'Aisle Seat';
//   return middleOrAisle;
// };
// console.log(checkMiddleSeat('11E'));
// console.log(checkMiddleSeat('11C'));
// console.log(checkMiddleSeat('11B'));
// console.log(checkMiddleSeat('1F'));
// const subString = airline.slice(airline.indexOf('A'), airline.indexOf('P') - 1);
// console.log(`slicing for Air in airline: ${subString}`);
// console.log(subString.length);

// console.log(
//   `slicing for Tap in airline: `,
//   airline.slice(0, airline.indexOf(' '))
// );
// const portugal = airline.slice(airline.lastIndexOf(' ') + 1);
// console.log(`slicing for Portugal in airline: ${portugal}`);
// console.log(portugal.length);
// console.log(airline.slice(-8));
// console.log(airline.slice(1, -1));
// console.log(airline.slice(1, 0));

//end index - beginning index for length
// const subLength = airline.indexOf('P') - 1 - airline.indexOf('A');
// console.log(subLength);

// console.log('airline 3 & 8: ', airline[3], airline[8]);
// console.log(`Indexof for A in airline: `, airline.indexOf('A')); //indexof na thakle -1
// console.log(`Last Indexof a in airline: `, airline.lastIndexOf('a'));
// console.log(`Indexof Portugal in airline: `, airline.indexOf('Portugal'));
// console.log('plane 1: ', plane[0]);
// console.log('plane length: ', plane.length);
// console.log('plane convert to number: ', Number(plane[1]));
// console.log('Using String in console B123: ', 'B123'[0]);
// console.log('Using String in console for length B123:', 'B123'.length);
//map iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct Answer'],
//   [false, 'Try Again'],
// ]);
// console.log(question);
// obj to maps
// const hourMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hourMap);
//quiz
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
// }
// const answer = 3; //Number(prompt('Choose the Option to ans'));
// console.log(answer);
// const isCorrect = question.get(question.get('correct') === answer);
// console.log(isCorrect);

//map to array
// console.log([...question]);
// const entries = question.entries();
// console.log([...entries]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//or
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else if (answer !== question.get('correct')) {
//   console.log(question.get(false));
// }
//New Operations of set
// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);
//maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Italy');
// console.log(rest.set(2, 'Lisbon'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('openingHours', {
//     thurs: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 12,
//       close: 24,
//     },
//     sat: {
//       open: 0, //open 24 hours
//       close: 24,
//     },
//   })
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are Open')
//   .set(false, 'We are closed');
// console.log(rest);

//retreiving
// console.log(rest.get('name'));
// console.log(rest.get(false));
// const retrieve = rest.get(1);
// console.log(retrieve);

// const time = 12;
// const available = rest.get(
//   time >= rest.get('open') && time < rest.get('close')
// );
// console.log(available);
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);

//can use obj/array as map key
// rest.set([1, 2], 'test');
// console.log(rest.get([1, 2])); //undefined
//solution:----
// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest.get(arr));
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
//------------------------------------------
//intersection : finding the common value in both sets
// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log(`Intersection: `, [...commonFoods]);
//union: all the elements of both sets
// const allFoods = italianFoods.union(mexicanFoods);
// console.log(`Union:`, [...allFoods]);
//or
// const allFoods2 = [...italianFoods, ...mexicanFoods];
// const newAllFood = new Set(allFoods2);
// console.log(`spread and set union: `, [...newAllFood]);
//or using function
// const foodFunction = function (food) {
//   food = [...italianFoods, ...mexicanFoods];
//   const food2 = [...new Set(food)];
//   return food2;
// };
// console.log(foodFunction());
//differece 1st set er different items
// const uniqueItalian = italianFoods.difference(mexicanFoods);
// console.log(`Difference Italian: `, [...uniqueItalian]);
// const uniqueMexican = mexicanFoods.difference(italianFoods);
// console.log(`Difference Mexican: `, [...uniqueMexican]);
//symmetric difference opposite of intersection
// const unique = italianFoods.symmetricDifference(mexicanFoods);
// console.log(unique);
// const differentSets = italianFoods.isDisjointFrom(mexicanFoods);
// console.log(differentSets);

// const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
// const fours = new Set([4, 8, 12, 16]);

// const odds = new Set([1, 3, 5, 7, 9, 11, 13, 15, 17]);
// const subSetOf = fours.isSubsetOf(evens);
// console.log(subSetOf);

// const superSetOf = evens.isSupersetOf(fours);
// console.log(superSetOf);

// const differentSets = odds.isDisjointFrom(fours);
// console.log(differentSets);

//sets
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'pizza', 'Risotto', 15]);
// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(new Set('neil'));
// console.log(new Set());
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.add('garlic');
// ordersSet.add('garlic');
// console.log(ordersSet);
// ordersSet.delete('pizza');
// console.log(ordersSet);
// ordersSet.clear();
// console.log(ordersSet);
//looping set
// for (const order of ordersSet) {
//   console.log(order);
// }
// //example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );
// const staffPosition = [...new Set(staff)];
// console.log(staffPosition);
// console.log(new Set('shaqibulislammabiu').size); //how many differetn character in my name

// Looping Objects: Object Keys, Values and Entries
///////Property Names
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties); //converted object as an array
// console.log(
//   `We are open for ${properties.length} days on ${properties[0]}, ${properties[1]}, ${properties[2]} `
// );
// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day); //looping over that array
// }
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// let openStr = `We are open for ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// openStr = openStr.slice(0, -2);
// console.log(openStr);

///////Property Values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// ////// Entire Object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
//optional chaining ?.
//?. on arrays
// const user = [{ name: 'neil', age: 33 }];
// const users = [];
// console.log(user[0]?.name ?? 'User Array Empty');
// console.log(user[1]?.name ?? 'User Array Empty');
// console.log(users[0]?.name ?? 'Users Array Empty');
//checking if a method exist before calling it
// console.log(restaurant.order?.(1, 0) ?? 'Method does not exist');
// console.log(restaurant.orders?.(1, 0) ?? 'Method does not exist');
//console.log(restaurant.openingHours.sun.open); //error cz no property named sun
//console.log(restaurant?.openingHours.fri?.open); //optional chaining ?. jodi ? etar ager left side er property exist kore tahole right side dekhao noito undefined asbe
//console.log(restaurant?.openingHours.sun?.open);
//multiple ?. same logic jodi newOpeningHours nam e property thake restaurant e tahole sun dkhao jdi sun thake tahole open dkhao
//console.log(restaurant.newOpeningHours?.sun?.open);
// const weekdays = ['mon', 'tues', 'wednes', 'thurs', 'fri', 'sat', 'sun'];
// console.log(`---------------for of loop----------------`);
// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'We are closed';
//   console.log(`On ${day}: We open at ${open}`);
//}
// console.log(`---------------for loop----------------`);
// for (let i = 0; i < weekdays.length; i++) {
//   const open = restaurant.openingHours[weekdays[i]]?.open;
//   console.log(`On ${weekdays[i]}: We open at ${open}`);
// }

//looping over array  for-of
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// //element name
// for (const item of menu) console.log(item);
// //to get index number
// for (const item of menu.entries()) {
//   console.log(item);
// }
// console.log([...menu.entries()]);
// //old rules
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1} : ${item[1]}`);
// }
// //new rules
// for (const [index, item] of menu.entries()) {
//   console.log(`${index + 1}: ${item}`);
// }

// //what menu.entries actually is
// console.log([...menu.entries()]);
// const numbers = [1, 2, 3];
// const number1 = [4, 5, 6, 7, 8];
// const addNum = function (...number) {
//   let total = 0;
//   for (let i = 0; i < number.length; i++) {
//     total += number[i];
//   }
//   return total;
// };
// console.log(addNum(...numbers));
// console.log(addNum(...number1));

// const str = 'neil';
// const letters = [...str]; //...str = n e i l; -> ['n', 'e']
// console.log(letters);
// console.log(...str);

// let a = 54;
// let b = 57;
// let c = 78;

// const obj = { a: 1, b: 2, c: 3 };

// // reassign obj with new properties
// const updatedObj = { ...obj, a, b, c };

// console.log(updatedObj); // { a: 54, b: 57, c: 78 } //JavaScript-এ object এর key unique হয়। যদি দুইবার দেয়ার চেষ্টা করো, শেষেরটা আগেরটা কে replace করে দেয়।
// const updatedObj2 = { a, b, c, ...obj };
// console.log(updatedObj2);

// const {
//   openingHours: {
//     fri: { open: o, close: c = 1 }, //যদি closes: undefined হয় ➤ closes = 10 হবে, closes: null হয় ➤ null ই থাকবে (default value কাজ করবে না)
//   },
// } = restaurant;
// console.log(o, c);

// const rest1 = {
//   name: 'capri',
//   //numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La pizza',
//   owner: 'Giovani',
// };
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// //logical or assignment ||=
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// //logical nullish assignment ??=
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;
// // console.log(rest1);
// // console.log(rest2);
// //logical and &&=
// // rest2.owner = rest2.owner && 'no owner';
// // rest1.owner = rest1.owner && 'no owner';
// rest1.owner &&= 'no owner';
// rest2.owner &&= 'no owner';
// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 20;
// console.log(guests);
// const guestCorrected = restaurant.numGuests ?? 20;
// console.log(guestCorrected);
// const guestOr = restaurant.numGuests || 20;
// console.log(guestOr);
// const guestAnd = restaurant.numGuests && 20;
// console.log(guestAnd);
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// //passing a obj in the arguments
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Agargaon',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Agargaon',
//   starterIndex: 2,
// });

// The Nullish Coalescing Operator (??)

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 20;
// console.log(guests);
// const guestCorrected = restaurant.numGuests ?? 20;
// console.log(guestCorrected);

// restaurant.numGuests = true;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Short Circuiting (&& and ||)
// console.log('----------------AND---------------');
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// console.log('----------------OR---------------');
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 20;
// console.log(guests2);
//-------------------------------
//rest pattern and parameters
//spread because of the right side of =
// const arr = [1, 2, 3];
// const newArr = [4, 5, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const arr2 = [1, 2, ...[3, 4]]; //spread
// console.log(arr2);

// //rest because of the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]; //rest
// console.log(a, b, others);

// //---------------------
// const copyMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(copyMenu);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; //copyMenu
// console.log(pizza, risotto, otherFood);

// //----------------------------
// const { sat, ...otherWeekdays } = restaurant.openingHours;
// console.log(otherWeekdays);

// //--------------------------
// //functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 8, 85, 5, 6, 7, 1, 2);
// const x = [23, 5, 4];
// add(2, 3, ...x);
// add(...x);
// add([2, 5, 3]);
// add(...[2, 5, 3]);
//---------------------------------
//passing spread in the arguments real world
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // without spread
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIN: 1998, ...restaurant, founder: 'gGuisesse' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Italnian';
// console.log(restaurantCopy);
// console.log(restaurant);

// const newRestaurant = { ...restaurant };
// newRestaurant.mainMenu = [...restaurant.mainMenu, 'Tortilla'];
// console.log(newRestaurant.mainMenu);
// console.log(restaurant.mainMenu);

//------------------------------------
//spread operator
// const str = 'shaqibul';
// const letters = [...str];
// console.log(...letters);
// const str = 'Shaqibul';
// const letters = [...str, '', 'I.'];
// console.log(letters);
// const arr = [1, 2, 3];
// const newArr = [7, 8, ...arr];
// console.log(arr);
// console.log(newArr); //logging as array
// console.log(...newArr); //logging as individual value
// const newArr2 = [...newArr, 5, 6];
// console.log(newArr2);
// console.log(...newArr2);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//copy shallow array
// const mainMenuCpoy = [...restaurant.mainMenu];
// console.log(mainMenuCpoy);
// //join 2 array
// const bothMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(bothMenu);

//function and spread
//sending arguments with spread
// const addNumbers = function (a, b, c) {
//   return a + b + c;
// };
// const numbers = [1, 2, 3];
// const result = addNumbers(...numbers);
// console.log(result);
// const sumAll = function (...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// };
// const nums = [1, 2, 3, 4, 5, 6];
// const totalSum = sumAll(...nums);
// console.log(totalSum);

//-----------------------------------
//obejct destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// //with dif property names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
//if undefined like the property doesnt exist on the object default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables
//changing the global varibales value with obj value
// let a = 54;
// let b = 57;
// let c = 78;
// const obj = { a: 1, b: 2, c: 3 };
// ({ a, b, c } = obj);
// console.log(a, b, c); //output a= 1, b= 2, c= 3  global variable
//changing the obj value value with global varibales
//({ a: obj.a, b: obj.b, c: obj.c } = { a, b, c }); //destructuring with aliasing — মানে:- a: obj.a — মানে: obj.a = a
//console.log(obj); //output - obj = { a:54, b:57, c: 78 };
//nested objects
// const {
//   fri: { open: start, close: end }, //open: start = [], close: end = []
// } = openingHours;
// console.log(start, end);

//-------------------------------------------------------------
//array destructuring
// const arr = [2, 3, 4, 5];
// const [q, w, e, f] = arr;
// console.log(q, w, e, f);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//receive 2 return values from a function
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

//if nested array
//const nested = [12, 14, [15, 16]];
// const [first, , second] = nested;
// console.log(first, second);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//deafult value
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//failsafe
// const nestedarr = [3];
// const [a = 1, b = 'unkonown', [c = 'unkonown', d = 'unkonown'] = []] =
//   nestedarr;
// console.log(a, b, c, d);

// const nestedarr = [3];
// const [a = 1, b = 1, tempArr = []] = nestedarr;
// console.log(a, b, tempArr);
// const [c = 1, d = 1, [e = 1] = []] = tempArr;
// console.log(a, b, c, d, e);
//তুমি destructuring করার সময় যেটা destructure করতে যাচ্ছো — সেটা যদি undefined হয়, তাহলে আগে একটা empty array fallback দাও।

// const nestedarr = [1];
// const [a = 1, tempArr = []] = nestedarr;
// console.log(a, tempArr);
// const [b = 2, tempArr2 = []] = tempArr;
// console.log(a, b, tempArr2);
// const [c = 3, tempArr3 = []] = tempArr2;
// console.log(a, b, c, tempArr3);
// const [d = 4, tempArr4 = []] = tempArr3;
// console.log(a, b, c, d, tempArr4);

//-----------------------------------------------Coding Challenge ----------------------------------------------------

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Coding Challenge 3
//------------------------------------------------------------------------------------------
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
//--------------------------------------

//1. Create an array 'events' of the different game events (unique values) that happened (no duplicates)
// const events = [...new Set(gameEvents.values())];
// console.log(events);
//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);
//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// time.pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );
//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17: ⚽️ GOAL
// for (const [time, event] of gameEvents) {
//   const half = time <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${time}: ${event}`);
//or
// if (time <= 45) {
//   console.log(`[FIRST HALF] ${time}: ${event}`);
// } else if (time > 45) {
//   console.log(`[SECOND HALF] ${time}: ${event}`);
// }
//}
//-----------------------------------------------------------------------------------------
//Coding Challenge 1
//------------------------------------------------------------------------------------------
// const [player1, player2] = game.players;
// console.log(player1, player2);
// const [gk, ...fieldPlayers] = player1;
// console.log(gk);
// console.log(fieldPlayers);
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// const printGoals = function (...player) {
//   for (let i = 0; i < player.length; i++) {
//     console.log(player);
//   }
//   console.log(`Number of Goals scored: ${player.length}`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);
// printGoals(allPlayers);
// team1 < team2 && console.log('team 1 wins');
// team1 > team2 && console.log('team 2 wins');

//-----------------------------------------------------------------------------------------

//Coding Challenge 2
//------------------------------------------------------------------------------------------
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [index, score] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${score}`);
// }
//---------------------------------------------------------------------------------------------
//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
//odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// },
// let sum = 0;
// const values = Object.values(game.odds); //refactored Object.values(game.odds)
// for (const value of values) {
//   sum += value;
// }
// const average = sum / values.length;
// console.log(`The Sum is: ${sum}`);
// console.log(`The Average is: ${average}`);
//or
// let average = 0;
// for (const value of Object.values(game.odds)) {
//   average += value;
// }
// average /= Object.values(game.odds).length;
// console.log(average);
//------------------------------------------------------------------------------------------------
//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names
// for (const [team, value] of Object.entries(game.odds)) {
//   const str =
//     team === 'x'
//       ? `Odd of draw: ${value}`
//       : `Odd of victory  ${game[team]} :  ${value}`; // game[team]--> game team1 -> bayern
//   console.log(str);
// }
//or
// for (const [team, value] of Object.entries(game.odds)) {
//   const str = team === 'x' ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${str}: ${value}`);
// }
//-------------------------------------------------------------------------------------------------
//4.BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] = (scorers[player] || 0) + 1;
// }
// console.log(scorers);
//or
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//or
// const scorers = {};
// for (const key of game.scored) {
//   scorers[key] = (scorers[key] ?? 0) + 1;
// }
// console.log(scorers);

/*
scorers.player → এটা "literal" property
scorers.player = 1;
🟡 মানে এখানে player বলতে JavaScript বুঝে — এটা একটা নাম নামক property, not a variable.

🔸 এটা হলে object এ এরকম হবে:
{
  player: 1
}
😢 কিন্তু তুমি তো চাচ্ছো Lewandowski, Gnarby এরকম নাম key হিসেবে বসুক, player নামে না।
2️⃣ scorers[player] → এটা dynamic property বা variable-based key
let player = 'Gnarby';
scorers[player] = 1;
scorers.Gnarby =1;
🔹 ফলাফল হবে:
{
  Gnarby: 1
}
*/

/*
///////////////////////////////////////
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   //console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.trim().toLowerCase().split('_');

//     //const newSecond = second.replace(second[0], second[0].toUpperCase());
//     const newSecond = second[0].toUpperCase() + second.slice(1);
//     const output = first + newSecond;
//     const newStr = `${output.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`;
//     console.log(newStr);
//   }
// });

//More String Exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const newType = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )}`;
  const newReplace = time.replace(':', 'h');
  const output = `${newType} from ${getCode(from)} to ${getCode(
    to
  )} (${newReplace})`.padStart(45);
  console.log(output);
}

//do it ur way

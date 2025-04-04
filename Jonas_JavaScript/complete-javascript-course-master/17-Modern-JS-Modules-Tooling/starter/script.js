/*
//////Exportinhg and importing in ES6 Modules//////
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);
// addToCart('bread', 5);
// console.log(shippingCost);

console.log('Importing module');

// import shoppingCart, * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

///////Top-level await (ES2022)
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLasdtPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, test: data.at(-1).body };
};
const lastPost = getLasdtPost();

//Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLasdtPost();
console.log(lastPost2);


///The Module Pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product}, ${quantity} added to cart`);
  };

  const oderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product}, ${quantity} added to cart`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);


/////CommonJS Modules

//Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product}, ${quantity} added to cart`);
  };

//Import
const {addTocart} = require('./shoppingCart.js')
*/
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);
console.log(cart.find(el => el.quantity >= 2));
import 'regenerator-runtime/runtime.js';
import 'core-js/stable';

//https://www.30daysofreact.com/posts/64c58ae79338b87c24cafc04
import {countries} from './countries.mjs'
// mjs indicates that a file is an ECMAScript module, introduces ECMAScript support
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
function removePunctuations(inputString) {
  return inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
text = removePunctuations(text)
let words = text.split(" ")

console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
// remove 'Honey' if you are allergic to honey
shoppingCart.splice((shoppingCart.indexOf('Honey')),1)
console.log(shoppingCart)
// modify Tea to 'Green Tea'
shoppingCart.splice((shoppingCart.indexOf('Tea')),1,'Green Tea')
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf('Green Tea')] ='Tea'
console.log(shoppingCart)


console.log(countries)


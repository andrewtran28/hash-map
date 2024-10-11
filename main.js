import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
console.log(test.has('lion'));          //Test 'has' function where 'lion' is not within hashmap yet.
test.set('lion', 'golden');
test.set('apple', 'Replace by aqua');   //'apple' key should now be replaced with this value and not be 'red'.

console.log(test.has('lion'));          //Test 'has' function where 'lion' is now within hashmap.
test.set('moon', 'silver');
console.log(test.has('lion'));          //Test 'grow' function where 'lion' is still within hashmap after growth.

console.log(test.entries());
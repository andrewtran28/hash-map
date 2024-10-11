import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.set('apple', 'aqua');
console.log(test.get('apple'));

test.set('moon', 'silver');
test.remove('moon');
test.remove('grape');
test.remove('elephant')
console.log(test.has('elephant'));


console.log(test.length());
console.log(test.entries());
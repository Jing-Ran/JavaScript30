const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated: 
console.log('Hello %s string!', '💩');
// OR ES6
// console.log(`Hello 💩 string!`);

// Styled
console.log('I am some %c text', 'color: lightblue');

// warning!
console.warn('OH NOOOOOO!!');

// Error :|
// No throwing an error, just diplay an error in the console
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 ppl per year');

// Testing
console.assert(1 === 1, `That's wrong`);
console.assert(1 === 2, `That's wrong`);

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);
console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`); // use dog name to define a group
  console.log(`This's ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Hello');
console.count('Hello');
console.count('World');
console.count('Hello');
console.count('World');
console.count('Hello');
console.count('World');
console.count('World');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// display in table
console.table(dogs);

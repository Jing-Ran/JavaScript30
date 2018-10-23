// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isOver19 = people.some(person => {
  const nowYear = (new Date()).getFullYear();
  return nowYear - person.year >= 19;
});

// console.log(isOver19);

// Array.prototype.every() // is everyone 19 or older?
const allOver19 = people.every(person => {
  (new Date()).getFullYear() - person.year >= 19
});
console.log(allOver19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find(comment => comment.id === 823423);
console.log(findComment);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
function findAndDelete(array) {
  const i = array.findIndex(item => item.id === 823423);

  // array.splice(i, 1);
  // return array;
  
  // Another method: spread syntax - spread one array in another
  const newArr = [
    ...array.slice(0, i),
    ...array.slice(i + 1)
  ];
  return newArr;
  
}

console.log(findAndDelete(comments));


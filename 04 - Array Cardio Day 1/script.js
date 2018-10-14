(function() {
  // Get your shorts on - this is an array workout!
  // ## Array Cardio Day 1

  // Some data we can work with

  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  // function filterBornYear(array) {
  //   // let regex = /15\d{2}/;
  //   let results = [];
  //   array.filter(item => {
  //     if (item.year >= 1500 && item.year < 1600) results.push(item);
  //   });
  //   return results;
  // }

  // const fifteen = inventors.filter(inventor => {
  //   if (inventor.year >= 1500 && inventor.year < 1600) return true; //keep it
  // });
  const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  console.table(fifteen);

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  const names = inventors.map(inventor => inventor.first + ' ' + inventor.last);
  console.table(names);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const sortByBday = inventors.sort((a, b) => a.year - b.year);
  console.table(sortByBday);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  // Method - 1
  const ages = inventors.map(inventor => inventor.passed - inventor.year);
  const liveYears = ages.reduce((accumulator, currentVal) => accumulator + currentVal);
  console.log(liveYears);

  // Method - 2
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
  console.log(totalYears);

  // 5. Sort the inventors by years lived
  // Youngest to oldest
  const sortByAgeY = inventors.sort((a, b) => {
    return (a.passed - a.year) - (b.passed - b.year);
  });
  console.table(sortByAgeY);

  // Oldest to youngest
  const sortByAgeO = inventors.sort((a, b) => {
    return (b.passed - b.year) - (a.passed - a.year);
  });
  console.table(sortByAgeO);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  // const category = document.querySelector('.mw-category');
  
  // const links = Array.from(category.querySelectorAll('a'));
  // const deList = links.filter(item => {
  //   // const regex = /.*de.*/;
  //   // if (item.text.match(regex)) return true;
  //   return item.text.includes('de');
  // });
  // console.log(deList);


  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const sortByLNm = people.sort((a, b) => {
    return a.split(',')[0].toUpperCase() > b.split(',')[0].toUpperCase() ? 1 : -1;
  });
  console.table(sortByLNm);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

  // let obj = new Object();
  const transportation = data.reduce((obj, item) => {
    if (obj.hasOwnProperty(item)) {
      obj[item]++; // use [] instead of .
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});

  console.log(transportation); 
})();
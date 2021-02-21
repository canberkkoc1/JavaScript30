const inventors = [
  { first: "canbek", last: "koç", year: 1994, passed: 2028 },
  { first: "mehmet", last: "bekle", year: 2009, passed: 2026 },
  { first: "ahmet", last: "gönül", year: 1993, passed: 2067 },
  { first: "gökhan", last: "özil", year: 1923, passed: 1993 },
  { first: "sosa", last: "tosun", year: 1959, passed: 1987 },
  { first: "mesut", last: "mihovixc", year: 1790, passed: 1877 },
  { first: "caner", last: "teksne", year: 1848, passed: 1903 },
];

// filter
const newInvewntor = inventors.filter((x) => x.year > 1900);

console.table(newInvewntor);

//map
inventors.map((x) => console.table(`${x.first} ${x.last}`));

//sort
const sortInv = inventors.sort((x, y) => x.year - y.year);

console.table(sortInv);

//reduce
const howManyYears = inventors.reduce((x, y) => x + (y.passed - y.year), 0);

console.log(howManyYears);

//sort by how many years live

const srtInv = inventors.sort(
  (x, y) => y.passed - y.year - (x.passed - x.year)
);

console.log(srtInv);

// find "de" in name
const newFind = inventors.filter((x) => x.first.includes("met"));

console.log(newFind);

//reduce

const data = [
  "car",
  "truck",
  "van",
  "car",
  "car",
  "van",
  "car",
  "truck",
  "van",
  "van",
  "car",
];

const setItems = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(setItems);

const people = [
  "Olivia",
  "Amelia",
  "Isla",
  "Ava",
  "Mia",
  "Isabella",
  "Sophia",
  "Grace",
  "Lily",
  "Freya",
  "Oliver",
  "George",
  "Noah",
  "Arthur",
  "Harry",
  "Leo",
  "Muhammad",
  "Jack",
  "Charlie",
  "Oscar",
  "Linna",
  "Amie",
  "Emilia",
  "Emilya",
  "Emilía",
  "Emylia",
  "Émilia",
  "Lilly",
  "Lili",
  "Lill",
  "Lillie",
  "Lily",
  "Sophie",
  "Sofi",
  "Sofie",
  "Sophi",
  "Sophy",
  "Sophia",
  "Sofia",
  "Hannah",
  "Hanna",
  "Charlotte",
  "Ella",
  "Emily",
  "Emilie",
  "Èmilie",
  "Mia",
  "Emma",
  "Marike",
  "Maya",
  "Maja",
  "Lia",
  "Liah",
  "Lya",
  "Lyah",
  "Malia",
  "Maliah",
  "Maliya",
  "Maliyah",
  "Malya",
  "Malía",
  "Eléa",
  "Elléa",
  "Elëa",
  "Élea",
  "Éléa",
];

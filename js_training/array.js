let people = [
  {
    name: "John",
    age: 25,
    sex: "Male",
    height: 180,
  },
  {
    name: "Emily",
    age: 30,
    sex: "Female",
    height: 165,
  },
  {
    name: "Michael",
    age: 40,
    sex: "Male",
    height: 175,
  },
  {
    name: "Dan",
    age: 55,
    sex: "Male",
    height: 175,
  },
  {
    age: 61,
    sex: "Female",
    height: 175,
  },
];

// const array1 = new Array()

// console.log(people instanceof Array);

// .filter .map .foreach .reduce

// filter  array.filter()
// const filterTallPeopleFunction = (person) => {
//   if (person.height > 175) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const tallPeople = people.filter(filterTallPeopleFunction);

// // console.log({ tallPeople });

// const peopleNames = people.map((person) => {
//   return person.name;
// });
// console.log({ peopleNames });

// const elderlyPeople = [];
// people.forEach((person) => {
//   if (person.age >= 35) {
//     console.log(person.name);
//     elderlyPeople.unshift(person.name);
//   }
// });
// console.log({ elderlyPeople });

// currentValue refers to a person in the list
// const sumOfAge = people.reduce((previousValue, currentValue) => {
//   console.log({previousValue, currentValue})
//   return previousValue + currentValue.age
// }, 0)

// console.log({sumOfAge})


let elderlyCount = 0
const sumAgeOfElderly = people.reduce((previousValue, person) => {
  if (person.age > 35) {
    console.log({ previousValue, person });
    elderlyCount += 1
    return previousValue + person.age;
  } else {
    return previousValue
  }
}, 0);

const averageAgeOfElderly = sumAgeOfElderly / elderlyCount

console.log({ averageAgeOfElderly, sumAgeOfElderly, elderlyCount });
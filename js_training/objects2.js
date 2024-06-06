const sortedStudents = {
  "8th Grade": [
    {
      name: "Alice Johnson",
      age: 14,
      class: "8th Grade",
      percentageScore: 92.5,
      gender: "Female",
      hobbies: ["Reading", "Swimming"],
      attendance: "95%",
    },
    {
      name: "Emily Davis",
      age: 14,
      class: "8th Grade",
      percentageScore: 91.1,
      gender: "Female",
      hobbies: ["Volleyball", "Reading"],
      attendance: "93%",
    },
    {
      name: "Isabella Moore",
      age: 14,
      class: "8th Grade",
      percentageScore: 93.5,
      gender: "Female",
      hobbies: ["Gymnastics", "Writing"],
      attendance: "94%",
    },
  ],
  "9th Grade": [
    {
      name: "Brian Smith",
      age: 15,
      class: "9th Grade",
      percentageScore: 88.7,
      gender: "Male",
      hobbies: ["Basketball", "Gaming"],
      attendance: "90%",
    },
    {
      name: "Frank Wilson",
      age: 15,
      class: "9th Grade",
      percentageScore: 87.3,
      gender: "Male",
      hobbies: ["Chess", "Coding"],
      attendance: "89%",
    },
    {
      name: "Jack Anderson",
      age: 15,
      class: "9th Grade",
      percentageScore: 89.6,
      gender: "Male",
      hobbies: ["Skateboarding", "Math"],
      attendance: "90%",
    },
  ],
  "7th Grade": [
    {
      name: "Catherine Lee",
      age: 13,
      class: "7th Grade",
      percentageScore: 95.2,
      gender: "Female",
      hobbies: ["Drawing", "Dancing"],
      attendance: "98%",
    },
    {
      name: "Grace Taylor",
      age: 13,
      class: "7th Grade",
      percentageScore: 94.8,
      gender: "Female",
      hobbies: ["Painting", "Singing"],
      attendance: "96%",
    },
  ],
  "10th Grade": [
    {
      name: "David Brown",
      age: 16,
      class: "10th Grade",
      percentageScore: 85.4,
      gender: "Male",
      hobbies: ["Soccer", "Music"],
      attendance: "92%",
    },
    {
      name: "Henry Miller",
      age: 16,
      class: "10th Grade",
      percentageScore: 86.9,
      gender: "Male",
      hobbies: ["Baseball", "Photography"],
      attendance: "91%",
    },
  ],
};


// // using object.values
// console.log(Object.values(sortedStudents)) // list of lists

// // using object.key
// console.log(Object.keys(sortedStudents))

// using flatmap
const allStudentNames = Object.values(sortedStudents).flatMap((studentList, index) => {
  // console.log(index, studentList)
  const studentNames = studentList.map(student => student.name)
  return studentNames
  // return studentList
})
console.log({allStudentNames})

// using .flat
const flatStudents = Object.values(sortedStudents).flat();
console.log({flatStudents})

const nestedList = [
  [
    [
      ["string1", "string2", "string3"],
      ["string4", "string5", "string6"],
    ],
    [
      ["string7", "string8", "string9"],
      ["string10", "string11", "string12"],
    ],
  ],
  [
    [
      ["string13", "string14", "string15"],
      ["string16", "string17", "string18"],
    ],
    [
      ["string19", "string20", "string21"],
      ["string22", "string23", "string24"],
    ],
  ],
];
console.log(nestedList.flat(3))
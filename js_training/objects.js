let testList = [
  {
    name: "Test Student",
    age: 14,
    class: "Test",
    percentageScore: 92.5,
    gender: "Female",
    hobbies: ["Reading", "Taking Tests"],
    attendance: "95%",
  },
];

const detailedStudents = {
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
  ],
  Test: testList,
  "85test": "some value",
};

const key = "hobbies";

console.log(detailedStudents.Test[0].name);
console.log(detailedStudents.Test[0].key);
console.log(testList[0] );
console.log(testList[0][key]);
// console.log(`name of first student in Test: ${detailedStudents.Test}`)
// console.log(`name of first student in grade 8: ${detailedStudents}`)

const students = [
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
    name: "Brian Smith",
    age: 15,
    class: "9th Grade",
    percentageScore: 88.7,
    gender: "Male",
    hobbies: ["Basketball", "Gaming"],
    attendance: "90%",
  },
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
    name: "David Brown",
    age: 16,
    class: "10th Grade",
    percentageScore: 85.4,
    gender: "Male",
    hobbies: ["Soccer", "Music"],
    attendance: "92%",
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
    name: "Frank Wilson",
    age: 15,
    class: "9th Grade",
    percentageScore: 87.3,
    gender: "Male",
    hobbies: ["Chess", "Coding"],
    attendance: "89%",
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
  {
    name: "Henry Miller",
    age: 16,
    class: "10th Grade",
    percentageScore: 86.9,
    gender: "Male",
    hobbies: ["Baseball", "Photography"],
    attendance: "91%",
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
  {
    name: "Jack Anderson",
    age: 15,
    class: "9th Grade",
    percentageScore: 89.6,
    gender: "Male",
    hobbies: ["Skateboarding", "Math"],
    attendance: "90%",
  },
];

const studentsByClass = {};

for (const student of students) {
  if (studentsByClass[student.class]) {
    studentsByClass[student.class].push(student);
  } else {
    studentsByClass[student.class] = [student];
  }
}

console.log( studentsByClass );

// this is the response from console.log of studentsByClass
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

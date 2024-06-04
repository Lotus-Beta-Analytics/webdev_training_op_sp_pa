const students = [
  {
    name: "Alice Johnson",
    age: 14,
    class: "8th Grade",
    percentageScore: 92.5,
    gender: "Female",
    hobbies: ["Reading", "Swimming"],
    attendance: "95%"
  },
  {
    name: "Brian Smith",
    age: 15,
    class: "9th Grade",
    percentageScore: 88.7,
    gender: "Male",
    hobbies: ["Basketball", "Gaming"],
    attendance: "90%"
  },
  {
    name: "Catherine Lee",
    age: 13,
    class: "7th Grade",
    percentageScore: 95.2,
    gender: "Female",
    hobbies: ["Drawing", "Dancing"],
    attendance: "98%"
  },
  {
    name: "David Brown",
    age: 16,
    class: "10th Grade",
    percentageScore: 85.4,
    gender: "Male",
    hobbies: ["Soccer", "Music"],
    attendance: "92%"
  },
  {
    name: "Emily Davis",
    age: 14,
    class: "8th Grade",
    percentageScore: 91.1,
    gender: "Female",
    hobbies: ["Volleyball", "Reading"],
    attendance: "93%"
  },
  {
    name: "Frank Wilson",
    age: 15,
    class: "9th Grade",
    percentageScore: 87.3,
    gender: "Male",
    hobbies: ["Chess", "Coding"],
    attendance: "89%"
  },
  {
    name: "Grace Taylor",
    age: 13,
    class: "7th Grade",
    percentageScore: 94.8,
    gender: "Female",
    hobbies: ["Painting", "Singing"],
    attendance: "96%"
  },
  {
    name: "Henry Miller",
    age: 16,
    class: "10th Grade",
    percentageScore: 86.9,
    gender: "Male",
    hobbies: ["Baseball", "Photography"],
    attendance: "91%"
  },
  {
    name: "Isabella Moore",
    age: 14,
    class: "8th Grade",
    percentageScore: 93.5,
    gender: "Female",
    hobbies: ["Gymnastics", "Writing"],
    attendance: "94%"
  },
  {
    name: "Jack Anderson",
    age: 15,
    class: "9th Grade",
    percentageScore: 89.6,
    gender: "Male",
    hobbies: ["Skateboarding", "Math"],
    attendance: "90%"
  }
];

console.log(students);

/**
 * Assignment:
 * 
 * using the data in students
 * 1. get a list of all the student's names
 * 2. get all students with a percentage score greater than or equal to 90
 * 3. get the average age of all students
 */

const studentNames = students.map((student) => {
  return student.name
})
console.log({studentNames})

const highPerformingStudents = students.filter((student) => {
  return  student.percentageScore >= 90;
});
console.log({highPerformingStudents})

const averageAge = students.reduce((prev, student) => {
  return prev + student.age
}, 0)  / students.length

console.log({averageAge})




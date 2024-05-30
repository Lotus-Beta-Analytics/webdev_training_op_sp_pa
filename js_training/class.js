class Fruit {
  /**
   *
   * @param {string} name the name of the fruit
   * @param {string} color the color of the fruit
   * @param {boolean} hasSeeds does the fruit have seeds
   */
  constructor(name, color, hasSeeds) {
    this.name = name;
    this.color = color;
    this.hasSeeds = hasSeeds;
  }

  shortDescription() {
    // example of inline if statement
    // condition ? console.log("condition is true") : console.log("condition is false")
    const hasSeedsText = this.hasSeeds ? "seeds" : "no seeds";

    // string concatenation
    console.log(
      "A " +
        this.name +
        " is a fruit that has " +
        hasSeedsText +
        " and is color " +
        this.color
    );

    // string interpolation
    console.log(
      `A ${this.name} is a fruit that has ${hasSeedsText} and is color ${this.color}`
    );
  }
}

// const banana = new Fruit("Banana", "Yellow", false)
// // console.log(banana.color)
// banana.shortDescription()

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
  // Add more objects as needed
];

class Person {
  constructor(name, age, sex, height) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
  }

  basicInformation() {
    const info = `
Here are ${this.name}'s Details:
name: ${this.name}
age: ${this.age}
sex: ${this.sex}
height: ${this.height}
    `;
    return info;
  }

  static isMammal() {
    return true;
  }

  static under50() {
    const response = people.filter((person) => person.age < 50);
    return response;
  }
}

class Employee extends Person {
  constructor(
    name,
    age,
    sex,
    height,
    employeeId,
    yearsOfExperience,
    areaOfSpecialization
  ) {
    super(name, age, sex, height);
    this.employeeId = employeeId;
    this.yearsOfExperience = yearsOfExperience;
    this.areaOfSpecialization = areaOfSpecialization;
  }

  employeeProfile(isCurrentlyEmployed = true) {
    const profile = `Employee ID: ${this.employeeId}, ${isCurrentlyEmployed ? "Employed": "Unemployed"}`;
    return profile;
  }

  basicInformation() {
    const info = `
Here are ${this.name}'s Details:
name: ${this.name}
age: ${this.age}
sex: ${this.sex}
height: ${this.height}
employeeId:  ${this.employeeId}
yearsOfExperience: ${this.yearsOfExperience}
areaOfSpecialization: ${this.areaOfSpecialization}
    `;
    return info;
  }
}

const employee1 = new Employee(
  "John",
  35,
  "Male",
  "1.5m",
  "000105",
  7,
  "Marketing"
);

console.log(employee1 instanceof Employee);
console.log(employee1 instanceof Person);

console.log(employee1.employeeProfile(false));
console.log(employee1.basicInformation());

console.log(Employee.isMammal());
console.log(Employee.under50());

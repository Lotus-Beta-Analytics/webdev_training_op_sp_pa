const array2 = ["fan", "ac", "tv", "chair"];
const array3 = ["bag", "foam", "tv", "monitor"];
const array4 = ["fan", "ac", "tv", "chair", "bag", "foam", "chair", "monitor"];

function printItemsInArray(array = []) {
  let result = "Chair not found!";

  for (const item of array) {
    // console.log(item);
    if (item === "chair") {
      result = "Found a chair!";
      // console.log("Found a chair!");
    }
  }

  return result;
}

const printItemsWithIndexInArray = (array) => {
  // this iterates through the index of the items in the array
  for (const index in array) {
    console.log(`Index ${index}: ${array[index]}`);
  }

  // this iterates through the items in the array
  // for (const item of array) {
  //   console.log(`item: ${item}`);
  // }
};

(string) => {
  return string
}

// const isChairInArr3 = printItemsInArray(array3);
// const isChairInArr4 = printItemsInArray(array4);

// console.log("is chair in array 3: ", isChairInArr3);
// console.log("is chair in array 4: ", isChairInArr4);

printItemsWithIndexInArray(array3)

const arrFunction = (stringList) => {
  for (const string of stringList) {
    console.log(string)
  }
  return stringList.length
}

arrFunction(["one", "two"]);

(stringList) => {
  for (const string of stringList) {
    console.log(string)
  }
  return stringList.length
}
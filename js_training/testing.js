function generateRandomCode(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const strings = ["CEO", "BA", "GM", "Admin"];
const codeMapping = {};

strings.forEach((str) => {
  let code;
  do {
    code = generateRandomCode(6);
  } while (code in codeMapping); // Ensure the code is unique
  codeMapping[code] = str;
});

console.log(codeMapping);

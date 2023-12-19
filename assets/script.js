// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordChars = parseInt(
    prompt(
      "Please select the amount of characters your password will contain: Any number from 8 - 128"
    )
  );
  if (passwordChars >= 8 && passwordChars <= 128) {
    var passwordArray = [];
    var specialChars = confirm(
      "Select OK if you want special characters included"
    );
    if (specialChars) {
      passwordArray.push(...specialCharacters);
    }
    var numberChars = confirm(
      "Select OK if you want numerical characters included"
    );
    if (numberChars) {
      passwordArray.push(...numericCharacters);
    }
    var lowerChars = confirm(
      "Select OK if you want lower-cased characters included"
    );
    if (lowerChars) {
      passwordArray.push(...lowerCasedCharacters);
    }
    var upperChars = confirm(
      "Select OK if you want upper-cased characters included"
    );
    if (upperChars) {
      passwordArray.push(...upperCasedCharacters);
    }
    var passwordAmount = "";
    for (var i = 0; i < passwordChars; i++) {
      passwordAmount += getRandom(passwordArray);
    }
    return passwordAmount;
  } else {
    alert("Please input a number between 8 and 128 to generate a password.");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // // Additional Functionality that was uneccessary really
  // alert(
  //   `Your Generated Password is: ${password}\n Click OK to copy your password from the text area.`
  // );
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

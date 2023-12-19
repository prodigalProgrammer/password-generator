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
  // Parses any value from the 'passwordChars' prompt to become an integer.
  var passwordChars = parseInt(
    prompt(
      "Please select the amount of characters your password will contain: Any number from 8 - 128"
    )
  );
  // If the 'passwordChars' prompt produces a value between 8 and 128, run this IF statement below.
  if (passwordChars >= 8 && passwordChars <= 128) {
    // Empty array that character types will be pushed into
    var passwordArray = [];
    // if the 'specialChars' prompt is true (clicked OK), then the 'specialCharacters' array is pushed into 'passwordArray'.
    var specialChars = confirm(
      "Select OK if you want special characters included"
    );
    if (specialChars) {
      // Spread operator is used to push the individual indexes of specialCharaters, and not just the array itself.
      passwordArray.push(...specialCharacters);
    }
    // if the 'numberChars' prompt is true (clicked OK), then the 'numericCharacters' array is pushed into 'passwordArray'.
    var numberChars = confirm(
      "Select OK if you want numerical characters included"
    );
    if (numberChars) {
      // Spread operator is used to push the individual indexes of numericCharaters, and not just the array itself.
      passwordArray.push(...numericCharacters);
    }
    // if the 'lowerChars' prompt is true (clicked OK), then the 'lowerCasedCharacters' array is pushed into 'passwordArray'.
    var lowerChars = confirm(
      "Select OK if you want lower-cased characters included"
    );
    if (lowerChars) {
      // Spread operator is used to push the individual indexes of lowerCasedCharaters, and not just the array itself.
      passwordArray.push(...lowerCasedCharacters);
    }
    // if the 'upperChars' prompt is true (clicked OK), then the 'upperCasedCharacters' array is pushed into 'passwordArray'.
    var upperChars = confirm(
      "Select OK if you want upper-cased characters included"
    );
    if (upperChars) {
      // Spread operator is used to push the individual indexes of upperCasedCharaters, and not just the array itself.
      passwordArray.push(...upperCasedCharacters);
    }
    // IF statement that makes sure that one valid character type must be selected to generate a password.
    if (!specialChars && !numberChars && !lowerChars && !upperChars) {
      alert("Please select at least one character type.");
    } else {
      // Combining all of the for loop results into a variable named 'passwordAmount'
      var passwordAmount = "";
      for (var i = 0; i < passwordChars; i++) {
        passwordAmount += getRandom(passwordArray);
      }
      // Once all characters are combined, the value of 'passwordAmount' is returned.
      return passwordAmount;
    }
  } else {
    // This ELSE statement prohibits the user from inputting anything else but an integer between 8 and 128.
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

  // Nullish coalescing operator stops 'undifined' from being printed if there is no character type selected.
  passwordText.value = password ?? "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

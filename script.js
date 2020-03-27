//---All of the options:
//do they want lowercase-create VAR
var lowerCase = [
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
  "z"
];

//do they want upper case -create VAR
var upperCase = [
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
  "Z"
];
//do they want special characters- create VAR
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/"];
//do they want numbers- Create VAR
var optionNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like in your password?")
  );

  if (length >= 8) {
    var hasLowerCase = confirm("Would you like lower case letters?");
    var hasUpperCase = confirm("Would you like upper case letters?");
    var hasOptionNumbers = confirm("Would you like numbers?");
    var hasSpecialCharacters = confirm("would you like special Characters?");
  } else {
    alert("Please pick a number between 8-128!");
  }
  var passwordOptions = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasOptionNumbers: hasOptionNumbers,
    hasSpecialCharacters: hasSpecialCharacters
  };
  return passwordOptions;
}

function randomizer(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(randomizer(lowerCase));
  }
  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(randomizer(upperCase));
  }
  if (options.hasOptionNumbers) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(randomizer(optionNumbers));
  }
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(randomizer(specialCharacters));
  }

  for (i = 0; i < options.length; i++) {
    var possibleCharacters = randomizer(possibleCharacters);
    result.push(possibleCharacters);
  }
  for (i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join("");
}

//-------code we started with------------

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

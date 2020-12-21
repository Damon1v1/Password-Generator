// Assignment Code
var generateBtn = document.querySelector("#generate");

// special characters array
var specialChar = ["!", "@", "#", 
                   "$", "%", "^",
                   "&", "*", "(",
                   ")", "_", "=",
                   "-", "+", "[",
                   "]", "{", "}",
                   "|", ":", '\\',
                   ";", "'", '"',
                   ",", "<", ".",
                   ">", "?", "/",
                   "`", "~",];

// uppercase characters array
var upperChar = ["A", "B", "C",
                 "D", "E", "F",
                 "G", "H", "I",
                 "J", "K", "L",
                 "M", "N", "O",
                 "P", "Q", "R",
                 "S", "T", "U",
                 "V", "W", "X",
                 "Y", "Z",];

// lowercase characters array
var lowerChar = ["a", "b", "c",
                 "d", "e", "f",
                 "g", "h", "i",
                 "j", "k", "l",
                 "m", "n", "o",
                 "p", "q", "r",
                 "s", "t", "u",
                 "v", "w", "x",
                 "y", "z",];

//numbers array
var numberChar = ["1", "2",
                  "3", "4",
                  "5", "6",
                  "7", "8",
                  "9", "0",];


function getPasswordOptions() {
  //asks user for how many characters they like their password to be and parses it as an integer
  var userLength = parseInt(prompt("Select between 8-128 characters for your password:"));
  //conditional if the user doesn't input a number
  if (isNaN(userLength) === true) {
    alert("Input needs to be a number");
    return;
  }
  //conditional if they input anything less than 8
  if (userLength < 8) {
    alert("Password must be at least 8 characters");
    return;
  }
  //conditional if they input anything more than 128
  if (userLength > 128) {
    alert("Password must be less than 128 characters");
    return;
  }
  //asks user to confirm using capital letters
  var userCap = confirm("Capital letters:");
  //asks user to confirm using lowercase letters 
  var userLower = confirm("Lowercase letters:");
  //asks user to confirm using numbers
  var userNum = confirm("Numbers:");
  //asks user to confirm using special characters
  var userSpecial = confirm("Special characters:");
  //stores all the selected options
  var passwordOptions = {
    userLength: userLength,
    userSpecial: userSpecial,
    userNum: userNum,
    userLower: userLower,
    userCap: userCap
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  //runs getPasswordOptions function and stores those results in the options variable
  var options = getPasswordOptions();
  passwordFinal = [];
  possibleChar = [];
  absoluteChar = [];

  if (options.userNum) {
    possibleChar = possibleChar.concat(numberChar);
    absoluteChar.push(getRandom(numberChar));
  }

  if (options.userSpecial) {
    possibleChar = possibleChar.concat(specialChar);
    absoluteChar.push(getRandom(specialChar));
  }

  if (options.userLower) {
    possibleChar = possibleChar.concat(lowerChar);
    absoluteChar.push(getRandom(lowerChar));
  }

  if (options.userCap) {
    possibleChar = possibleChar.concat(upperChar);
    absoluteChar.push(getRandom(upperChar));
  }

  for (var i = 0; i < options.userLength; i++) {
    var randomChar = getRandom(possibleChar);

    passwordFinal.push(randomChar);
  }

  for (var i = 0; i < absoluteChar.length; i++) {
    passwordFinal[i] = absoluteChar[i];
  }

  return passwordFinal.join('');

}


var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
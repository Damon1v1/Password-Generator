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
                   "`", "~",]

// uppercase characters array
var upperChar = ["A", "B", "C",
                 "D", "E", "F",
                 "G", "H", "I",
                 "J", "K", "L",
                 "M", "N", "O",
                 "P", "Q", "R",
                 "S", "T", "U",
                 "V", "W", "X",
                 "Y", "Z",]

// lowercase characters array
var lowerChar = ["a", "b", "c",
                 "d", "e", "f",
                 "g", "h", "i",
                 "j", "k", "l",
                 "m", "n", "o",
                 "p", "q", "r",
                 "s", "t", "u",
                 "v", "w", "x",
                 "y", "z",]

//numbers array
var numberChar = ["1", "2",
                  "3", "4",
                  "5", "6",
                  "7", "8",
                  "9", "0",]


function getPasswordOptions() {
  var userNum = parseInt(prompt("Select between 8-128 characters for your password:"));
  
  if (isNaN(userNum) === true) {
    alert("Input needs to be a number");
    return;
  }

  if (userNum < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (userNum > 128) {
    alert("Password must be less than 128 characters");
    return;
  }

  var userCap = confirm("Capital letters:");

  var userLower = confirm("Lowercase letters:");

  var userNumbers = confirm("Numbers:");

  var userSpecial = confirm("Special characters:");

  var passwordOptions = {
    userNum: userNum,
    userSpecial: userSpecial,
    userNumbers: userNumbers,
    userLower: userLower,
    userCap: userCap
  };

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
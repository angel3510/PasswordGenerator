// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var resultArray = [];
var userArray = [];

uppercaseArray [1]

  var length = prompt ("Please choose the length of your password betwen 8 to 128 characters");
  var numeric = confirm ("Include numbers?");
  var uppercase = confirm ("Include uppercase?");
  var lowercase = confirm ("Include lowercase?");
  var specialCharacters = confirm ("Include special characters?");



if (numeric) {
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercase) {
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercase) {
  resultArray = resultArray.concat(lowercaseArray);

}

if (specialCharacters) {
  resultArray = resultArray.concat(characterArray);
}

for (var i = 0; i < length; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
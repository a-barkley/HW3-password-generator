// Assignment Code
var generateBtn = document.querySelector("#generate");


var allLowercase = "qwertyuiopasdfghjklzxcvbnm"
var allUppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var allNumbers = "0123456789"
var allSpecial = "!\u0022#$%&\u0027()*+,-./:;<=>?@[\]^_`{|}~"
var newPassword = ""

function generatePassword() {
  // Generates confirm and prompt alerts asking the user for password criteria
  var confirmLowercase = confirm("Would you like your password to include lowercase letters?");
  var confirmUppercase = confirm("Would you like your password to include uppercase letters?");
  var confirmNumbers = confirm("Would you like your password to include numbers?");
  var confirmSpecial = confirm("Would you like your password to include special characters?");
  var passLength = prompt("Choose a password length between 8 and 128");
  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 characters and 128 characters");
  }

  var allCharacters = (allLowercase * confirmLowercase) + (allUppercase * confirmUppercase) + (allNumbers * confirmNumbers) + (allSpecial * confirmSpecial);

  for (var i = 0; i <= passLength; i++) {
    var randomNumber = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters.substring(randomNumber, randomNumber + 1);
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
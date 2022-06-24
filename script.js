// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generates confirm and prompt alerts asking the user for password criteria
function generatePassword() {
  var confirmLowercase = confirm("Would you like your password to include lowercase letters?")
  var confirmUppercase = confirm("Would you like your password to include uppercase letters?")
  var confirmNumbers = confirm("Would you like your password to include numbers?")
  var confirmSpecial = confirm("Would you like your password to include special characters?")
  var passLength = prompt("Choose a password length between 8 and 128")
  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 characters and 128 characters")
  }
  var allNums = "0123456789"
  var allLowercase = "qwertyuiopasdfghjklzxcvbnm"
  var allUppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var allSpecial = "!\u0022#$%&\u0027()*+,-./:;<=>?@[\]^_`{|}~"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
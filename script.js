// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercase = confirm("Would you like your password to include lowercase letters?")
  var uppercase = confirm("Would you like your password to include uppercase letters?")
  var numbers = confirm("Would you like your password to include numbers?")
  var special = confirm("Would you like your password to include special characters?")
  var passLength = prompt("Choose a password length between 8 and 128")
  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 characters and 128 characters")
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
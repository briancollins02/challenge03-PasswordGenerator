// Assignment Code
var generateBtn = document.querySelector("#generate");
let passResult = ''
passwordText = '';
passResult = ''
let passGen = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  sym: false
};

// Character list
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const sym = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passResult;
}

// character functions
function generatePassword() {

  // Ask for password criteria
  passGen.length = Number(prompt("choose a password length between 8 and 128"));
  if (passGen.length < 8 || passGen.length >128) {
    alert("Password length must be a number between 8 and 128!");
    return generatePassword;
  }
  passGen.lowercase = confirm("Include lower-case letters?");
  passGen.uppercase = confirm("Include upper-case letters?");
  passGen.numeric = confirm("Include numbers?");
  passGen.sym = confirm("Include special characters?");
  // check if at least one character type was selected
  if (passGen.lowercase == false && passGen.uppercase == false && passGen.numeric == false && passGen.sym == false) {
    alert("Password must contain at least one character type!")
    return generatePassword;
  }
  // Call function
  charSelection();
  //shuffle the generated password
  var shuffled = passResult.split('').sort(function(){
    return 0.5 - Math.random()
  }) .join('');
  passResult = shuffled;
}

// Character Selection 
function charSelection() {
  for (passResult = '';  passResult.length < passGen.length;) {
    if (passGen.lowercase == true) {
      passResult += lower.charAt(Math.floor(Math.random() * lower.length));
    }
    if (passGen.uppercase == true && passResult.length < passGen.length) {
      passResult += upper.charAt(Math.floor(Math.random() * upper.length));
    }
    if (passGen.numeric == true && passResult.length < passGen.length) {
      passResult += num.charAt(Math.floor(Math.random() * num.length));
    }
    if (passGen.sym == true && passResult.length < passGen.length) {
      passResult += sym.charAt(Math.floor(Math.random() * sym.length));
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
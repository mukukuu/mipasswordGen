// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//to generate 8 - 128 long password
document.getElementById("generate").addEventListener("click", writePassword());
//ask if user want a password between 8 - 128
var promptlength = window.prompt('Would you like to generate a secure password with more than 8 characters, includes uppercase letters, lower case letters and special characters? Enter "8" or "128"  to generate 8 - 128 long random password.');
if (promptlength === "8" || promptlength === "128") {
}
if (promptlength) {
  writePassword()

  var confirmchara = window.confirm("Would you like to include lowercase, uppercase, numeric and special characters?"); 
console.log(confirmchara);
  if (confirmchara) {
    window.alert("generating new password...");
    if (confirmchara === "yes") {
      var confirmchara = window.confirm("Return to prvious window for a secure password.");
    }

  }

};


// Write password to the #password input
function writePassword() {
  //generate 10 characters password
  {
    var chars = "1234567890";
    var passwordLength = 100;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;

  }
};

function writePassword() {
  //generate 10 characters password
  {
    var chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+";
    var passwordLength = 100;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;

  }
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//to generate 8 - 128 long password
document.getElementById("generate").addEventListener("click", writePassword());
   //ask if user want a password between 8 - 128
   var promptlength = window.prompt('Would you like to generate a secure password with more than 8 characters, includes uppercase letters, lower case letters and special characters? Enter "yes" only to generate.');
     if (promptlength === "yes" || promptlength === "YES") {
     }
     if (promptlength) {
      writePassword()
      
     };
//to generate to to include lowercase, uppercase, numeric, and/or special characters
document.getElementById("generate").addEventListener("click", writePassword());
   //ask user
   var promptlength = window.prompt('Would you like to generate a secure password to include lowercase, uppercase, numeric, and/or special characters? Enter "yes" only to generate.');
     if (promptlength === "yes" || promptlength === "YES") {
     }
     if (promptlength) {
      writePasswordS()
     };

// Write password to the #password input
function writePassword() { 
  //generate 10 characters password
{ var chars = "1234567890"
  var passwordLength = 100;
  var password = "";
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber,randomNumber + 1);
} 
  document.getElementById("password").value = password;
  
}
};
//generate 
function writePasswordS() { 
  //generate 10 characters password
{ var chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()"
  var passwordLength = 100;
  var password = "";
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber,randomNumber + 1);
} 
  document.getElementById("password").value = password;
}
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


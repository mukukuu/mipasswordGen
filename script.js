// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//to generate 8 - 128 long password
document.getElementById("generate").addEventListener("click", writePassword());
//ask if user want a password between 8 - 128
var promptlength = window.prompt('Would you like to generate a secure password with more than 8 characters, includes uppercase letters, lower case letters and special characters? Enter "8" or "any numbers bigger than 8" to generate 8 or 128 long random password.');
if (promptlength === "8" || promptlength === "128") {

if (promptlength ="8") {
  write8(); 
}else {
  writePassword();
}
}
//ask the user to create a secure password
confirmchara = window.confirm("Would you like to generate a secure password including lowercase, uppercase, numeric and special characters? click GENERATE PASSWORD after your first password for a secure password."); 
console.log(confirmchara);
  if (confirmchara) {
    window.alert("generating new password...");
    if (confirmchara === "yes") {
      var confirmchara = window.confirm("Return to prvious window for a secure password.");
    }
    writePassword();
  };
  




// Write password to the #password input
function write8() {
  //generate 8 characters password
  {
    var num8 = "1234567890";
    var password128 = "128";
    var passwordLength = 8;
    var password8 = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * num8.length);
      password8 += num8.substring(randomNumber, randomNumber + 1);
    }
    //generate 128 long password
    if (promptlength > 8){
      for (var i = 0; i <= password128; i++) {
        var randomNumber = Math.floor(Math.random() * num8.length);
        password8 += num8.substring(randomNumber, randomNumber + 1);
      }
    }
    document.getElementById("password").value = password8;

  }
};

function writePassword() {
  //generate random characters password
  {
    var chars =  "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+";
    var passwordLength = 100;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;

  }
};

//...
var password = {
  length: writePassword(),
};


var password8 = {
  num8: write8(),
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



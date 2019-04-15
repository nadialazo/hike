
let userNames = ["Natasha Franklin", "John Christopher", "Isabella Garcia","Jasen Arbalast", "Sherwin Johnson"];
let fileNames = ["User5.png", "User3.png", "User6.png", "User2.png", "User4.png"];
let myArray = [];
let myString = "";



for (let j = 0; j < userNames.length;j++){
    myArray = "<img src= 'images/users/" + fileNames[j] +"'>"
    myString += "<div class = 'users'>" + myArray + userNames[j] + "</p> </div>"
}


document.getElementById("display").innerHTML = myString;





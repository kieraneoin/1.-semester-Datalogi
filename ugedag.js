var ugedag; // Variabel der kigger på hvilken ugedag det er
var ugedageTal;//Variabel der tager ugedagen og gemmer den som tal
var traeneDage; //Variabel der gemmer traenedage
var traeneDageTal; //Variabel der tager traenedage og gemmer den som tal
var foersteFridag; //Variabel der gemmer på den første fridag du får
var weekend; //Variabel der gemmer på om det er weekend eller ej i en boolean

ugedag = prompt("hvad ugedag er det? brug tal 0 = mandag, 1 = tirsdag osv"); //Prompt der spørger hvilken ugedag det er i form af tal
ugedagTal = Number(ugedag); //Den indtastede ugedags type ændres fra en string til et tal og gemmes i en ny variabel
traeneDage = prompt("hvor mange dage skal du træne før du kan slappe af"); //Spørger hvor længe man skal træne i
traeneDageTal = Number(traeneDage); //Den indtastede traeneDages type ændres fra en string til et tal og gemmes i en ny variabel
foersteFridag = (ugedag + traeneDage + 1)%7; //Finder ud af hvilken dag du får fri på
alert("du får fri på ugedag " + foersteFridag); //Fortæller dig hvilken dag du får fri på
weekend = (foersteFridag > 4); //Undersøger om din første fridag er en weekend eller ej

alert( "er det weekend? " + weekend); //Fortæller dig om din første fridag er en weekend eller ej


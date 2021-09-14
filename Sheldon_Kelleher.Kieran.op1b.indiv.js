var fødselsmåned = "December";
var fødselsdag = "12";

var fødselsmånedGaet = "";
var fødselsdagGaet = 0;

fødselsmånedGaet = prompt("Hvilken måned tror du at jeg er født i?");
fødselsdagGaet = prompt("Hvilken dag i " + fødselsmånedGaet + "tror du at jeg er født i?");

if(fødselsmåned == fødselsmånedGaet && fødselsdag == fødselsdagGaet){
    alert("Godt gættet min ven.");
} else{
    alert("Du tager fejl, idiot.");
}
var fødselsmåned = "December"; //Jeg deklarer og værditildeler de to variable der indeholder min fødselsdag
var fødselsdag = "12";

var fødselsmånedGaet = ""; //To variable der skal gemme på de indtastede værdier af brugeren
var fødselsdagGaet = 0;

fødselsmånedGaet = prompt("Hvilken måned tror du at jeg er født i?"); //Hvor de to gæt skrives ind
fødselsdagGaet = prompt("Hvilken dag i " + fødselsmånedGaet + "tror du at jeg er født i?");

if(fødselsmåned == fødselsmånedGaet && fødselsdag == fødselsdagGaet){ //If-statement undesøger om variablerne stemmer overens
    alert("Godt gættet min ven.");
} else{
    alert("Du tager fejl, idiot.");
}
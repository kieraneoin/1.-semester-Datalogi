//Opg 1
var toOrdMedMellemrum;
var mellemrumEtA;
var ordEtA;
var ordToA;

toOrdMedMellemrum = prompt("Skriv to ord adskilt af et mellemrum");
mellemrumEtA = toOrdMedMellemrum.indexOf(" ");
ordEtA = toOrdMedMellemrum.slice(0,mellemrumEtA);
ordToA = toOrdMedMellemrum.slice(mellemrumEtA);
alert(ordToA + " " + ordEtA);

//Opg 2
var treOrdMedMellemrum;
var mellemrumEtB;
var mellemrumToB;
var ordEtB;
var ordToB;
var ordTreB

treOrdMedMellemrum = prompt("Skriv tre ord adskilt af mellemrum");
mellemrumEtB = treOrdMedMellemrum.indexOf(" ");
mellemrumToB = treOrdMedMellemrum.indexOf(" ",treOrdMedMellemrum.indexOf(" ")+1);
ordEtB = treOrdMedMellemrum.slice(0,mellemrumEtB);
ordToB = treOrdMedMellemrum.slice(mellemrumEtB,mellemrumToB);
ordTreB = treOrdMedMellemrum.slice(mellemrumToB);
alert(ordTreB + " " + ordToB + "  " + ordEtB);

//Opg 3
var erOrdToKomm;
var ordEtC;
var ordToC;
var stortKKomm;
var lilleKKom;

erOrdToKomm = prompt("Skriv en sætning hvor det andet ord er 'Kommunikation', eller 'kommunikation'");
mellemrumEtC = erOrdToKomm.indexOf(" ");
stortKKomm = "Kommunikation";
lilleKKom = "kommunikation";
ordEtC = erOrdToKomm.slice(0,mellemrumEtC);
ordToC = erOrdToKomm.slice(mellemrumEtC);

if(ordToC == stortKKomm || ordToC == lilleKKom){
    alert("Det andet ord er 'Kommunikation' eller 'kommunikation'")
}

alert(ordEtC + " " + ordToC);

//Opg 4
var tekst = "";
var mellemrum = "";

var tekst = prompt("Indtast en sætning på 3 ord");
var mellemrum = tekst.indexOf(" ");
var sidsteMellemrum = tekst.lastIndexOf(" ");
var andetOrd = tekst.slice(mellemrum+1,sidsteMellemrum); //gemmer andet ord i variabel
andetOrd.toLowerCase() == "kommunikation"

/*
Først modtages der en tekst fra brugeren. Derefter findes der hvor det første mellemrum er.
Derefter findes der hvor det sidste mellemrum er.
Ud fra disse oplysninger kan det andet ord i brugerteksten nu findes.
Dette gøres til kun med små bogstaver og sammenlignes med kommunikation, svaret printes til brugeren.
*/

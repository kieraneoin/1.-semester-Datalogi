/*
Brugeren bliver bedt om at indtaste to sætninger afsluttet med punktum.
Programmet undersøger så hvilken sætning der er længst og udskriver den længste.
Hvis sætningerne er lige lange udskrives den første sætning.
*/
laengsteSaetning();
function laengsteSaetning(text) {
    var text = prompt("Indtast to (2) sætninger der begge afsluttes med et punktum.");
    var foerstePunktum = text.indexOf("."); //Leder efter det første punktum
    var foersteSaetning = text.slice(0, foerstePunktum + 1); 
    var andetPunktum = text.lastIndexOf(".");
    var andensaetning = text.slice(foerstePunktum + 2, andetPunktum + 1); //Begynder anden sætning ved første bogstav og ikke mellemrummet efter punktum
    var saetningEtLaengde = foersteSaetning.length; //Returnerer de to sætningers længde
    var saetningToLaengde = andensaetning.length;

    if (saetningEtLaengde > saetningToLaengde) { //Returnerer den længste sætning
        return foersteSaetning;
    } else if (saetningEtLaengde < saetningToLaengde) {
        return andensaetning;
    } else if (saetningEtLaengde == saetningToLaengde) {
        return foersteSaetning;
    }
}

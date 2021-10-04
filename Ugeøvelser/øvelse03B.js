//Opg1
/*
Brugeren skriver hvilken dag det er og programmet vurderer om den indskrevne dag er fredag.
*/
function erDetFredag(dag) {
    if (dag == "Fredag" || dag == "fredag") {
        return "Ja, det er fredag!";
    }
    else {
        return "Nej, det er ikke fredag!?";
    }
}

//Opg2
/*
Det samme som Opg1 bortset fra at den angivne dag skrives hvis ikke det er fredag.
 */
function erDetFredag(dag) {
    if (dag == "Fredag" || dag == "fredag") {
        return "Ja, det er fredag!";
    }
    else {
        return "Nej, det er " + dag;
    }
}

//Opg3
/*
Brugeren indtaster et klokkeslet og modtager ét af to svar fra programmet baseret på klokkeslettet.
*/
function hvadErKlokken(klokkeslet) {
    if (klokkeslet >= 1100 && klokkeslet <= 2359) {
        return "Wah Wah Wah";
    } else {
        return "ZZzzz";
    }
}

//Opg4
/*
Det samme som Opg3 bare med ekstra trin.
*/
function hvadErKlokken(klokkeslet) {
    if (klokkeslet >= 0000 && klokkeslet < 1100) {
        return "ZZzzz";
    } else if (klokkeslet == 1100) {
        return "Wah Wah Wah";
    } else if (klokkeslet > 1100 && klokkeslet <= 1759) {
        return "Frokost!";
    } else if (klokkeslet >= 1800 && klokkeslet <= 2359) {
        return "Gaaaaab";
    } else {
        return "Det er ikke et klokkeslet";
    }
}

//Opg5
/*
Brugeren indtaster en måned med tal (fx. 1 = januar) og får så svar på hvilken måned det er. Hvis ikke tallet har en tilsvarende måned fortæller programmet også dette.
*/
function hvilkenMaaned(maaned) {
    if (maaned == 1) {
        return "Januar";
    } else if (maaned == 2) {
        return "Februar";
    } else if (maaned == 3) {
        return "Marts";
    } else if (maaned == 4) {
        return "April";
    } else if (maaned == 5) {
        return "Maj";
    } else if (maaned == 6) {
        return "Juni";
    } else if (maaned == 7) {
        return "Juli";
    } else if (maaned == 8) {
        return "August";
    } else if (maaned == 9) {
        return "September"
    } else if (maaned == 10) {
        return "Oktober"
    } else if (maaned == 11) {
        return "November";
    } else if (maaned == 12) {
        return "December";
    } else {
        return "Det er ikke en måned";
    }
}

//Opg6
/*
Brugeren angiver et tal mellem 1-30 og får en ugedag i september måned 2020.
*/
function hvilkenUgedag(dato) {
    if (dato == 1 || dato == 8 || dato == 15 || dato == 22 || dato == 29) { return "Det er tirsdag" }
    else if (dato == 2 || dato == 9 || dato == 16 || dato == 23 || dato == 30) { return "Det er onsdag"; }
    else if (dato == 3 || dato == 10 || dato == 17 || dato == 24) { return "Det er torsdag"; }
    else if (dato == 4 || dato == 11 || dato == 18 || dato == 25) { return "Det er fredag"; }
    else if (dato == 5 || dato == 12 || dato == 19 || dato == 26) { return "Det er lørdag"; }
    else if (dato == 6 || dato == 13 || dato == 20 || dato == 27) { return "Det er søndag"; }
    else if (dato == 7 || dato == 14 || dato == 21 || dato == 28) { return "Det er mandag"; }
    else { return "Det er ikke en dato"; }
}
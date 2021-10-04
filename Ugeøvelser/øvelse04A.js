//Opg1.1
function KHV(tekst, HAlder, HdoedsDato, Htidspunkt) {
    var alder = tekst.indexOf("xx");
    var efterAlder = alder + 2;
    var doedsDato = tekst.indexOf("xxx");
    var efterDoedsDato = doedsDato + 3;
    var tidspunkt = tekst.indexOf("xxxx");

    var tekstTilxx = tekst.slice(0, alder) + HAlder;
    var tekstTilxxx = tekst.slice(efterAlder, doedsDato) + HdoedsDato;
    var tekstTilxxxx = tekst.slice(efterDoedsDato, tidspunkt) + Htidspunkt;

    alert("Paste teksten: 'Norge er i sorg. Kong Harald V er død, xx år gammel. Kongen døde xxx, klokken xxxx', skriv hans alder, en dato (fx 29/04), og et tidspunkt(\"12:39\")")
    return tekstTilxx + tekstTilxxx + tekstTilxxxx;

}
KHV("Norge er i sorg. Kong Harald V er død, xx år gammel. Kongen døde xxx, klokken xxxx", "80", "29/09", "12:30");

//Opg1.2
//Switch-løsning
var sted = Number(prompt("Skriv et tal 0-3"));
switch (sted) {
    case 0:
        sted = "hjemme";
        break;
    case 1:
        sted = "på sykehus";
        break;
    case 2:
        sted = "i Bergen";
        break;
    case 3:
        sted = "da han var på ski";
        break;
    default:
        sted = "intet sted";
}

//If-løsning
var sted = Number(prompt("Skriv et tal 0-3"));
if (sted == 0) {
    sted = "hjemme";
} else if (sted == 1) {
    sted = "på sykehus";
} else if (sted == 2) {
    sted = "i Bergen";
} else if (sted == 3) {
    sted = "da han var på ski";
} else ("intet sted");


//Opg1.3
function KHVAlder(dag, maaned, aar) {
    var dag = Number(prompt("Hvilken dag på måneden er det?"));
    var maaned = Number(prompt("Hvilken måned er det angivet i tal?"));
    var aar = Number(prompt("Hvilket år er det?"))
    var KHVDag = 21;
    var KHVMaaned = 2;
    var KHVAar = 1937;

    var alderDage = dag - KHVDag;
    var alderMaaneder = maaned - KHVMaaned;
    var alderAar = aar - KHVAar;
    return "Kong Harald V er " + alderAar + " år, " + alderMaaneder + " måneder, og " + alderDage + " dage gammel.";
}
KHVAlder();

//Opg2.1
function blod(alder, vaegt, tidSidenSidsteDonation) {
    var alder = Number(prompt("Hvor gammel er du?"));
    var vaegt = Number(prompt("Hvad vejer du i kg?"));
    var tidSidenSidsteDonation = Number(prompt("Hvor længe er det siden du sidst har doneret i mdr.?"));

    if (alder >= 17 && alder <= 60 && vaegt >= 50 && tidSidenSidsteDonation >= 3) {
        return true;
    } else {
        return false;
    }


}
blod();

//Opg2.2
function blod(alder, vaegt, tidSidenSidsteDonation) {
    var alder = Number(prompt("Hvor gammel er du?"));
    var vaegt = Number(prompt("Hvad vejer du i kg?"));
    var tidSidenSidsteDonation = Number(prompt("Hvor længe er det siden du sidst har doneret i mdr.?"));
    var alderFejl = "Du er desværre ikke gammel nok til at donere blod.";
    var vaegtFejl = "Du vejer desværre ikke nok til at donere blod.";
    var tidSidenSidsteDonationFejl = "Der er desværre ikke gået længe nok siden sidste donation.";

    if (alder >= 17 && alder <= 60 && vaegt >= 50 && tidSidenSidsteDonation >= 3) {
        console.log("Du opfylder alle kravene, tak for donationen!");
    } else if (alder < 17 && vaegt < 50 && tidSidenSidsteDonation < 3) {
        console.log("Du opfylder desværre ingen af kravene.");
    } else if (alder < 17 && vaegt < 50) {
        console.log(alderFejl + " og " + vaegtFejl);
    } else if (alder < 17 && tidSidenSidsteDonation < 3) {
        console.log(alderFejl + " og " + tidSidenSidsteDonationFejl);
    } else if (vaegt < 50 && tidSidenSidsteDonation < 3) {
        console.log(vaegtFejl + " og " + tidSidenSidsteDonationFejl);
    } else if (alder < 17) {
        console.log(alderFejl);
    } else if (vaegt < 50) {
        console.log(vaegtFejl);
    } else if (tidSidenSidsteDonation < 3) {
        console.log(tidSidenSidsteDonationFejl);
    }


}
blod();

//Opg2.3
/*
var Navn = "Kieran Eoin Sheldon Kelleher";
var Email = "kieraneoin@gmail.com";
var Telefon = "12345678";
var Brugernavn = "kieran";
var Kodeord = "KieranEoin"; 
*/



function bloddonor(Navn) {
    var Navn = prompt("Hvad er dit navn?");
    if (Navn.indexOf(" ") > -1) {
        return "Hej";

    } else {
        alert("Er du sikker på at det er dit navn?");
        var Navn = prompt("Hvad er dit navn?");
    }
}
bloddonor();
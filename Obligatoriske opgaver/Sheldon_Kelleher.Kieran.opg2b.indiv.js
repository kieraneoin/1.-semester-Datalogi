function sammenflet(tekst1, tekst2, ord) {
    alert("Skriv to tekster der minimum har ét ord til fælles");
    var tekst1 = prompt("Skriv en tekst");
    var tekst2 = prompt("Skriv endnu en tekst");
    var ord = prompt("Skriv ordet de to tekster har til fælles");
    var foersteOrd = tekst1.indexOf(ord);
    var foersteTekst = tekst1.slice(0,foersteOrd+ord.length);
    var andetOrd = tekst2.indexOf(ord);
    var andenTekst = tekst2.slice(andetOrd+ord.length);
    console.log(foersteTekst+andenTekst);
console.log(tekst1);
console.log(tekst2);
}
sammenflet();
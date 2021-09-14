var startSt;
var antalZoner;

startSt = prompt("Hvilken station begynder din rejse fra?");
antalZoner = Number(prompt("Hvor mange zoner spænder din rejse?"));

console.log("Deres rejse begynder på " + startSt + " station og spænder over " + antalZoner + " zoner. \n" + "Billeten udstedes " + new Date().toString() + " og er gyldig i " + (45 + antalZoner * 15) + " minutter.");
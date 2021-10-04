var startSt; //De indtastede værdier gemmes her
var antalZoner;

//Brugeren bedes om at angive start station og antal zoner de skal gennem
startSt = prompt("Hvilken station begynder din rejse fra?");
antalZoner = Number(prompt("Hvor mange zoner spænder din rejse?"));

//Der printes i konsollen de informationer brugeren har indtastet samt hvornår biletten udstedes og hvor længe den er gyldig
console.log("Deres rejse begynder på " + startSt + " station og spænder over " + antalZoner + " zoner. \n" + "Billeten udstedes " + new Date().toString() + " og er gyldig i " + (45 + antalZoner * 15) + " minutter.");
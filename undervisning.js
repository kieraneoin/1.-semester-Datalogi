//Variablerne deklareres
var forelaesningerOmUgen; 
var ugerIAlt;
var overstaaedeUger;
var alleForelaesningerJegHarHaft;
var antalForelaesningerTilbage;

//Variablerne tildeles en værdi
forelaesningerOmUgen = 2;
ugerIAlt = 14;
overstaaedeUger = 1;
alleForelaesningerJegHarHaft = 4;

antalGDForelaesningerIAlt = forelaesningerOmUgen*ugerIAlt;
antalForelaesningerTilbage = (ugerIAlt - overstaaedeUger)* forelaesningerOmUgen;
console.log("Forelæsninger i alt " + antalGDForelaesningerIAlt);
console.log("Forelæsninger jeg har haft " + alleForelaesningerJegHarHaft);
console.log("Forelæsninger tilbage " + antalForelaesningerTilbage);

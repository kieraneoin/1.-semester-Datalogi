var film_titel = "";
var produktions_aar = "";
var film_timer = 0;
var film_minutter = 0;
var film_sekunder = 0;
var reklameminutter = 5; 
var reklamesekunder = 20; 
var aarstal ="";


film_titel = prompt ("Titel");
produktions_aar = prompt ("År");
film_timer = Number(prompt ("Timer"));
film_minutter = Number(prompt ("Minutter")) + reklameminutter;
film_sekunder = Number(prompt ("Sekunder")) + reklamesekunder;
aarstal = Number(prompt("Hvilket år er det"))



// Gem de to tekststregne i hver deres variabel
var film_titelproduktion = "Filmen "+film_titel+" er produceret i år "+produktions_aar+" ";
var film_timerminuttersekunder = "Filmen er "+film_timer+" timer, "+film_minutter+" og "+film_sekunder+" sekunder lang. ";
var totalmin = "Filmen er "+(film_timer*60+film_minutter)+" minutter lang. ";
var filmAlder ="Filmen er "+ (aarstal - produktions_aar) + " år gammel. ";

film_titelproduktion + film_timerminuttersekunder + totalmin + filmAlder;
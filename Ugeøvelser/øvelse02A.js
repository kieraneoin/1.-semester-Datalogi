var helaftensfilm;
var børnefilm;
var voksenfilm;
var actionfilm;
var comedyfilm;

var film_titel1 = "";
var produktions_aar1 = "";
var film_timer1 = 0;
var film_minutter1 = 0;
var film_sekunder1 = 0;
var reklameminutter1 = 7; 
var reklamesekunder1 = 8; 
var aarstal1 =""; 
var filmSprog1 = "Sproget er på"+" >en<. "
var ugerGået1;
var ugerTilbage1;

var film_titel2 = "";
var produktions_aar2 = "";
var film_timer2 = 0;
var film_minutter2 = 0;
var film_sekunder2 = 0;
var reklameminutter2 = 7; 
var reklamesekunder2 = 8; 
var aarstal2 =""; 
var filmSprog2 = "Sproget er på"+" >en<. ";
var ugerGået2;
var ugerTilbage2;

var film_titel3 = "";
var produktions_aar3 = "";
var film_timer3 = 0;
var film_minutter3 = 0;
var film_sekunder3 = 0;
var reklameminutter3 = 7; 
var reklamesekunder3 = 8; 
var aarstal3 = "";
var filmSprog3 = "Sproget er på"+" >en<. "
var ugerGået3;
var ugerTilbage3;

film_titel1 = "Shrek 1";
produktions_aar1 = "2001";
film_timer1 = "1";
film_minutter1 = Number("30") + reklameminutter1;
film_sekunder1 = Number("0") + reklamesekunder1;
aarstal1 = "2021";
helaftensfilm = false;
børnefilm = true;
voksenfilm = false;
actionfilm = true;
comedyfilm = true;

film_titel2 = "Shrek 2";
produktions_aar2 = "2004";
film_timer2 = "1";
film_minutter2 = Number("33") + reklameminutter2;
film_sekunder2 = Number("0") + reklamesekunder2;
aarstal2 = "2021";
helaftensfilm = false;
børnefilm = true;
voksenfilm = false;
actionfilm = true;
comedyfilm = true;

film_titel3 = "Shrek 3";
produktions_aar3 = "2007";
film_timer3 = "1";
film_minutter3 = Number("33") + reklameminutter3;
film_sekunder3 = Number("0") + reklamesekunder3;
aarstal3 = "2021";
helaftensfilm = false;
børnefilm = true;
voksenfilm = false;
actionfilm = true;
comedyfilm = true;


// Gem de to tekststregne i hver deres variabel
var film_titelproduktion1 = "Filmen "+film_titel1+" er produceret i år "+produktions_aar1+" ";
var film_timerminuttersekunder1 = "Filmen er "+film_timer1+" timer, "+film_minutter1+" og "+film_sekunder1+" sekunder lang. ";
var totalmin1 = "Filmen er "+(film_timer1*60+film_minutter1)+" minutter lang. ";
var filmAlder1 = "Filmen er "+ (aarstal1 - produktions_aar1) + " år gammel. ";
var tidGåetOgtidTilbage1 = "Filmen har været vist i " + (aarstal1 - produktions_aar1) * 52 + " uger, og skal vises" + " 30 "+ "uger endnu." ;

var film_titelproduktion2 = "Filmen "+film_titel2+" er produceret i år "+produktions_aar2+" ";
var film_timerminuttersekunder2 = "Filmen er "+film_timer2+" timer, "+film_minutter2+" og "+film_sekunder2+" sekunder lang. ";
var totalmin2 = "Filmen er "+(film_timer2*60+film_minutter2)+" minutter lang. ";
var filmAlder2 = "Filmen er "+ (aarstal2 - produktions_aar2) + " år gammel. ";
var tidGåetOgtidTilbage2 = "Filmen har været vist i " + (aarstal2 - produktions_aar2) *52 + " uger, og skal vises" + " 30 "+ "uger endnu." ;

var film_titelproduktion3 = "Filmen "+film_titel3+" er produceret i år "+produktions_aar3+" ";
var film_timerminuttersekunder3 = "Filmen er "+film_timer3+" timer, "+film_minutter3+" og "+film_sekunder3+" sekunder lang. ";
var totalmin3 = "Filmen er "+(film_timer3*60+film_minutter3)+" minutter lang. ";
var filmAlder3 = "Filmen er "+ (aarstal3 - produktions_aar3) + " år gammel. ";
var tidGåetOgtidTilbage3 = "Filmen har været vist i " + (aarstal3 - produktions_aar3) *52 + " uger, og skal vises" + " 30 "+ "uger endnu." ;

var treFilm = film_titelproduktion1 + film_timerminuttersekunder1 + totalmin1 + filmAlder1 + filmSprog1 + tidGåetOgtidTilbage1 + "\n" + film_titelproduktion2 + film_timerminuttersekunder2 + totalmin2 + filmAlder2 + filmSprog2 + tidGåetOgtidTilbage2 + "\n" + film_titelproduktion3 + film_timerminuttersekunder3 + totalmin3 + filmAlder3 + filmSprog3 + tidGåetOgtidTilbage3;

console.log(treFilm);  

//Opg1
function titel_og_genre(film_titel, film_genre) {
    var titel_og_genre_tekst = "Filmen '" + film_titel + "' er en " + film_genre + " film.";
    return titel_og_genre_tekst; 
}

function titel_og_genre2(foo, bar){
var foo = "Blade Runner";
var bar = "Sci-fi";
var titel_og_genre_tekst2 = "Filmen '" + foo + "' er en " + bar + " film.";
    return titel_og_genre_tekst2;
}

//Opg2
function titel_og_genre(film_titel, film_genre) {
    var titel_og_genre_tekst = "Filmens genre er '" + film_genre + "' og filmens titel er '" + film_titel + "'.";
    return titel_og_genre_tekst; 
}

//Opg3
var resultat = titel_og_genre("Blade Runner", "Sci-fi");

//Opg4
function titel_og_genre(film_titel, film_genre, aarstal) {
    var titel_og_genre_tekst = "Filmens genre er '" + film_genre + "' og filmens titel er '" + film_titel + "'. Filmen udkom i år " + aarstal + ".";
    return titel_og_genre_tekst; 
}

//Opg5
function titel_aar_længde(film_titel,film_aar,film_laengde){
    var titel_aar_laengde = "Filmen hedder '" + film_titel + "'. Filmen er fra år " + film_aar + " og er " + film_laengde + " minutter lang.";
    return titel_aar_laengde;
}

//Opg6
function film_laengde(film_timer, film_min, for_film){
    var film_tid = "Filmen er " + (film_timer*60 + film_min + for_film) + " minutter lang." ;
    return film_tid;
}

//Opg7
function excerpt(text) {
    var excerpt_text = text.slice(0,160);
    return excerpt_text;
};
excerpt("FBI Regional Bureau Chief Gordon Cole sends agents Chester Desmond and Sam Stanley to investigate the murder of drifter and teenage prostitute Teresa Banks in the town of Deer Meadow, Washington. Chester Desmond and Stanley Stanley view Teresa's body at the local morgue. They notice that a ring is missing from her finger and a small piece of paper printed with the letter \"T\" has been inserted under one of her fingernails. Later, Chester Desmond discovers Teresa's missing ring under a trailer. As he reaches out to it, he is taken by an unseen force.");

//Opg8
function excerpt(text,laengde) {
    var excerpt_text = text.slice(0,laengde);
    return excerpt_text;
};
excerpt("FBI Regional Bureau Chief Gordon Cole sends agents Chester Desmond and Sam Stanley to investigate the murder of drifter and teenage prostitute Teresa Banks in the town of Deer Meadow, Washington. Chester Desmond and Stanley Stanley view Teresa's body at the local morgue. They notice that a ring is missing from her finger and a small piece of paper printed with the letter \"T\" has been inserted under one of her fingernails. Later, Chester Desmond discovers Teresa's missing ring under a trailer. As he reaches out to it, he is taken by an unseen force.",200);

//Opg9
function initial(text){
var fornavn = text.indexOf("Chester"); //Finder første instans af "Chester"
var slutbogstav = fornavn+7; //Finder tegnet efter Chester
var forBogstav = "C."; //Det der erstatter Chester
var startTekst = text.slice(0,fornavn) + forBogstav; //Den første del af strengen før Chester
var slutTekst = text.slice(slutbogstav); //Den sidste del af strengen efter Chester
return startTekst + slutTekst;
}
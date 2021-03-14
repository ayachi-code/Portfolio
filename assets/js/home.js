$(document).ready(function(){
    setTimeout(() => {
        $("#content").fadeIn(700); //Na 0.7 seconde fade de knoppen in. Functie word uitgevoerd wanneer pagina geladen is.
    },1600);
});

document.getElementsByClassName("specialL")[0].style.visibility = "hidden"; //De > is niet zicht baar alleen als je er over gaat hoveren.

document.getElementsByClassName("portfoliolink")[0].addEventListener("mouseover", (event) => { //Als er over heen word gehoverd over de >. Dam word de > niet meer onzichtbaar
    document.getElementsByClassName("specialL")[0].style.visibility = "visible";
});

document.getElementsByClassName("portfoliolink")[0].addEventListener("mouseout", (event) => { //Hier gebeurt de omgekeerde het word onzichtbaar wanneer de muis er niet over > is
    document.getElementsByClassName("specialL")[0].style.visibility = "hidden";
});

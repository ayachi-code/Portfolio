$(document).ready(function(){
    setTimeout(() => {
        $("#content").fadeIn(1200);
    },1600);
});

document.getElementsByClassName("specialL")[0].style.visibility = "hidden";

document.getElementsByClassName("portfoliolink")[0].addEventListener("mouseover", (event) => {
    document.getElementsByClassName("specialL")[0].style.visibility = "visible";
});


document.getElementsByClassName("portfoliolink")[0].addEventListener("mouseout", (event) => {
    document.getElementsByClassName("specialL")[0].style.visibility = "hidden";
});

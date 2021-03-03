$(document).ready(function(){
    setTimeout(() => {
        $("#content").fadeIn(1200);
    },1600);
});

document.getElementById("specialL").style.visibility = "hidden";

document.getElementById("portfoliolink").addEventListener("mouseover", (event) => {
    document.getElementById("specialL").style.visibility = "visible";
});


document.getElementById("portfoliolink").addEventListener("mouseout", (event) => {
    document.getElementById("specialL").style.visibility = "hidden";
});

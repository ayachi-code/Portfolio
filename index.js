document.getElementById("specialL").style.visibility = "hidden";


document.getElementById("portfoliolink").addEventListener("mouseover", (event) => {
    document.getElementById("specialL").style.visibility = "visible";
});

document.getElementById("portfoliolink").addEventListener("mouseout", (event) => {
    document.getElementById("specialL").style.visibility = "hidden";
});
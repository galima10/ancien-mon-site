// Bouton menu : action début : ouvrir le menu header

document.querySelector("#b_men_inv1").addEventListener("click", function(){
    document.querySelector("#header").classList.replace("h_header1", "h_header2");
    document.querySelector("#b_men_inv1").classList.add("none");
    document.querySelector("#b_men_inv2").classList.remove("none");
})

// Bouton menu : action début : ouvrir le menu header

document.querySelector("#b_men_inv2").addEventListener("click", function(){
    document.querySelector("#header").classList.replace("h_header2", "h_header1");
    document.querySelector("#b_men_inv1").classList.remove("none");
    document.querySelector("#b_men_inv2").classList.add("none");
})

// Changement de couleur bouton menu

document.querySelector("#bouton_menu").addEventListener("mouseover", function(){
    document.querySelector("#bouton_menu").style.background="aqua";
})
document.querySelector("#bouton_menu").addEventListener("mouseout", function(){
    document.querySelector("#bouton_menu").style.background="blue";
})
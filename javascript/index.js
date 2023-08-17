// Bouton menu : action début : ouvrir le menu header

var ClickMenu = 0

document.querySelector("#bouton_menu").addEventListener("click", function(){
    if (ClickMenu==0){
        document.querySelector("#header").classList.replace("h_header1", "h_header2");
        ClickMenu = 1
    } else if (ClickMenu==1){
        document.querySelector("#header").classList.replace("h_header2", "h_header1");
        ClickMenu = 0
    }

})







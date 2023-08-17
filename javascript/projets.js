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


// Page Projets

var ClickSite = 0
var ClickMontage = 0
var ClickAnim = 0
var ClickDessins = 0
var ClickMaking = 0

/*

// Section sites
document.querySelector("#sites").addEventListener("click", ()=>{

    if (ClickSite==0){
        document.querySelector("#sec1").classList.replace("h_section1", "h_section2");
        document.querySelector("#f1").classList.replace("rotate0", "rotate180");
        ClickSite = 1
    } else if (ClickSite==1){
        document.querySelector("#sec1").classList.replace("h_section2", "h_section1");
        document.querySelector("#f1").classList.replace("rotate180", "rotate0");
        ClickSite = 0
    }
})

// Section Montage vidéo
document.querySelector("#montage_video").addEventListener("click", ()=>{
    
    if (ClickMontage==0){
        document.querySelector("#sec2").classList.replace("h_section1", "h_section2");
        document.querySelector("#f2").classList.replace("rotate0", "rotate180");
        ClickMontage = 1
    } else if (ClickMontage==1){
        document.querySelector("#sec2").classList.replace("h_section2", "h_section1");
        document.querySelector("#f2").classList.replace("rotate180", "rotate0");
        ClickMontage = 0
    }
    
})

*/

// Section Animations
document.querySelector("#animations").addEventListener("click", ()=>{
    
    if (ClickAnim==0){
        document.querySelector("#sec3").classList.replace("h_section1", "h_section2");
        document.querySelector("#f3").classList.replace("rotate0", "rotate180");
        ClickAnim = 1
    } else if (ClickAnim==1){
        document.querySelector("#sec3").classList.replace("h_section2", "h_section1");
        document.querySelector("#f3").classList.replace("rotate180", "rotate0");
        ClickAnim = 0
    }

})

/*

// Section Dessins
document.querySelector("#dessins").addEventListener("click", ()=>{
    
    if (ClickDessins==0){
        document.querySelector("#sec4").classList.replace("h_section1", "h_section2");
        document.querySelector("#f4").classList.replace("rotate0", "rotate180");
        ClickDessins = 1
    } else if (ClickDessins==1){
        document.querySelector("#sec4").classList.replace("h_section2", "h_section1");
        document.querySelector("#f4").classList.replace("rotate180", "rotate0");
        ClickDessins = 0
    }

})

// Section Making of
document.querySelector("#makingof").addEventListener("click", ()=>{
    
    if (ClickMaking==0){
        document.querySelector("#sec5").classList.replace("h_section1", "h_section2");
        document.querySelector("#f5").classList.replace("rotate0", "rotate180");
        ClickMaking = 1
    } else if (ClickMaking==1){
        document.querySelector("#sec5").classList.replace("h_section2", "h_section1");
        document.querySelector("#f5").classList.replace("rotate180", "rotate0");
        ClickMaking = 0
    }

})

*/




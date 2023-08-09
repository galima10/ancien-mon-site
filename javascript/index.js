// Bouton menu : action début : ouvrir le menu header

document.querySelector("#b_men_inv1").addEventListener("click", function(){
    document.querySelector("#header").classList.replace("h_header1", "h_header2");
    document.querySelector("#b_men_inv1").classList.add("none");
    document.querySelector("#b_men_inv2").classList.remove("none");
})

// Bouton menu : action début : fermer le menu header

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

// Page Projets


    // Section sites
    document.querySelector("#sites1").addEventListener("click", ()=>{
        document.querySelector("#sec1").classList.replace("h_section1", "h_section2");
        document.querySelector("#sites1").classList.add("none");
        document.querySelector("#sites2").classList.remove("none");
        document.querySelector("#f1").classList.replace("rotate0", "rotate180");
    })
    document.querySelector("#sites2").addEventListener("click", ()=>{
        document.querySelector("#sec1").classList.replace("h_section2", "h_section1");
        document.querySelector("#sites1").classList.remove("none");
        document.querySelector("#sites2").classList.add("none");
        document.querySelector("#f1").classList.replace("rotate180", "rotate0");
    })

    // Section Montage vidéo
    document.querySelector("#montage_video1").addEventListener("click", ()=>{
        document.querySelector("#sec2").classList.replace("h_section1", "h_section2");
        document.querySelector("#montage_video1").classList.add("none");
        document.querySelector("#montage_video2").classList.remove("none");
        document.querySelector("#f2").classList.replace("rotate0", "rotate180");
    })
    document.querySelector("#montage_video2").addEventListener("click", ()=>{
        document.querySelector("#sec2").classList.replace("h_section2", "h_section1");
        document.querySelector("#montage_video1").classList.remove("none");
        document.querySelector("#montage_video2").classList.add("none");
        document.querySelector("#f2").classList.replace("rotate180", "rotate0");
    })

    // Section Animations
    document.querySelector("#animations1").addEventListener("click", ()=>{
        document.querySelector("#sec3").classList.replace("h_section1", "h_section2");
        document.querySelector("#animations1").classList.add("none");
        document.querySelector("#animations2").classList.remove("none");
        document.querySelector("#f3").classList.replace("rotate0", "rotate180");
    })
    document.querySelector("#animations2").addEventListener("click", ()=>{
        document.querySelector("#sec3").classList.replace("h_section2", "h_section1");
        document.querySelector("#animations1").classList.remove("none");
        document.querySelector("#animations2").classList.add("none");
        document.querySelector("#f3").classList.replace("rotate180", "rotate0");
    })

    // Section Dessins
    document.querySelector("#dessins1").addEventListener("click", ()=>{
        document.querySelector("#sec4").classList.replace("h_section1", "h_section2");
        document.querySelector("#dessins1").classList.add("none");
        document.querySelector("#dessins2").classList.remove("none");
        document.querySelector("#f4").classList.replace("rotate0", "rotate180");
    })
    document.querySelector("#dessins2").addEventListener("click", ()=>{
        document.querySelector("#sec4").classList.replace("h_section2", "h_section1");
        document.querySelector("#dessins1").classList.remove("none");
        document.querySelector("#dessins2").classList.add("none");
        document.querySelector("#f4").classList.replace("rotate180", "rotate0");
    })

    // Section Making of
    document.querySelector("#makingof1").addEventListener("click", ()=>{
        document.querySelector("#sec5").classList.replace("h_section1", "h_section2");
        document.querySelector("#makingof1").classList.add("none");
        document.querySelector("#makingof2").classList.remove("none");
        document.querySelector("#f5").classList.replace("rotate0", "rotate180");
    })
    document.querySelector("#makingof2").addEventListener("click", ()=>{
        document.querySelector("#sec5").classList.replace("h_section2", "h_section1");
        document.querySelector("#makingof1").classList.remove("none");
        document.querySelector("#makingof2").classList.add("none");
        document.querySelector("#f5").classList.replace("rotate180", "rotate0");
    })


    
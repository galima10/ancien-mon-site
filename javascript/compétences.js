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




// Page Compétences

const body = document.querySelector(".BodyComp");
const scrollBar = document.querySelector(".scrollbar");

window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let scrollPercent = Math.round(scroll*100);
    scrollBar.style.height = scrollPercent + '%';

    if (scrollPercent<20){
        document.querySelector(".t1").classList.replace("titre1", "titre2");
        document.querySelector(".t2").classList.replace("titre1", "titre2");
        document.querySelector(".t3").classList.replace("titre1", "titre2");
        document.querySelector(".t4").classList.replace("titre1", "titre2");
        document.querySelector(".t5").classList.replace("titre1", "titre2");

        document.querySelector(".p1").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p1").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p3").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p4").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p5").classList.replace("pointscale", "pointpasscale");
    }
    else if (scrollPercent>20 && scrollPercent<33){
        document.querySelector(".t1").classList.replace("titre2", "titre1");

        document.querySelector(".p1").classList.replace("pointpasscale", "pointscale");

    } else if (scrollPercent>33 && scrollPercent<37){
        document.querySelector(".t1").classList.replace("titre1", "titre2");
        document.querySelector(".t2").classList.replace("titre1", "titre2");
        document.querySelector(".t3").classList.replace("titre1", "titre2");
        document.querySelector(".t4").classList.replace("titre1", "titre2");
        document.querySelector(".t5").classList.replace("titre1", "titre2");

        document.querySelector(".p1").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p2").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p3").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p4").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p5").classList.replace("pointscale", "pointpasscale");
    }
    
    else if (scrollPercent>37 && scrollPercent<50){
        document.querySelector(".t2").classList.replace("titre2", "titre1");
        
        document.querySelector(".p2").classList.replace("pointpasscale", "pointscale");

    } else if (scrollPercent>50 && scrollPercent<54){
        document.querySelector(".t1").classList.replace("titre1", "titre2");
        document.querySelector(".t2").classList.replace("titre1", "titre2");
        document.querySelector(".t3").classList.replace("titre1", "titre2");
        document.querySelector(".t4").classList.replace("titre1", "titre2");
        document.querySelector(".t5").classList.replace("titre1", "titre2");

        document.querySelector(".p1").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p2").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p3").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p4").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p5").classList.replace("pointscale", "pointpasscale");
    }
    else if (scrollPercent>54 && scrollPercent<67){
        document.querySelector(".t3").classList.replace("titre2", "titre1");
        
        document.querySelector(".p3").classList.replace("pointpasscale", "pointscale");
    } 
    
    else if (scrollPercent>67 && scrollPercent<71){
        document.querySelector(".t1").classList.replace("titre1", "titre2");
        document.querySelector(".t2").classList.replace("titre1", "titre2");
        document.querySelector(".t3").classList.replace("titre1", "titre2");
        document.querySelector(".t4").classList.replace("titre1", "titre2");
        document.querySelector(".t5").classList.replace("titre1", "titre2");

        document.querySelector(".p1").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p2").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p3").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p4").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p5").classList.replace("pointscale", "pointpasscale");
    }
    
    else if (scrollPercent>71 && scrollPercent<84){
        document.querySelector(".t4").classList.replace("titre2", "titre1");
        
        document.querySelector(".p4").classList.replace("pointpasscale", "pointscale");

        
    } else if (scrollPercent>84 && scrollPercent<88){
        document.querySelector(".t1").classList.replace("titre1", "titre2");
        document.querySelector(".t2").classList.replace("titre1", "titre2");
        document.querySelector(".t3").classList.replace("titre1", "titre2");
        document.querySelector(".t4").classList.replace("titre1", "titre2");
        document.querySelector(".t5").classList.replace("titre1", "titre2");

        document.querySelector(".p1").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p2").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p3").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p4").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p5").classList.replace("pointscale", "pointpasscale");
    }
    
    else if (scrollPercent>88 && scrollPercent<98){
        document.querySelector(".t5").classList.replace("titre2", "titre1");
        
        document.querySelector(".p5").classList.replace("pointpasscale", "pointscale");

        
    } else if (scrollPercent>98){
        document.querySelector(".t1").classList.replace("titre1", "titre2");
        document.querySelector(".t2").classList.replace("titre1", "titre2");
        document.querySelector(".t3").classList.replace("titre1", "titre2");
        document.querySelector(".t4").classList.replace("titre1", "titre2");
        document.querySelector(".t5").classList.replace("titre1", "titre2");

        document.querySelector(".p1").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p2").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p3").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p4").classList.replace("pointscale", "pointpasscale");
        document.querySelector(".p5").classList.replace("pointscale", "pointpasscale");
    }

    console.log(scrollPercent)

})

document.querySelector(".p1").addEventListener("click", ()=>{
    document.querySelector(".scr1").scrollIntoView({behavior:"smooth"});
})
document.querySelector(".p2").addEventListener("click", ()=>{
    document.querySelector(".scr2").scrollIntoView({behavior:"smooth"});
})
document.querySelector(".p3").addEventListener("click", ()=>{
    document.querySelector(".scr3").scrollIntoView({behavior:"smooth"});
})
document.querySelector(".p4").addEventListener("click", ()=>{
    document.querySelector(".scr4").scrollIntoView({behavior:"smooth"});
})
document.querySelector(".p5").addEventListener("click", ()=>{
    document.querySelector(".scr5").scrollIntoView({behavior:"smooth"});
})

















// Slider 1

var click1 = 0

var pos = 1
var ep = 1
document.querySelector("#b_d1").addEventListener("click", ()=>{
    document.querySelector("#diap1desc1").classList.replace("h_desc2", "h_desc1");
    document.querySelector("#diap1desc2").classList.replace("h_desc2", "h_desc1");
    document.querySelector("#diap1desc3").classList.replace("h_desc2", "h_desc1");
    click1 = 0

    if (pos>=3){
    
    } else {
        $("#slides1").finish().animate({
            left: "-=95vw"         
        });
    pos=pos+1
    }

    console.log(pos)

    if (pos==1){
        document.querySelector(".pos1").classList.add("posact");
        document.querySelector(".pos2").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } else if (pos==2){
        document.querySelector(".pos2").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } else if (pos==3){
        document.querySelector(".pos3").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos2").classList.remove("posact");
    }
})
document.querySelector("#b_g1").addEventListener("click", ()=>{
    document.querySelector("#diap1desc1").classList.replace("h_desc2", "h_desc1");
    document.querySelector("#diap1desc2").classList.replace("h_desc2", "h_desc1");
    document.querySelector("#diap1desc3").classList.replace("h_desc2", "h_desc1");
    click1 = 0
    
    if (pos<=1){
    
    } else {
        $("#slides1").finish().animate({
            left: "+=95vw"         
        });
    pos=pos-1
    }

    console.log(pos)
    
    if (pos==1){
        document.querySelector(".pos1").classList.add("posact");
        document.querySelector(".pos2").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } else if (pos==2){
        document.querySelector(".pos2").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } else if (pos==3){
        document.querySelector(".pos3").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos2").classList.remove("posact");
    }
})

// Bouton "i" description

document.querySelector("#DiapPlus").addEventListener("click", ()=>{
    if (pos==1){
        if (click1==0){
            document.querySelector("#diap1desc1").classList.replace("h_desc1", "h_desc2");
            click1 = 1
        } else if (click1==1){
            document.querySelector("#diap1desc1").classList.replace("h_desc2", "h_desc1");
            click1 = 0
        } 
    } 
    
    else if (pos==2){
        if (click1==0){
            document.querySelector("#diap1desc2").classList.replace("h_desc1", "h_desc2");
            click1 = 1
        } else if (click1==1){
            document.querySelector("#diap1desc2").classList.replace("h_desc2", "h_desc1");
            click1 = 0
        } 
    } 
    
    else if (pos==3){
        if (click1==0){
            document.querySelector("#diap1desc3").classList.replace("h_desc1", "h_desc2");
            click1 = 1
        } else if (click1==1){
            document.querySelector("#diap1desc3").classList.replace("h_desc2", "h_desc1");
            click1 = 0
        } 
    }
    
})

// Bouton lire tous les épisodes

document.querySelector(".btnLire").addEventListener("click", ()=>{
    document.querySelector(".ep1").classList.remove("none");
    document.querySelector("h5").innerHTML="Les Profondeurs des Bois sombres"
    ep=1
    document.querySelector("#regarderEp").classList.remove("none");
        setTimeout(()=>{
            document.querySelector("#regarderEp").classList.replace("op0", "op1");
        },"1") 
})

// Bouton Lire épisode

document.querySelector("#BtnLireEp").addEventListener("click", ()=>{
    if (pos==1){
        document.querySelector(".ep1").classList.remove("none");
        document.querySelector("h5").innerHTML="Les Profondeurs des Bois sombres"
        ep=1
    } else if (pos==2){
        document.querySelector(".ep2").classList.remove("none");
        document.querySelector("h5").innerHTML="A suivre"
        ep=2
    } else if (pos==3){
        document.querySelector(".ep3").classList.remove("none");
        document.querySelector("h5").innerHTML="rien"
        ep=3
    }
    document.querySelector("#regarderEp").classList.remove("none");
        setTimeout(()=>{
            document.querySelector("#regarderEp").classList.replace("op0", "op1");
        },"1") 
})

// Bouton Retour du diffuseur vidéo

document.querySelector("#BtnRetour").addEventListener("click", ()=>{
    document.querySelector("#regarderEp").classList.replace("op1", "op0");
    setTimeout(()=>{
        document.querySelector("#regarderEp").classList.add("none");
        document.querySelector(".ep1").classList.add("none");
        document.querySelector(".ep2").classList.add("none");
        document.querySelector(".ep3").classList.add("none");
    },"1001") 
    
})

// Bouton épisode suivant

document.querySelector(".epsuiv").addEventListener("click", ()=>{
    if (ep==1){
        document.querySelector(".ep1").classList.add("none");
        document.querySelector(".ep2").classList.remove("none");
        document.querySelector("h5").innerHTML="A suivre";
        ep=2
    } else if (ep==2){
        document.querySelector(".ep2").classList.add("none");
        document.querySelector(".ep3").classList.remove("none");
        document.querySelector("h5").innerHTML="rien";
        ep=3
    }
})
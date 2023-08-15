// Slider 



// Variable du click description
var click1 = 0

// Variable Position du slider
var pos = 1

// Variable numéro d'épisode
var ep = 1



// Bouton flèche de droite pour défiler le slider à gauche
document.querySelector("#b_d1").addEventListener("click", ()=>{

    // Fermer toutes les descriptions des 3 slides
    document.querySelector("#diap1desc1").classList.replace("h_desc2", "h_desc1");
    document.querySelector("#diap1desc2").classList.replace("h_desc2", "h_desc1");
    document.querySelector("#diap1desc3").classList.replace("h_desc2", "h_desc1");
    click1 = 0

    // Si la position du slider est en 3 ou plus : ne rien faire
    if (pos>=3){
    
    } 
    

    // Sinon : déplacer le slider à gauche
    else {
        $("#slides1").finish().animate({
            left: "-=95vw"         
        });
        // Ajouter une position de plus à la variable "pos"
        pos=pos+1
    }


    // Le voyant de position en bas à gauche du slider

        // Si le slider est à la position 1 (slide 1):
        if (pos==1){
            document.querySelector(".pos1").classList.add("posact");

            document.querySelector(".pos2").classList.remove("posact");
            document.querySelector(".pos3").classList.remove("posact");
        } 
        

        // Si le slider est à la position 2 (slide 2):
        else if (pos==2){
            document.querySelector(".pos2").classList.add("posact");

            document.querySelector(".pos1").classList.remove("posact");
            document.querySelector(".pos3").classList.remove("posact");
        } 
        

        // Si le slider est à la position 3 (slide 3):
        else if (pos==3){
            document.querySelector(".pos3").classList.add("posact");

            document.querySelector(".pos1").classList.remove("posact");
            document.querySelector(".pos2").classList.remove("posact");
        }
})




// Bouton flèche de gauche pour défiler le slider à droite
document.querySelector("#b_g1").addEventListener("click", ()=>{

    // Fermer toutes les descriptions des 3 slides
    document.querySelector("#diap1desc1").classList.replace("h_desc2", "h_desc1");
    document.querySelector("#diap1desc2").classList.replace("h_desc2", "h_desc1");
    document.querySelector("#diap1desc3").classList.replace("h_desc2", "h_desc1");
    click1 = 0
    
    // Si la position du slider est en 1 ou moins : ne rien faire
    if (pos<=1){
    
    } 
    
    // Sinon : déplacer le slider à droite
    else {
        $("#slides1").finish().animate({
            left: "+=95vw"         
        });

        // Retirer une position de plus à la variable "pos"
        pos=pos-1
    }


    // Le voyant de position en bas à gauche du slider

    // Si le slider est à la position 1 (slide 1): 
    // Mettre le voyant à la slide 1
    if (pos==1){
        document.querySelector(".pos1").classList.add("posact");

        document.querySelector(".pos2").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } 
    

    // Si le slider est à la position 2 (slide 2):
    // Mettre le voyant à la slide 2
    else if (pos==2){
        document.querySelector(".pos2").classList.add("posact");

        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } 
    

    // Si le slider est à la position 3 (slide 3):
    // Mettre le voyant à la slide 3
    else if (pos==3){
        document.querySelector(".pos3").classList.add("posact");

        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos2").classList.remove("posact");
    }
})




// Bouton "i" "en savoir plus" description

document.querySelector("#DiapPlus").addEventListener("click", ()=>{

    // Si le slider est en position 1 (slide 1)
    if (pos==1){

        // Ouvrir et fermer la description de la slide 1
        if (click1==0){
            document.querySelector("#diap1desc1").classList.replace("h_desc1", "h_desc2");
            click1 = 1
        } else if (click1==1){
            document.querySelector("#diap1desc1").classList.replace("h_desc2", "h_desc1");
            click1 = 0
        } 
    } 
    

    // Si le slider est en position 2 (slide 2)
    else if (pos==2){

        // Ouvrir et fermer la description de la slide 2
        if (click1==0){
            document.querySelector("#diap1desc2").classList.replace("h_desc1", "h_desc2");
            click1 = 1
        } else if (click1==1){
            document.querySelector("#diap1desc2").classList.replace("h_desc2", "h_desc1");
            click1 = 0
        } 
    } 
    

    // Si le slider est en position 3 (slide 3)
    else if (pos==3){

        // Ouvrir et fermer la description de la slide 3
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
    
    // Enlever à l'épisode 1 la class "none"
    document.querySelector(".ep1").classList.remove("none");

    // Mettre en titre : Les Profondeurs des Bois sombres : Rencontre dans les ténèbres
    document.querySelector("h5").innerHTML="Les Profondeurs des Bois sombres : Rencontre dans les ténèbres"

    // Mettre le diffuseur à l'épisode 1 (ajouter à "ep", 1)
    ep=1

    // Mettre la position du slider à 1
    pos=1
    $("#slides1").finish().animate({
        left: "0"         
    });

    // Mettre le voyant des slides à la slide 1
    document.querySelector(".pos1").classList.add("posact");
    document.querySelector(".pos2").classList.remove("posact");
    document.querySelector(".pos3").classList.remove("posact");
    
    // Enlever la barre de défilement verticale (axe Y) à body
    document.querySelector("body").classList.add("overflowY");


    // Apparition du diffuseur

        // Enlever la class "none" au diffuseur
        document.querySelector("#regarderEp").classList.remove("none");

        // Faire apparaître le diffuseur
        setTimeout(()=>{
            document.querySelector("#regarderEp").classList.replace("op0", "op1");
        },"1") 
})




// Bouton Lire épisode

document.querySelector("#BtnLireEp").addEventListener("click", ()=>{
    
    // Si le slider est à la position 1:
    if (pos==1){

        // Enlever à l'épisode 1 la class "none"
        document.querySelector(".ep1").classList.remove("none");
        
        // Mettre en titre : Les Profondeurs des Bois sombres : Rencontre dans les ténèbres
        document.querySelector("h5").innerHTML="Les Profondeurs des Bois sombres : Rencontre dans les ténèbres"
        
        // Mettre le diffuseur à l'épisode 1 (ajouter à "ep", 1)
        ep=1
    } 
    

    // Si le slider est à la position 2:
    else if (pos==2){
        
        // Enlever à l'épisode 2 la class "none"
        document.querySelector(".ep2").classList.remove("none");
        
        // Mettre en titre : A suivre
        document.querySelector("h5").innerHTML="A suivre"
        
        // Mettre le diffuseur à l'épisode 2 (ajouter à "ep", 2)
        ep=2
    } 
    

    // Si le slider est à la position 3:
    else if (pos==3){
        
        // Enlever à l'épisode 3 la class "none"
        document.querySelector(".ep3").classList.remove("none");
        
        // Mettre en titre : A suivre
        document.querySelector("h5").innerHTML="A suivre"
        
        // Mettre le diffuseur à l'épisode 3 (ajouter à "ep", 3)
        ep=3
    }

    // Enlever la barre de défilement verticale (axe Y) à body
    document.querySelector("body").classList.add("overflowY");


    // Apparition du diffuseur

        // Enlever la class "none" au diffuseur
        document.querySelector("#regarderEp").classList.remove("none");
        
        // Faire apparaître le diffuseur
        setTimeout(()=>{
            document.querySelector("#regarderEp").classList.replace("op0", "op1");
        },"1") 
})




// Bouton Retour du diffuseur vidéo

document.querySelector("#BtnRetour").addEventListener("click", ()=>{
    
    // Remettre la barre de défilement verticale (axe Y) à body
    document.querySelector("body").classList.remove("overflowY");
    
    
    // Disparition du diffuseur

        // Faire disparaître le diffuseur
        document.querySelector("#regarderEp").classList.replace("op1", "op0");
        
        
        setTimeout(()=>{

            // Ajouter la class "none" au diffuseur
            document.querySelector("#regarderEp").classList.add("none");
            
            // Ajouter la class "none" à tous les épisodes
            document.querySelector(".ep1").classList.add("none");
            document.querySelector(".ep2").classList.add("none");
            document.querySelector(".ep3").classList.add("none");
        },"1001") 
    
})




// Bouton épisode suivant

document.querySelector(".epsuiv").addEventListener("click", ()=>{
    
    // Si l'épisode est à 1 : Passer à l'épisode 2
    if (ep==1){

        // Faire disparaître l'épisode 1
        document.querySelector(".ep1").classList.add("none");
        
        // Faire apparaître l'épisode 2
        document.querySelector(".ep2").classList.remove("none");
        
        
        // Mettre en titre : A suivre
        document.querySelector("h5").innerHTML="A suivre";


        // Mettre le slider en position 2
        $("#slides1").finish().animate({
            left: "-=95vw"         
        });
        pos=2

        // Mettre le voyant à la slide 2
        document.querySelector(".pos2").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");

        // Mettre le diffuseur à l'épisode 2
        ep=2
    } 
    

    // Si l'épisode est à 2 : Passer à l'épisode 3
    else if (ep==2){

        // Faire disparaître l'épisode 2
        document.querySelector(".ep2").classList.add("none");
        
        // Faire apparaître l'épisode 3
        document.querySelector(".ep3").classList.remove("none");
        
        // Mettre en titre : A suivre
        document.querySelector("h5").innerHTML="A suivre";
        
        
        // Mettre le slider en position 3
        $("#slides1").finish().animate({
            left: "-=95vw"         
        });
        pos=3

        // Mettre le voyant à la slide 3
        document.querySelector(".pos3").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos2").classList.remove("posact");
        
        // Mettre le diffuseur à l'épisode 3
        ep=3
    }
})
// Slider 1



var pos1 = 0
var p1 = 0
document.querySelector("#b_d1").addEventListener("click", ()=>{
    if (p1>=2){
    
    } else {
        $("#slides1").finish().animate({
            left: "-=95vw"         
        });
    pos1=pos1+1
    p1=p1+1
    }

    console.log(pos1)

    if (pos1==0){
        document.querySelector(".pos1").classList.add("posact");
        document.querySelector(".pos2").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } else if (pos1==1){
        document.querySelector(".pos2").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } else if (pos1==2){
        document.querySelector(".pos3").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos2").classList.remove("posact");
    }
})
document.querySelector("#b_g1").addEventListener("click", ()=>{
    if (p1<=0){
    
    } else {
        $("#slides1").finish().animate({
            left: "+=95vw"         
        });
    pos1=pos1-1
    p1=p1-1
    }

    console.log(pos1)
    
    if (pos1==0){
        document.querySelector(".pos1").classList.add("posact");
        document.querySelector(".pos2").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } else if (pos1==1){
        document.querySelector(".pos2").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos3").classList.remove("posact");
    } else if (pos1==2){
        document.querySelector(".pos3").classList.add("posact");
        document.querySelector(".pos1").classList.remove("posact");
        document.querySelector(".pos2").classList.remove("posact");
    }
})

// Slider 1 : Slide 1

document.querySelector("#Diap1Plus1").addEventListener("mouseover", ()=>{
    document.querySelector("#diap1desc1").classList.replace("h_desc1", "h_desc2");
    
})
document.querySelector("#Diap1Plus1").addEventListener("mouseout", ()=>{
    document.querySelector("#diap1desc1").classList.replace("h_desc2", "h_desc1");
})

// Slider 1 : Slide 2

var click1_2 = 0

document.querySelector("#Diap1Plus2").addEventListener("mouseover", ()=>{
    document.querySelector("#diap1desc2").classList.replace("h_desc1", "h_desc2");
    
})
document.querySelector("#Diap1Plus2").addEventListener("mouseout", ()=>{
    document.querySelector("#diap1desc2").classList.replace("h_desc2", "h_desc1");
})

// Slider 1 : Slide 3

var click1_2 = 0

document.querySelector("#Diap1Plus3").addEventListener("mouseover", ()=>{
    document.querySelector("#diap1desc3").classList.replace("h_desc1", "h_desc2");
    
})
document.querySelector("#Diap1Plus3").addEventListener("mouseout", ()=>{
    document.querySelector("#diap1desc3").classList.replace("h_desc2", "h_desc1");
})
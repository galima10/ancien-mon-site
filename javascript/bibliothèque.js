// Slider 1

var p1 = 0
document.querySelector("#b_d1").addEventListener("click", ()=>{
    if (p1>=2){
    
    } else {
        $("#slides1").finish().animate({
            left: "-=95vw"         
    });
    p1=p1+1
    }
})
document.querySelector("#b_g1").addEventListener("click", ()=>{
    if (p1<=0){
    
    } else {
        $("#slides1").finish().animate({
            left: "+=95vw"         
    });
    p1=p1-1
    }
})

// Slider 2

var p2 = 0
document.querySelector("#b_d2").addEventListener("click", ()=>{
    if (p2>=2){
    
    } else {
        $("#slides2").finish().animate({
            left: "-=95vw"         
    });
    p2=p2+1
    }
})
document.querySelector("#b_g2").addEventListener("click", ()=>{
    if (p2<=0){
    
    } else {
        $("#slides2").finish().animate({
            left: "+=95vw"         
    });
    p2=p2-1
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
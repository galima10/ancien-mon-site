var p = 0
document.querySelector("#b_d").addEventListener("click", ()=>{
    if (p>=2){
    
    } else {
        $("#slides").finish().animate({
            left: "-=1000"         
    });
    p=p+1
    }
    console.log(p)
})
document.querySelector("#b_g").addEventListener("click", ()=>{
    if (p<=0){
    
    } else {
        $("#slides").finish().animate({
            left: "+=1000"         
    });
    p=p-1
    }
    console.log(p)
})
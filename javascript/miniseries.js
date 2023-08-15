var click = 0


// Episode 1
document.querySelector(".ep1").addEventListener("click", ()=>{
    if (click==0){
        document.querySelector(".desc1").classList.remove("none");
        document.querySelector(".descriptions").classList.remove("none");
        setTimeout(()=>{
            document.querySelector(".descriptions").classList.replace("op0", "op1");
        }, "1");
        click=1;
    } else if (click==1){
        document.querySelector(".descriptions").classList.replace("op1", "op0");
        setTimeout(()=>{
            document.querySelector(".descriptions").classList.add("none");
            
            
            document.querySelector(".desc1").classList.add("none");

            document.querySelector(".desc2").classList.add("none");
        }, "501");
        click=0;
    }
})

/*

// Episode 2
document.querySelector(".ep2").addEventListener("click", ()=>{
    if (click==0){
        document.querySelector(".desc2").classList.remove("none");
        document.querySelector(".descriptions").classList.remove("none");
        setTimeout(()=>{
            document.querySelector(".descriptions").classList.replace("op0", "op1");
        }, "1");
        click=1;
    } else if (click==1){
        document.querySelector(".descriptions").classList.replace("op1", "op0");
        setTimeout(()=>{
            document.querySelector(".descriptions").classList.add("none");
            

            document.querySelector(".desc2").classList.add("none");
            
            document.querySelector(".desc1").classList.add("none");
        }, "501");
        click=0;
    }
})

*/
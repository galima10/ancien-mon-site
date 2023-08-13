var click = 0

document.querySelector("#enc1").addEventListener("click", ()=>{
    if (click==0){
        document.querySelector("#desc1").classList.remove("none");
        setTimeout(()=>{
            document.querySelector("#desc1").classList.replace("op0", "op1");
        },"1") 
        click=1
    } else if (click==1){
        document.querySelector("#desc1").classList.replace("op1", "op0");
        setTimeout(()=>{
            document.querySelector("#desc1").classList.add("none");
        },"1501") 
        click=0
    }
})
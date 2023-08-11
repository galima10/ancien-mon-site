document.querySelector("#enc1").addEventListener("mouseover", ()=>{
    document.querySelector("#desc1").classList.replace("op0", "op1");
})
document.querySelector("#enc1").addEventListener("mouseout", ()=>{
    document.querySelector("#desc1").classList.replace("op1", "op0");
})
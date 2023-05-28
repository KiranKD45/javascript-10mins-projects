const audio = ["song1","song2","song3"];
audio.forEach((audio)=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = audio;
    btn.addEventListener("click",()=>{
        stopsong();
        document.getElementById(audio).play();
    })
    document.body.appendChild(btn)
    
})
function stopsong(){
    audio.forEach((audio)=>{
        document.getElementById(audio).pause();
    })
 
}
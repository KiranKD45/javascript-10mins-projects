const btn =document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", ()=>{
    Notification();
});
function Notification(){
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText= "this is notificaion"
    container.appendChild(notif);
    setTimeout(()=>
    { notif.remove()},3000)
}
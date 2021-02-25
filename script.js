const h2 =document.createElement('h2');
h2.textContent="";
document.querySelector('body').appendChild(h2);
document.body.style.cursor="crosshair";
let stats= document.getElementsById("stats");
stats.addEventListener("mouseover",function(event){
    event.target.style.color="purple"
});
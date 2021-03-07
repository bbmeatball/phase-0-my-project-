const h2 =document.createElement('h2');
h2.textContent="";
document.querySelector('body').appendChild(h2);
document.body.style.cursor="crosshair";
let colorHover= document.getElementsByTagName('h1')
colorHover.addEventListener("mouseenter",function(event){
    event.target.style.color="purple";
});
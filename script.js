let btn=document.querySelector("button");
btn.addEventListener("click",function(){
let rgbColor=getRgbColor();
let h3=document.querySelector("h3");
h3.innerHTML=rgbColor;
let div=document.querySelector("div");
div.style.backgroundColor=rgbColor;



})


let getRgbColor=function(){
  let red=Math.floor(Math.random()*255)
  let green=Math.floor(Math.random()*255)
  let blue=Math.floor(Math.random()*255)
let color =`rgb(${red},${green},${blue})`
return color;}
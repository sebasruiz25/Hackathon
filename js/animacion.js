"use strict"
const ul = document.querySelector("ul");

function frames()  {
  const animacion = ul.animate([
    //keyframes
    {transform:"TranslateY(0px)"},
    {transform:"TranslateY(-50px)"}
  ],{
    //options
    easing: "linear",
    Intersection: 1,
    duration: 200
  })
return animacion.finished;
}

function displace(){
  frames()
  .then((res) => {
        ul.appendChild(document.querySelectorAll("ul > li")[0])
  })
}
setInterval(() =>{
  displace();
 },2500);


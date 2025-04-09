// document.getElementById("clickButton").addEventListener("click", clicked);

// function clicked(){
//     alert("dff")
// }

const colors = ["red", "blue", "green"];

function changeBG(){
   const randomColor = colors[Math.floor(Math.random()*colors.length)];
   document.body.style.backgroundColor = randomColor;

}
document.getElementById("clickButton").addEventListener("click",changeBG);

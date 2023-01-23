const body = document.querySelector("body");

const color = document.getElementById("color");

function changeColor(){
    const colorInput = color.value;
    body.style.backgroundColor = colorInput;
}
const baseOfTriangle = document.querySelector(".base");
const heightOfTriangle = document.querySelector(".height");
const calculateAreaBtn = document.querySelector("#area-btn");
const outputElement = document.querySelector("#output");

function calculateArea(){
    const areaOfTriangle = (Number(baseOfTriangle.value)*Number(heightOfTriangle.value))/2;
    outputElement.innerText = "The area of the triangle is " + areaOfTriangle + " cm²"
}
calculateAreaBtn.addEventListener("click", calculateArea);
const baseOfTriangle = document.querySelector(".base");
const heightOfTriangle = document.querySelector(".height");
const calculateAreaBtn = document.querySelector("#area-btn");
const outputElement = document.querySelector("#output");

function calculateArea(){
    if (Number(baseOfTriangle.value) <= 0) {
        outputElement.innerText = "Base value should not be empty and less than than equal to zero";
    }else if(Number(heightOfTriangle.value) <= 0){
        outputElement.innerText = "Height value should not be empty and less than equal to zero";
    }
    else{
        const areaOfTriangle = (Number(baseOfTriangle.value)*Number(heightOfTriangle.value))/2;
        outputElement.innerText = "The area of the triangle is " + areaOfTriangle.toFixed(2) + " cm²"
    }
    
}
calculateAreaBtn.addEventListener("click", calculateArea);
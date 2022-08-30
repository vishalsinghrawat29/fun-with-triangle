const inputs = document.querySelectorAll(".angel-input");
const isTriangleBtn = document.querySelector("#is-traingle-btn");
const outputElement = document.querySelector("#output");

function calculateSumOfAngles(angel1, angel2, angel3){
    const sumOfAngles = angel1 + angel2 + angel3;
    return sumOfAngles;

}
function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputElement.innerText = "Yay, The angles form a triangle";
    }else{
        outputElement.innerText = "Oh Oh! The angles don't form a traingle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
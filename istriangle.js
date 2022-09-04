const inputs = document.querySelectorAll(".angel-input");
const isTriangleBtn = document.querySelector("#is-traingle-btn");
const outputElement = document.querySelector("#output");

function calculateSumOfAngles(angel1, angel2, angel3){
    const sumOfAngles = angel1 + angel2 + angel3;
    return sumOfAngles;

}
function isTriangle(){
    if (Number(inputs[0].value) <= 0) {
        outputElement.innerText = "Angle1 value should be positive and greater than zero";
    } else if (Number(inputs[1].value) <= 0) {
        outputElement.innerText = "Angle2 value should be positive and greater than zero";

    } else if (Number(inputs[2].value) <= 0) {
        outputElement.innerText = "Angle3 value should be positive and greater than zero";
    }else{
        const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if(sumOfAngles === 180){
            outputElement.innerText = "Yay, The angles form a triangle. The sum of angle is 180 degree";
        }else{
            outputElement.innerText = "Oh Oh! The angles don't form a traingle because the sum of angle is less than 180 degree";
        }
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
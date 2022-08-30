const sideInput = document.querySelectorAll(".side-input");
const outputElement = document.querySelector("#output");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

function calculateSumOfSquare(a,b){
    const sumOfSquare = a*a + b*b;
    return sumOfSquare;
}
function calculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquare(Number(sideInput[0].value), Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    outputElement.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
    
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
const sideInput = document.querySelectorAll(".side-input");
const outputElement = document.querySelector("#output");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

function calculateSumOfSquare(a,b){
    const sumOfSquare = a*a + b*b;
    return sumOfSquare;
}
function calculateHypotenuse(){
    if (Number(sideInput[0].value) <= 0) {
        outputElement.innerText = "Base value should not be empty and less than than equal to zero";
    }else if(Number(sideInput[1].value) <= 0){
        outputElement.innerText = "Height value should not be empty and less than equal to zero";
    }
    else{
        const sumOfSquare = calculateSumOfSquare(Number(sideInput[0].value), Number(sideInput[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
        outputElement.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
    }
    
    
    
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
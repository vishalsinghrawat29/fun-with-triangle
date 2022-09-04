const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputElement =  document.querySelector("#output");

const correctAnswer = [ "90", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "100", "30", "a + b + c", "no", "45"];

function calculateScore(){
    var score = 0;
    var index = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputElement.innerText = "Your Score is " +  score;
}

submitAnswerBtn.addEventListener("click", calculateScore);
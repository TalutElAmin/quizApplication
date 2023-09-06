const questions= [
    {
    question: "which is largest animal in the world?",
    answers: [
        {text: "shark", correct: false},
        {text: "Blue whale", correct: true},
        {text: "Elaphant", correct: false},
        {text: "Giraffe", correct: false},
    ]
    },
    {
        question: "which is the smallest country in the world?",
        answers: [
            {text: "vatican city", correct: true},
            {text: "Kano", correct: false},
            {text: "Danbare", correct: false},
            {text: "London", correct: false},
        ]  
    },
    {
        question: "which is largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: true},
            {text: "sahara", correct: false},
            {text: "Antarctica", correct: false},
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctics", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "which of the following is High Level language?",
        answers: [
            {text: "Wordpress", correct: false},
            {text: "Php", correct: true},
            {text: "Adobe xD", correct: false},
            {text: "Wireframe", correct: false},
        ]
    },
    {
        question: "which of the following is an operating system?",
        answers: [
            {text: "Dell", correct: false},
            {text: "Windows Xp", correct: true},
            {text: "Yahoo", correct: false},
            {text: "Microsoft", correct: false},
        ]
    },
    {
        question: "which of the following computer language is written in binary form?",
        answers: [
            {text: "Java", correct: false},
            {text: "C#", correct: false},
            {text: "Pascal", correct: false},
            {text: "Machine language", correct: true},
        ]
    },
    {
        question: "which of the following is not related to Computer?",
        answers: [
            {text: "Accuracy", correct: false},
            {text: "Speed", correct: false},
            {text: "Consistency", correct: false},
            {text: "Thinking", correct: true},
        ]
    },
    {
        question: "The term pentium is related to which of the following computer parts?",
        answers: [
            {text: "RAM", correct: false},
            {text: "Microprocessor", correct: true},
            {text: "HDD", correct: false},
            {text: "Non of the above", correct: false},
        ]
    },
    {
        question: "What is meant by GUI in computer?",
        answers: [
            {text: "Graphic Unique interface", correct: false},
            {text: "Graph user interface", correct: false},
            {text: "Graphical User Interface", correct: true},
            {text: "Graphical universal interface", correct: false},
        ]
    },
    {
        question: "Nigeria officially became a democracy on it independence ffom Britain in October?",
        answers: [
            {text: "1960", correct: true},
            {text: "2000", correct: false},
            {text: "2010", correct: false},
            {text: "1999", correct: false},
        ]
    },
    {
        question: "which of the these state is the FCT of Nigeria?",
        answers: [
            {text: "Kano", correct: false},
            {text: "Lagos", correct: false},
            {text: "Abuja", correct: true},
            {text: "Aba", correct: false},
        ]
    },
    {
        question: "what converts an entire program into machine language?",
        answers: [
            {text: "Mouse", correct: false},
            {text: "Compiler", correct: true},
            {text: "Electrons", correct: false},
            {text: "Keyboard", correct: false},
        ]
    },
    {
        question: "First page of website is termed as ______?",
        answers: [
            {text: "Homepage", correct: true},
            {text: "Electronic page", correct: false},
            {text: "FrontEnd", correct: false},
            {text: "BackEnd", correct: false},
        ]
    },
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("button-answer");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.
    question;
    
    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


    function resetState(){
        nextButton.style.display="none"
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }

    }
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect= selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display="block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`you scored ${score} out of 
        ${questions.length}!`;
        nextButton.innerHTML="Play again";
        nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex  < questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    });
    
    
    startQuiz();
answerIdCounter = 0;

var mainEl = document.querySelector("#page-content");
var formEl = document.querySelector("#wrapper");
var buttonDivEl = document.querySelector("#answers-div")

// STORE QUESTIONS with correct answer
var questionsAry = [
    {
        question: "If you type the following code in the console window, what result will you get?\n3 > 2 > 1 === false;",
        answer: "True"                
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answer: "Both"                
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answer: "Default"                
    },
];

// STORE ANSWERS
var answersAry = [
    {
    // Question # 1    
    q1Answer1: "True",                
    q1Answer2: "False"
    },
    {
    // Question # 2
    q2Answer1: "Client",                
    q2Answer2: "Server",                
    q2Answer1: "Both",                
    q2Answer2: "None",
    },
    {                
    // Question # 3
    q3Answer1: "Catch",                
    q3Answer2: "Label",                
    q3Answer1: "Try",                
    q3Answer2: "Default"
    }                
];

var score = 0;


var questionsGenerator = function() {
    // formEl.innerHTML = "";
    debugger; 
        
    for(var i = 0; i < questionsAry.length; i++) {     
        // ON START QUIZ CLICK = replace form element
        formEl.innerHTML = ""
        buttonDivEl.innerHTML = ""
        var quizQuestion = questionsAry[i].question;
        console.log(quizQuestion)

        // This block creates a new question
        var questionDivEl = document.createElement("div");   
        questionDivEl.setAttribute("id", "question-div");
        formEl.appendChild(questionDivEl);    
        var h1El = document.createElement("h1");
        h1El.className = "question";     
        questionDivEl.appendChild(h1El);
        formEl.innerHTML =
            "<h1>" + questionsAry[i].question + "</h1>"
    
        //TODO: make this  create container for answers        
        var answerButtonEl = document.createElement("button");
        console.log(answerButtonEl);
        answerButtonEl.className = "answers"    
        answerButtonEl.setAttribute("id", answerIdCounter);
        console.log(answerButtonEl);
        buttonDivEl.appendChild(answerButtonEl);
        console.log(buttonDivEl)
        answerButtonEl.innerHTML =         
            "<button class='answers'>" + answersAry[i] + "</button>" + 
            "<button class='answers'>" + answersAry[i] + "</button>" 
        console.log(answerButtonEl);
             
        answerIdCounter++;         
    }    
}
var quizFormHandler = function(event) {
    event.preventDefault();
    console.log("clicked"); 

    // if clicked run a new function    
    questionsGenerator(); 
    // createQuestionEl()
    // debugger;
  
}

// Start Quiz
mainEl.addEventListener("submit", quizFormHandler);
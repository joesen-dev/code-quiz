answerIdCounter = 0;

var mainEl = document.querySelector("#page-content");
var formEl = document.querySelector("#wrapper");
var questionDivEl = document.querySelector("#question-div");
var h1El = document.querySelector("#title");
var pEl = document.querySelector("#description");
var buttonDivEl = document.querySelector("#answers-div")
var buttonEl = document.querySelector("#start");

// STORE QUESTIONS with correct answer
const questionsAry = [
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
const answersAry = [    
    // Question # 1        
    ["True", "False"],
    // Question # 2
    ["Client", "Server", "Both", "None"],             
    // Question # 3
    ["Catch", "Label", "Try", "Default"]             
];

// Target answersAry rows to get answers list
answersAry.forEach(function(getAnswer) {
    console.log(getAnswer);
    // target answersAry rows to print each answer
    getAnswer.forEach(function(printAnswer) {
        console.log(printAnswer);
    });
})

// package answers
const answerDataObj = {
    a: [],
    b: [],
    c: [],
    d: []
}

// set variables to taxi answers data
var answerA = answerDataObj.a;
var answerB = answerDataObj.b;
var answerC = answerDataObj.c;
var answerD = answerDataObj.d;

var score = 0;

// This block creates HTML elements and attached them to the form
// TODO: can be used closer to the end of quiz IGNORE FOR NOW!
var createQuestion = function() {
    // debugger;
    var questionDivEl = document.createElement("div");          
    questionDivEl.setAttribute("id", "question-div");
    console.log(questionDivEl); 
    formEl.appendChild(questionDivEl);    
    var h1El = document.createElement("h1");  
    h1El.className = "question";
    h1El.setAttribute("id", "title");
    console.log(h1El);     
    questionDivEl.appendChild(h1El);
    console.log(questionDivEl);
}


// TODO: use this to list quiz answers
var listAnswers = function() {
    // debugger;    
    // Target answersAry rows to get answers list
    answersAry.forEach(function(getAnswer) {
    // debugger
        console.log(getAnswer);
        // target answersAry rows to print each answer
        getAnswer.forEach(function(printAnswer) {
            console.log(printAnswer);
            var buttonEl = document.createElement("button");
            console.log(buttonEl);
            buttonEl.className = "answers btn"    
            buttonEl.setAttribute("id", answerIdCounter);        
            buttonDivEl.appendChild(buttonEl);
            console.log(buttonDivEl)
            // debugger;
            // TODO: filter answers for current questions before printing them to th button
            
            // TODO: have this list answers
            buttonEl.innerHTML = printAnswer;
        });
    })
}

var questionsGenerator = function() {    
    document.getElementById("title").innerHTML = ""
    document.getElementById("description").innerHTML = ""
    var startQuiz = document.getElementById("start");
    startQuiz.remove();   
    // createQuestion();    

    for(var i = 0; i < questionsAry.length; i++) {      
        // debugger;             
        var quizQuestion = questionsAry[i].question;

        // TODO: may be a good place for a while loop to line up answers with questions

        console.log(quizQuestion)
        document.getElementById("title").innerHTML = questionsAry[i].question;
        listAnswers();        
            
    answerIdCounter++;            
    }    
}
var quizFormHandler = function(event) {
    event.preventDefault();
    console.log("clicked"); 

    // if clicked run a new function    
    questionsGenerator(); 
      
}
// Start Quiz
mainEl.addEventListener("submit", quizFormHandler);



// ___________________________________________________________________________



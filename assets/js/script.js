answerIdCounter = 0;
questionIdCounter = 0;

var mainEl = document.querySelector("#page-content");
var formEl = document.querySelector("#wrapper");
var questionDivEl = document.querySelector("#question-div");
var h1El = document.querySelector("#title");
var pEl = document.querySelector("#description");
var buttonDivEl = document.querySelector("#answers-div")
var buttonEl = document.querySelector("#start");
// TODO: set variables to get button and h1 elements
var match = document.getElementsByClassName("0")

// STORE QUESTIONS with correct answer
const questionsAry = [
    {
        question: "If you type the following code in the console window, what result will you get?\n3 > 2 > 1 === false;", 
        answers: ["True", "False"],
        solution: ["False"]
        
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
    // console.log(getAnswer);
    // target answersAry rows to print each answer
    getAnswer.forEach(function(printAnswer) {
        // console.log(printAnswer);
    });
})

// package answers
const listQuestionDataAry = []
const listAnswerDataAry = []

var score = 0;

// This block creates HTML elements and attached them to the form
// TODO: can be used closer to the end of quiz IGNORE FOR NOW!
// var createQuestion = function() {
//     //
//     var questionDivEl = document.createElement("div");          
//     questionDivEl.setAttribute("id", "question-div");
//     console.log(questionDivEl); 
//     formEl.appendChild(questionDivEl);    
//     var h1El = document.createElement("h1");  
//     h1El.className = "question";
//     h1El.setAttribute("id", "title");
//     console.log(h1El);     
//     questionDivEl.appendChild(h1El);
//     console.log(questionDivEl);
// }

// START BUTTON CLICKED
var quizFormHandler = function(event) {
    event.preventDefault();
    console.log("clicked"); 

    // if clicked run these function    
    // createQuestion();
    createEl();         
}

// TODO: one function to create all elements 

function createEl() {    
    // CREATE QUESTIONS 
    document.getElementById("title").innerHTML = ""
    document.getElementById("description").innerHTML = ""
    var startQuiz = document.getElementById("start");
    startQuiz.remove();      

    for(var i = 0; i < questionsAry.length; i++) {                    
        var quizQuestion = questionsAry[i].question;
        document.getElementById("title").setAttribute("className", questionIdCounter)

        // when the questions is read notify a function to pass the Data to the printQuiz
            if (quizQuestion) {
                listQuestionDataAry.push(quizQuestion);
                console.log(listQuestionDataAry);
            }
            console.log(quizQuestion)
        // document.getElementById("title").innerHTML = questionsAry[i].question;
        printQuiz();       
    }
    // LIST ANSWER
    function printQuiz() {                    
        // Target questionsAry[0]
        questionsAry.forEach(function(getObj) {            
            console.log(getObj);
            // Target questionsAry[0].answers
            getObj.answers.forEach(function(getAnswers) {
                console.log(getAnswers);
            });
            // pull questionsAry[0].answers & send to listAnswerDataAry
            if (getObj) {
                listAnswerDataAry.push(getObj.answers);
                console.log(listAnswerDataAry);
            }            
            // TODO: have this list answers    
            // target answersAry rows to print each answer
            listAnswerDataAry.forEach(function (storeAnswer) {                
                console.log(storeAnswer);                              
                
                // TODO: add while loop to check for matching Id counters
                if (document.getElementById(answerIdCounter) == document.getElementById(questionIdCounter)) {
                    console.log("True")
                    // TODO: step out of function and print Element to page
                    printElements()
                    // debugger;

                } else {console.log("False")}

                



                // buttonDivEl.appendChild(buttonEl);
                // console.log(buttonDivEl);                
                            
                // buttonEl.innerHTML = printAnswer;                
            });
        });
    }    
    questionIdCounter++;       
};

function printElements() {
    debugger;    
    listQuestionDataAry.forEach(function(question) {            
        console.log(question);
        if (question) {
            document.getElementById("title").innerHTML = listQuestionDataAry;
        }             
    });
    // debugger;
    listAnswerDataAry.forEach(function(answer) {            
        console.log(answer);
        if (answer) {
            // TODO: THIS CODE PRINTS ANSWERS TO THE SAME DIV!
            answer.forEach(function (printAnswer1) {
                console.log(printAnswer1);                         
                var buttonEl = document.createElement("button");
                console.log(buttonEl);
                buttonEl.className = "answers btn";
                buttonEl.setAttribute("id", answerIdCounter); 
                buttonEl.innerHTML = printAnswer1; 
                buttonDivEl.appendChild(buttonEl);
                console.log(buttonDivEl);
                answerIdCounter++;                            
            });               
        }             
    });
    
}


// // CREATE QUESTIONS 
// var createQuestion = function() {
//     document.getElementById("title").innerHTML = ""
//     document.getElementById("description").innerHTML = ""
//     var startQuiz = document.getElementById("start");
//     startQuiz.remove();      

//     for(var i = 0; i < questionsAry.length; i++) {      
//                      
//         var quizQuestion = questionsAry[i].question;
//         document.getElementById("title").setAttribute("className", questionIdCounter)

//         // when the questions is read notify a function to pass the Data to the printQuiz
//             if (quizQuestion) {
//                 listQuestionDataAry.push(quizQuestion);
//                 console.log(listQuestionDataAry);
//             }
//             console.log(quizQuestion)
//         document.getElementById("title").innerHTML = questionsAry[i].question;
//         printQuiz();       
//     }
//     // LIST ANSWER
//     function printQuiz() {
//             
//         // Target answersAry rows to get answers list
//         answersAry.forEach(function (getAnswer) {
//             
//             console.log(getAnswer);
//             if (getAnswer) {
//                 listAnswerDataAry.push(getAnswer);
//                 console.log(listAnswerDataAry);
//             }
//             console.log(getAnswer);
//             // TODO: have this list answers    
//             // target answersAry rows to print each answer
//             getAnswer.forEach(function (printAnswer) {
//                 console.log(printAnswer);
//                 var buttonEl = document.createElement("button");
//                 console.log(buttonEl);
//                 buttonEl.className = "answers btn";
//                 buttonEl.setAttribute("id", answerIdCounter);                
//                 
//                 // TODO: add while loop to check for matching Id counters
//                 if (document.getElementById(answerIdCounter) == document.getElementById(questionIdCounter)) {
//                     console.log("True")
//                 } else {console.log("False")}
//                 buttonDivEl.appendChild(buttonEl);
//                 console.log(buttonDivEl);
               
                
//                 
//                 // TODO: filter answers for current questions before printing them to the button
//                 buttonEl.innerHTML = printAnswer;

//                 answerIdCounter++;
//                 questionIdCounter++;
//             });
//         });
//     }
//     answerIdCounter++;
//     questionIdCounter++;
    
// }





// Start Quiz
mainEl.addEventListener("submit", quizFormHandler);



// ___________________________________________________________________________



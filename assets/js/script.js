answerIdCounter = 0;
questionIdCounter = 0;

const mainEl = document.querySelector("#page-content");
const formEl = document.querySelector("#wrapper");
const questionDivEl = document.querySelector("#question-div");
const h1El = document.querySelector("#title");
const pEl = document.querySelector("#description");
const buttonDivEl = document.querySelector("#answers-div")
const buttonEl = document.querySelector("#start");

const countdownEl = document.querySelector("#time-left");






// STORE QUESTIONS with correct answer
const questionsAry = [
    {
        question: "If you type the following code in the console window, what result will you get?\n3 > 2 > 1 === false;", 
        answers: ["True", 
            "False"],
        solution: ["False"]
        
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: ["a. Client", 
            "b. Server", 
            "c. Both", 
            "d. None"],
        solution: ["d. None"]                
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: ["a. Catch", 
            "b. Label", 
            "c. Try", 
            "d. Default"],
        solution: ["d. Default"]                
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: ["a. alertBox('Hello DataFlair!');", 
            "b. alert(Hello DataFlair!);", 
            "c. msgAlert('Hello DataFlair!');", 
            "d. alert('Hello DataFlair!');"],
        solution: ["d. alert('Hello DataFlair!');"]               
    },
    {
        question: "What will the code return? Boolean(3 < 7)",
        answers: ["a. True", "b. False", "c. NaN", "d. SyntaxError"],
        solution: ["a. True"]                
    },
];

var clickDataObj = {
    question: questionsAry.question,
    answers: questionsAry.answers,
    solution: questionsAry.solution,
  };

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

    // RESET START QUIZ BLOCK    
    document.getElementById("title").innerHTML = ""
    document.getElementById("description").innerHTML = ""
    var startQuiz = document.getElementById("start");
    startQuiz.remove(); 

    startCountDown();
    createEl();       
}

function startCountDown() {
    //  add Countdown timer and set amount of time
    const startMinutes = 2;
    let time = startMinutes * 60;

    // set countdown interval
    setInterval(updateCountdown, 1000);

    // create countdown function
    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }   
}

function createEl(questions) {
    debugger;   
    questions = questionsAry.question
    console.log(questions);
    while (i = 0 < questionsAry.question.length) {
        for(var i = 0; i < questionsAry.length; i++) {        
            // Pull questions for questionsAry   
            var quizQuestion = questionsAry[i].question;
            // debugger;
            // set unique className with questionIdCounter
            document.getElementById("title").setAttribute("className", questionIdCounter)
            // If the there still questions send them to listQuestionDataAry
            if (quizQuestion) {                    
                console.log(quizQuestion);
            }            
            matchQA();
            // CHECK QUESTION MATCHeS ANSWER 
            function matchQA() {
                // debugger;                                  
                // Target questionsAry[0]
                questionsAry.forEach(function(getObj) {                    
                    // Target questionsAry[0].answers
                    getObj.answers.forEach(function(getAnswers) {
                        console.log(getAnswers);
                    });
                    printElements(getObj);

                    // // TODO: --------------------------------------FIX ENDLESS LOOP
                    // for(var i = 0; i < [getObj.answers].length; i++) {
                    //     // debugger;
                    //     var storeAnswer = [getObj.answers];
                    //     console.dir(storeAnswer);
                    //     printElements(getObj, storeAnswer);
                    // }
                    // // TODO: --------------------------------------FIX ENDLESS LOOP

                });
                
            }
            // PRINT Q&As
            function printElements(getObj) {
                // debugger; 
                let question = getObj.question;
                console.log(question);
                let answer = getObj.answers; 
                console.log(answer);
                splitAnswers(answer);
                function splitAnswers(answer) {
                    for(var i = 0; i < answer.length; i++) {
                        if(answer.length === 2 || answer.length > 4) {
                            console.log(true);
                        }                
                }              
                
                // PRINT QUESTION
                printQuestion() 
                function printQuestion() {
                    document.getElementById("title").innerHTML = question;
                }
                // PRINT ANSWER
                printAnswer()
                // debugger; 
                function printAnswer() {
                    if (answer) {
                        
                        // TODO: THIS block PRINTS ANSWERS TO THE SAME DIV!
                        answer.forEach(function (printAnswer) {
                            console.log(printAnswer);                         
                            var buttonEl = document.createElement("button");
                            console.log(buttonEl);
                            buttonEl.className = "answers btn";
                            buttonEl.type = "submit";
                            buttonEl.name = "btn_name";
                            buttonEl.setAttribute("onclick", "validate(event)")
                            console.log(buttonEl);
                            buttonEl.setAttribute("id", answerIdCounter); 
                            buttonEl.innerHTML = printAnswer; 
                            buttonDivEl.appendChild(buttonEl);
                            console.log(buttonDivEl);
                            answerIdCounter++;                
                        })                        
                    }
                }
                checkPrintedQA(getObj)
                function checkPrintedQA(getObj) {
                    let question = getObj.question
                    let answer = getObj.answers
                    let solution = getObj.solution
                    console.log(question, answer, solution);             
                    if(question, answer, solution) {
                        console.log("woo!")
                        // listen for click
                    } else { return}
                }            
                
            }; 
        }        
        }
        i++;
        debugger;
    }
    
       
    questionIdCounter++;       
};



function validate() {    
   console.log("woo!")
}

let notClicked = document.querySelector("button[name='btn_name']")

var clickDataObj = {
    status: notClicked
  };
// function validate() {
// // TODO: Pick answer code block
// switch (clickDataObj) {
//     case solution:
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
//       tasksToDoEl.append(listItemEl);
//       break;
//     case "in progress":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 1;
//       tasksInProgressEl.append(listItemEl);
//       break;
//     case "completed":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 2;
//       tasksCompletedEl.append(listItemEl);
//       break;
//     default:
//       console.log("Something went wrong!");
//   }
// }

console.dir(questionDivEl.childElementCount);
function validateAllQA(printedQ, printedA) {
    printedQ = questionDivEl.childElementCount
    printedA = buttonDivEl.childElementCount
    console.log(printedQ);
    console.log(printedA);
    if(printedQ = 2 && printedA <= 4) {
        console.log(true);
        buttonEl.onclick = () => {
            console.log(clicked);
        }                
    } else {
        console.log("False")
    }  
}  
 // TODO: check if full Q&A block is printed
        // debugger;
        // targe buttonDivEl (this logs the number of child elements in the button div)
        // console.dir(buttonDivEl.childElementCount);
        

// TODO: CHECK FOR THE RIGHT ANSWER
function checkAnswer(solution) {
    questionsAry.forEach(function(getObj) {
        solution = getObj.solution 
        console.log(solution);
        debugger;

        // // TODO: pull HTMLCollection items
        // let pull = document.forms["btn_name"]
        // console.log(pull);

        let pull = document.getElementsByClassName("answers")
        console.log(pull);          
        // name pull HTMLCollection items as answers
        let a = pull[0];
        let b = pull[1];
        let c = pull[2];
        let d = pull[3];              
        debugger; 
        buttonEl.addEventListener("answers", validateAnswer())        
        function validateAnswer() {
            console.log("clicked");
            if (validateAnswer) {
                createEl();                
            }
            // for(var i = 0; i < pull.length; i++) {
            //     console.log(pull)  
            //     if (pull === solution) {
            //         console.log(true)
            //         let divEl = document.createElement("div")
            //         divEl.innerHTML = 
            //         "<div class='notify' id='notify-result'>" + "Correct!" 
            //         + "</div>"
            //         formEl.appendChild(divEl);
            //     }
            // }
        }
                
    })
    
}

// listen for a click on a button
buttonEl.addEventListener("click", validate);

// Start Quiz
mainEl.addEventListener("submit", quizFormHandler);




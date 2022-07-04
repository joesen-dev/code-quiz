questionIdCounter = 0;

const mainEl = document.querySelector("#page-content");
const titleFormEl = document.querySelector("#wrapper");
const sectionEl = document.querySelector("#handle-btn")
const sectionDivEl = document.querySelector("#handle-reset");
const answerFormEl = document.querySelector("#form-answer");
const notifyFormEl = document.querySelector("#notify-parent-div");
const notifyDivEl = document.querySelector("#notify-result");

// STORE QUESTIONS with correct answer
const generalStorageArray = [
    {
        question: "If you type the following code in the console window, what result will you get?\n3 > 2 > 1 === false;", 
        answers: [
            "1. True", 
            "2. False"],
        solution: ["b. False"]
        
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: [
            "1. Client", 
            "2. Server", 
            "3. Both", 
            "4. None"],
        solution: ["d. None"]                
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: [
            "1. Catch", 
            "2. Label", 
            "3. Try", 
            "4. Default"],
        solution: ["d. Default"]                
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: [
            "1. alertBox('Hello DataFlair!');", 
            "2. alert(Hello DataFlair!);", 
            "3. msgAlert('Hello DataFlair!');", 
            "4. alert('Hello DataFlair!');"],
        solution: ["d. alert('Hello DataFlair!');"]               
    },
    {
        question: "What will the code return? Boolean(3 < 7)",
        answers: [
            "1. True", 
            "2. False", 
            "3. NaN", 
            "4. SyntaxError"],
        solution: ["a. True"]                
    },
];

// QA/Solution STORAGE
var trainArray = [];

// STORE POINTS
var score = [];

var quizFormHandler = function(event) {
    event.preventDefault();
    // was the start button clicked?
    var startQuiz = document.querySelector("#start");
    if (startQuiz) {
        console.log("Start Button Clicked");        

        titleFormEl.remove();
        
        getQAs();
    } 
};

// Get QAs from Questions Array
var getQAs = function() {
    console.log(generalStorageArray)
    var nextQuestion = generalStorageArray.shift()
    console.log(generalStorageArray)
    console.log(nextQuestion)

    // in generalStorageArray is less than 4 reset notify
    if(generalStorageArray.length < 3) {
        console.log("CLEAR NOTIFY")
        var notify = document.querySelector("div[class='notify']");
        console.log(notify);

        notify.remove();
    } 
    
    // have all question been asked and answered?
    // switch(generalStorageArray.length === 0){
    //     default:
    //     console.log("END OF TEST")
    //     finishedQuiz();
    //     break;
    // }

    // clear trainArray in case of iteration
    trainArray.shift()
    console.log(trainArray)

    // send QA + solution to trainArray
    trainArray.push(nextQuestion)
    console.log(trainArray)
 
    for (var i = 0; i < trainArray.length; i++) {
        
        // is generalStorageArray.length? If yes, break the loop
        if (generalStorageArray.length === 0) {break;}
        // Assign QAs + solution to variables
        var question = trainArray[0].question;
        console.log(question)
        var answer = trainArray[0].answers;
        console.log(answer)
        var solution = trainArray[0].solution;
        console.log(solution)
        
        // Print QAs
        switch (trainArray[0].question) {                   
            case question:
                console.log(question)
                printQuestion(question)                
            break;
        }
        switch (trainArray[0].answers) {
            case answer:
                console.log(answer)
                printAnswers(answer, solution);
            break;
        }
        switch (trainArray[0].answers) {
            case answer:
                validateAnswers(answer, solution);
            break;
        }
    }
    
    // once all QAs answered run finishedQuiz();
    if (generalStorageArray.length === 0) {
        finishedQuiz();
    }
};



// PRINT QUESTION 
var printQuestion = function(question) {
    // new form for QAs
    var questionFormEL = document.createElement('form');
    questionFormEL.className = "question";
    questionFormEL.setAttribute("id", "form-question");
    sectionDivEl.appendChild(questionFormEL);

    var questionDivEl = document.createElement('div');
    questionDivEl.className = "question-form";
    questionDivEl.setAttribute("data-question-id", "question");
    questionFormEL.appendChild(questionDivEl);

    var h2El = document.createElement('h2');
    h2El.setAttribute("id", "title-question");
    questionDivEl.appendChild(h2El);

    document.getElementById("title-question").innerHTML = question;
}

// PRINT ANSWER
function printAnswers(answer, solution) {
    var answerFormEL = document.createElement('form');
    answerFormEL.className = "answers-container";
    answerFormEL.setAttribute("id", "form-answer");
    sectionDivEl.appendChild(answerFormEL);

    console.log(solution);
    var ourSolution = solution[0];
    console.log(ourSolution);           
    if(answer) {
        console.log(answer);
        answer.forEach(function(answer) {
            var buttonEl = document.createElement("button");                    
            buttonEl.className = "answers btn";
            buttonEl.name = "answer-btn-name";                                        
            console.log(buttonEl);
            buttonEl.innerHTML = answer;
            buttonEl.setAttribute("id", "btn-click");
            if(answer === ourSolution) {
                buttonEl.setAttribute("data-button", answer)
            }
                 
            answerFormEL.appendChild(buttonEl);
            console.log(answerFormEL);
        });
    }    
}

// VALIDATE ANSWER
var validateAnswers = function(answer, solution) {
    console.log(answer)
    document.getElementById("title-question").setAttribute("className", questionIdCounter)
    var printedAnswers = document.getElementsByClassName("answers btn");
     console.dir(printedAnswers);
    //  check that all answers are printed
    if(printedAnswers.length === answer.length) {
        console.log("All answers are printed!");
    }
}

var buttonClickHandler = function(event) {
    // get button attribute from clicked element
    event.preventDefault();
    var button = event.target.getAttribute("data-button");
    var divEl = document.createElement("div");                    
        divEl.className = "notify";
        divEl.setAttribute("id", "notify-result");
    if(button) {
        goodAnswer(divEl);
    }else {
        badAnswer(divEl);
    }
    reset();
}

var goodAnswer = function(divEl) {
    divEl.innerHTML = "Correct!"                    
        sectionEl.appendChild(divEl);
        var points = 10
        score.push(points);
        console.log(score)
}
var badAnswer = function(divEl) {
    console.log("Wrong!")
        divEl.innerHTML = "Wrong!"
        sectionEl.appendChild(divEl);
        console.log(score);
}

// RESET QA FORM
var reset = function() {
    // reset sectionEl
    sectionDivEl.innerHTML = "";
    getQAs();
}

// TODO: User has finished quiz. Show their score, record their name & save it to localStorage
var finishedQuiz = function() {
    debugger;
    sectionEl.innerHTML = "";
    console.log("User Finished Quiz!");
    // create form container for ALL DONE ELEMENTS
    var formScoreEl = document.createElement("form");
    formScoreEl.className = "question" + "notify-score-container"
    sectionDivEl.appendChild(formScoreEl);

    // create div for final score text content
    var divScoreEl = document.createElement("div");
    // create h2El 
    var h2ScoreEl = document.createElement("h2")
    // create pEl
    var pScoreEl = document.createElement("p")
    // create span for score count
    var spanEl = document.createElement("span")


}

// Click to Start Quiz
mainEl.addEventListener("submit", quizFormHandler);
// Handle User's answer
sectionEl.addEventListener("click", buttonClickHandler);

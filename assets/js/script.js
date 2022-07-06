questionIdCounter = 0;

const mainEl = document.querySelector("#main-content");
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
        solution: ["2. False"]
        
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: [
            "1. Client", 
            "2. Server", 
            "3. Both", 
            "4. None"],
        solution: ["4. None"]                
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: [
            "1. Catch", 
            "2. Label", 
            "3. Try", 
            "4. Default"],
        solution: ["4. Default"]                
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: [
            "1. alertBox('Hello DataFlair!');", 
            "2. alert(Hello DataFlair!);", 
            "3. msgAlert('Hello DataFlair!');", 
            "4. alert('Hello DataFlair!');"],
        solution: ["4. alert('Hello DataFlair!');"]               
    },
    {
        question: "What will the code return? Boolean(3 < 7)",
        answers: [
            "1. True", 
            "2. False", 
            "3. NaN", 
            "4. SyntaxError"],
        solution: ["1. True"]                
    },
];

// QA/Solution STORAGE
var trainArray = [];

// STORE POINTS
var score = [];

// START QUIZ LOGIC
var quizFormHandler = function(event) {
    event.preventDefault();
    var startQuiz = document.querySelector("#start");
    if (startQuiz) {
        titleFormEl.remove();
        getQAs();
    } 
};

// Get QAs from Questions Array
var getQAs = function() {
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

    // clear trainArray in case of iteration
    trainArray.shift()

    // send QA + solution to trainArray
    trainArray.push(nextQuestion)
    console.log(trainArray)
 
    for (var i = 0; i < trainArray.length; i++) {
        
        // is generalStorageArray.length? If yes, break the loop
        if (generalStorageArray.length === 0) {break;}
        // Assign QAs + solution to variables
        var question = trainArray[0].question;
        var answer = trainArray[0].answers;
        var solution = trainArray[0].solution;
        console.log(
            question,
            answer,
            solution)
        
        // Print QAs
        switch (trainArray[0].question) {                   
            case question:
                printQuestion(question)                
            break;
        }
        switch (trainArray[0].answers) {
            case answer:
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

    var ourSolution = solution[0];              
    if(answer) {
        answer.forEach(function(answer) {
            var buttonEl = document.createElement("button");                    
            buttonEl.className = "answers btn";
            buttonEl.name = "answer-btn-name";
            buttonEl.type = "submit";
            buttonEl.innerHTML = answer;
            buttonEl.setAttribute("id", "btn-click");
            if(answer === ourSolution) {
                console.log("True");
                buttonEl.setAttribute("data-button", answer)
            }
                 
            answerFormEL.appendChild(buttonEl);
        });
    }
    console.log(answerFormEL);  
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
    console.log(button)
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
    var outro = "All Done!"
    sectionEl.innerHTML = "";
    console.log("User Finished Quiz!");
    // create form container for ALL DONE ELEMENTS
    var formScoreEl = document.createElement("form");
    formScoreEl.className = "question" + " notify-score-container"
    sectionEl.appendChild(sectionDivEl)
    sectionDivEl.appendChild(formScoreEl);
    
    // create div for final score text content
    var divScoreEl = document.createElement("div");
    divScoreEl.className = "quiz-title" + " score-title"
    divScoreEl.innerHTML = 
        "<h2>" + outro + "</h2>"
        // TODO: FIX score to print on page
        + "<p>" + 'Your final score is' + ' ' + score + '.' + "</p>"
    formScoreEl.appendChild(divScoreEl)
    console.log(divScoreEl)

    // create div for User name/scores,text-box and submit buttons
    var divUserNameEl = document.createElement("div");
    divUserNameEl.className = "player-name-container" + " high-score-container"
    var userNamePEl = document.createElement("p");
    userNamePEl.className = "player-initials-text"
    userNamePEl.innerHTML = "Enter initials:"
        +"<input type='text' class='text-input' placeholder='Enter initials' name='initials-text'>"
        +"<button class='btn' id='score-submit' type='submit'>"
        +'Submit' + "</button>"
    divScoreEl.appendChild(userNamePEl)

}

// Click to Start Quiz
titleFormEl.addEventListener("submit", quizFormHandler);
// startButton.addEventListener("submit", quizFormHandler);
// Handle User's answer
sectionEl.addEventListener("click", buttonClickHandler)

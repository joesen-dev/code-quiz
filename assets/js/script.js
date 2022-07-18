/** CONSTANTS DOM ELEMENTS
 ***********************************************************************/
questionIdCounter = 0;
const startQuiz = document.getElementById("start"); // START button
const mainEl = document.querySelector("#main-content"); // MAIN CONTENT element
const questionFormEL = document.getElementById("form-question"); // QUESTION CONTAINER
const answerFormEl = document.getElementById("form-answer"); // ANSWER BUTTONS CONTAINER
const countdownEl = document.getElementById("timer"); // COUNTDOWN ELEMENT

const titleFormEl = document.querySelector("#wrapper"); // WRAPPER for forms
const sectionEl = document.querySelector("#handle-btn"); // CONTAINER for dynamic QA elements
const sectionDivEl = document.querySelector("#handle-reset"); // DIV to handle reset
const notifyFormEl = document.querySelector("#notify-parent-div"); // NOTIFY "Correct/Wrong" wrapper
const notifyDivEl = document.querySelector("#notify-result"); // NOTIFY "Correct/Wrong" div element

/** GLOBAL VARIABLES
 ***********************************************************************/
// STORE QUESTIONS with correct answer
var generalStorageArray = [
  {
    question:
      "If you type the following code in the console window, what result will you get?\n3 > 2 > 1 === false;",
    answers: ["1. True", "2. False"],
    solution: ["2. False"],
  },
  {
    question: "JavaScript is a ___ -side programming language.",
    answers: ["1. Client", "2. Server", "3. Both", "4. None"],
    solution: ["4. None"],
  },
  {
    question:
      "Which JavaScript label catches all the values, except for the ones specified?",
    answers: ["1. Catch", "2. Label", "3. Try", "4. Default"],
    solution: ["4. Default"],
  },
  {
    question:
      "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    answers: [
      "1. alertBox('Hello DataFlair!');",
      "2. alert(Hello DataFlair!);",
      "3. msgAlert('Hello DataFlair!');",
      "4. alert('Hello DataFlair!');",
    ],
    solution: ["4. alert('Hello DataFlair!');"],
  },
  {
    question: "What will the code return? Boolean(3 < 7)",
    answers: ["1. True", "2. False", "3. NaN", "4. SyntaxError"],
    solution: ["1. True"],
  },
];

var trainArray = []; // QA/Solution STORAGE
var score = []; // STORE POINTS
var finalScore = []; // FINAL SCORE
var high_scores = []; // USER INFO

/** FUNCTION DEFINITIONS
 ***********************************************************************/
// start quiz logic
var quizFormHandler = function (event) {
  var startQuiz = document.querySelector("#start");
  if (startQuiz) {
    titleFormEl.remove();
    getQAs();
  }
};

// START TIMER
function startCountDown() {
  var sec = 75;

  function startTimer() {
    console.log("timer suppose to go");
    var timer = setInterval(function () {
      sec--;
      document.getElementById("timer").innerHTML = sec;
      if (sec < 0) {
        clearInterval(timer);
        // alert("Time is up!"); // TODO: add modal to display "Time is up!"
        if (!generalStorageArray.length == 0) {
          finishedQuiz();
        }
      }
    }, 1000);
  }

  document.getElementById("form-answer").addEventListener("click", onClick); // Target answer form to list for click on answers
  function onClick(event) {
    var incorrectAnswer = event.target.id;
    if (incorrectAnswer) {
      sec -= 10;
      document.getElementById("timer").innerHTML = sec;
    }
  }
  startTimer();
}

// Get QAs from Questions Array
var getQAs = function () {
  var nextQuestion = generalStorageArray.shift();
  console.log(generalStorageArray);
  console.log(nextQuestion);

  // in generalStorageArray is less than 4 reset notify
  if (generalStorageArray.length < 3) {
    console.log("CLEAR NOTIFY");
    var notify = document.querySelector("div[class='notify']");
    console.log(notify);

    notify.remove();
  }

  trainArray.shift(); // clear trainArray in case of iteration

  trainArray.push(nextQuestion); // send QA + solution to trainArray
  console.log(trainArray);

  for (var i = 0; i < trainArray.length; i++) {
    // is generalStorageArray.length? If yes, break the loop
    if (generalStorageArray.length === 0) {
      break;
    }
    // Assign QAs + solution to variables
    var question = trainArray[0].question;
    var answer = trainArray[0].answers;
    var solution = trainArray[0].solution;
    console.log(question, answer, solution);

    // Print QAs
    switch (trainArray[0].question) {
      case question:
        printQuestion(question);
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
var printQuestion = function (question) {
  console.log(questionFormEL);
  console.log(question);
  var questionDivEl = document.createElement("div");
  questionDivEl.className = "question-div";
  questionDivEl.setAttribute("id", "question");

  questionFormEL.appendChild(questionDivEl);
  console.log(questionFormEL);

  var h2El = document.createElement("h2");
  h2El.setAttribute("id", "title-question");
  h2El.innerHTML = question;
  questionDivEl.appendChild(h2El);
  console.log(questionDivEl);
};

// PRINT ANSWER
function printAnswers(answer, solution) {
  var ourSolution = solution[0];
  if (answer) {
    answer.forEach(function (answer) {
      var buttonEl = document.createElement("button");
      buttonEl.className = "answers btn";
      buttonEl.name = "answer-btn-name";
      buttonEl.type = "submit";
      buttonEl.innerHTML = answer;
      if (answer === ourSolution) {
        console.log("True");
        buttonEl.setAttribute("data-button", answer);
      } else {
        buttonEl.setAttribute("id", "incorrect");
      }

      answerFormEl.appendChild(buttonEl);
    });
  }
  console.log(answerFormEl);
}

// VALIDATE ANSWER
var validateAnswers = function (answer, solution) {
  console.log(answer);
  var printedAnswers = document.getElementsByClassName("answers btn");
  console.dir(printedAnswers);

  //  check that all answers are printed
  if (printedAnswers.length === answer.length) {
    console.log("All answers are printed!");
  }
};

var goodAnswer = function (divEl) {
  divEl.innerHTML = "Correct!";
  sectionEl.appendChild(divEl);
  var points = 10;
  score.push(points);
  console.log(score);
};
var badAnswer = function (divEl) {
  console.log("Wrong!");
  divEl.innerHTML = "Wrong!";
  sectionEl.appendChild(divEl);
  console.log(score);
};

// RESET QA FORM
var reset = function (questionDivEl) {
  questionDivEl = document.getElementById("question");
  questionDivEl.remove();

  answerFormEl.innerHTML = ""; // reset Answer

  console.log(questionFormEL);
  console.log(answerFormEl);
  getQAs();
};

//  User has finished quiz. Show their score & record their initials
var finishedQuiz = function () {
  var outro = "All Done!";
  sectionEl.innerHTML = "";
  questionFormEL.remove();
  answerFormEl.remove();
  console.log("User Finished Quiz!");
  // create form container for ALL DONE ELEMENTS
  var formScoreEl = document.createElement("form");
  formScoreEl.className = "question" + " notify-score-container";
  sectionEl.appendChild(sectionDivEl);
  sectionDivEl.appendChild(formScoreEl);

  // set final score variable
  var tallyScore = 0;

  // get final score for Score Array
  for (var i = 0; i < score.length; i++) {
    tallyScore += score[i];
  }
  finalScore.push(tallyScore);
  console.log(finalScore);

  var divScoreEl = document.createElement("div");
  divScoreEl.className = "quiz-title" + " score-title";
  divScoreEl.innerHTML =
    "<h2>" +
    outro +
    "</h2>" +
    "<p>" +
    "Your final score is" +
    " " +
    finalScore +
    "." +
    "</p>";
  formScoreEl.appendChild(divScoreEl);
  console.log(divScoreEl);

  // create div for User name/scores,text-box and submit buttons
  var divUserNameEl = document.createElement("div");
  divUserNameEl.className = "player-name-container" + " high-score-container";
  var userNamePEl = document.createElement("p");
  userNamePEl.className = "player-initials-text";
  userNamePEl.setAttribute("is", "user-initials");
  userNamePEl.innerHTML =
    "Enter initials:" +
    "<input type='text' class='text-input' placeholder='Enter initials' name='initials-text'>" +
    "<button class='btn' id='score-submit' type='submit'>" +
    "Submit" +
    "</button>";
  divScoreEl.appendChild(userNamePEl);
};

// SAVE USER NAME AND SCORE
function recordUserNameAndScore(event) {
  event.preventDefault();

  var userInitials = document.querySelector(
    "input[name='initials-text']"
  ).value;
  var submitUserEntry = event.target.id == "score-submit"; // target submit button

  // check that submit was clicked and initial input is not empty
  if (submitUserEntry && userInitials) {
    // Push User initials and score to High Scores array
    high_scores.push(`
    User: ${userInitials}
    Score: ${finalScore}`);
    console.log(high_scores);
    // var new_high_score = userInitials
  } else if (submitUserEntry && !userInitials) {
    alert("Please enter you initials!");
    return false;
  }

  saveUserData(); // Save High Scores
}

// SAVE SCORES TO LOCAL STORAGE
function saveUserData() {
  localStorage.setItem("High_Scores", JSON.stringify(high_scores));
  console.log(localStorage.getItem("High_Scores")); // TODO: save multiple users and their scores
}
// LOAD SCORES FROM LOCAL STORAGE
function loadScores() {
  var savedScores = localStorage.getItem("High_Scores"); // Assign savedScores array to current localStorage
  console.log(savedScores);
  // if there are no tasks, set savedScores to an empty array and return out of the function
  if (!savedScores) {
    return false;
  }
  console.log("Saved scores found!");

  savedScores = JSON.parse(savedScores); // JSON.parse translates localStorage strings into JSON objects
  // TODO: Allow user to view high scores
}
/** MAIN FUNCTION CALLS
 ***********************************************************************/
// Click to Start Quiz
startQuiz.addEventListener("click", (e) => {
  // Isolate click to start button
  e.preventDefault();
  e.stopPropagation();
  console.log("Start Button Clicked!");
  startCountDown();
  quizFormHandler();
});

// Handle clicks on answers
answerFormEl.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  console.log("Answer Button Clicked!");
  var divEl = document.createElement("div");
  divEl.className = "notify";
  divEl.setAttribute("id", "notify-result");

  // Check answer
  if (e.target.getAttribute("data-button")) {
    goodAnswer(divEl);
  } else {
    badAnswer(divEl);
  }
  reset();
});

sectionDivEl.addEventListener("click", recordUserNameAndScore);

loadScores();

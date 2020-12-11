//the following object stores all of our questions, their answers, current question number
//and also the current scores
'use strict';
const store = {

  questions: [
    {
    
      question: '1. WHO WAS THE FIRST AFRICAN AMERICAN PRESIDENT?',
      answers: [
        'SHAQUILLE O\'NEAL',
        'MARS BLACKMAN',
        'BARACK OBAMA',
        'KAMALA HARRIS',
      ],
      correctAnswer: 'BARACK OBAMA'
    },
    {
      question: '2. WHICH IS NOT AN HBCU?',
      answers: [
        'MOREHOUSE COLLEGE',
        'TIFFIN UNIVERSITY',
        'SPELMAN',
        'HOWARD'
      ],
      correctAnswer: 'TIFFIN UNIVERSITY'
    },
    {
      question: '3. DR. DRE IS A ?',
      answers: [
        'SURGEON', 
        'DRIVER',
        'THERAPIST',
        'PRODUCER'
      ],
      correctAnswer: 'PRODUCER'
    },
    {
      question: '4. WHAT WAS THE NAME OF MARTIN LUTHER KIND JR\'S FATHER\'S CHURCH?',
      answers: [
        'EBENEZAR BAPTIST',
        'ATLANTA SOUTHERN BAPTIST',
        'SOUTHERN CHURCH OF THE PEOPLE',
        'ATLANTA TABERNACLE'
      ],
      correctAnswer: 'EBENEZAR BAPTIST'
    }, 
    {
      question: '5. WHO WROTE THEIR EYES WERE WATCHING GOD?',
      answers: [
        'MEDGER EVERS',
        'SAUL WILLIAMS',
        'ZORA NEALE HURSTON',
        'JAMES BALDWIN'
      ],
      correctAnswer: 'ZORA NEALE HURSTON'
    },
    {
      question: '6. IN 1960, FOUR AFRICAN AMERICAN COLLEGE STUDENTS STAGED A SIT IN THAT HELPED INTEGRATE THIS STORE\'S LUNCH COUNTER?',
      answers: [
        'W.T. GRANT',
        'G.C. MURPHY',
        'S.S. KRESGE',
        'WOOLWORTH'
      ],
      correctAnswer: 'WOOLWORTH'
    },
    {
      question: '7. JEAN-MICHELE BASQUIAT WAS A NEO-EXPRESSIONIST AMERICAN ARTIST WHO DIED IN WHAT YEAR?',      
      answers: [
        '1984',
        '1988',
        '1976',
        '1999'
      ],
      correctAnswer: '1988'
    },

  ],
  questionNumber: 0,
  correct: 0,
  incorrect: 0
};


//we declare an html variable that contains the default html file for the main page
// //function template(){
//   let html =  `<div class="welcomePage">
//   <h3 class="welcomeMessage">What's Good! Let's do a little learning for the culture. Answer 7 questions about Black History and gauge where you stand.</h3>
//   <button class="startQuiz" alt="Dive in" autofocus>DIVE IN!</button>
//   <img src="https://media.giphy.com/media/hT6wgEtwoUt0no87gV/giphy.gif" alt="Kevin Hart clapping" width="100%">
// </div>`;
// }

let html =  `<div class="welcomePage">
  <h3 class="welcomeMessage">What's Good! Let's do a little learning for the culture. Answer 7 questions about Black History and gauge where you stand.</h3>
  <button class="startQuiz" alt="Dive in" autofocus>DIVE IN!</button>
  <img src="https://media.giphy.com/media/hT6wgEtwoUt0no87gV/giphy.gif" alt="Kevin Hart clapping" width="100%">
</div>`;

//this function renders our page
function renderQuizApp() {
  console.log('quiz app is rendered');
  $('main').html(html);
}
 
//this function changes the html's value into the question page's
function loadQuiz() {
  let number = store.questionNumber;
  let selection = store.questions[number].answers;
  console.log(`Quiz No. ${number + 1} is loaded.`);
  return  `<div class="questionPage">
  
   <form class="question-form">
      <h3>
       QUESTION ${number + 1}: ${store.questions[number].question}
      </h3>

       <input type="radio" name="answer" id="answer-a" class="answer" value="${selection[0]}" required>
       <label for="answer-a">${selection[0]}</label>
       <br>
       <input type="radio" name="answer" id="answer-b" class="answer" value="${selection[1]}">
       <label for="answer-b">${selection[1]}</label>
       <br>
       <input type="radio" name="answer" id="answer-c" class="answer" value="${selection[2]}">
       <label for="answer-c">${selection[2]}</label>
       <br>
       <input type="radio" name="answer" id="answer-d" class="answer" value="${selection[3]}">
       <label for="answer-d">${selection[3]}</label>
       <br>
       <button type="submit" class="answerSubmit">Submit Answer</button>
   </form>
   <p>Correct: ${store.correct}</p><p>Incorrect: ${store.incorrect}</p>
</div>`;
}

//this function for correct answer


function isCorrect(answer){
  console.log('Page for correct answers loaded!');
  html = `<div class="correctPage">
  <h3>Great job! ${answer} is the correct answer!<h3>
  <p> Correct: ${store.correct}</p><p>Incorrect: ${store.incorrect}</p>
  <button class="nextQuestion">Next Question</button>
  <img src="https://media.giphy.com/media/1kJXHfUaBRQPn3gL55/giphy.gif" alt="Steve Harvey clapping">
  </div>`;
}
// this function for incorrect answer


function isIncorrect(answer) {
  console.log('Page for wrong answers loaded!');
  html =  `<div class="wrongPage">
   <h3>Oh no! The correct answer is ${answer}. Better luck next time!</h3>
   <p>Correct: ${store.correct}</p><p>Incorrect: ${store.incorrect}</p>
   <button class="nextQuestion">Next Question</button>
   <img src="https://gifimage.net/wp-content/uploads/2017/10/nice-try-gif-2.gif" alt="Joker saying 'Nice try'">
</div>`;
}


//this function changes the html value when the user finishes the last question

function endPage() {
  console.log('End page is triggered');
  html =  `<div class="endOfQuiz">
   <h3>All done! Let's see how you did!</h3>
   <h3>Correct: ${store.correct}</h3>
   <h3>Incorrect: ${store.incorrect}</h3>
   <button class="restartQuiz" alt="do it again">Do it again!</button>
   <img src="https://media.giphy.com/media/CyRC2jhUo6nDy/giphy.gif" alt="mlk speech crowd cheering">
</div>`;
  store.incorrect = 0;
  store.correct = 0;
  store.questionNumber = 0;
}

//this function checks whether the answer is correct or incorrect

function answerCheck(review) {
  let i = store.questionNumber;
  let result = (review === store.questions[i].correctAnswer) ? 'Correct' : 'Incorrect';
  if(result === 'Correct'){
    store.correct += 1;
    isCorrect(store.questions[i].correctAnswer);
  } else {
    store.incorrect += 1;
    isIncorrect(store.questions[i].correctAnswer);
  }
  console.log(`The answer is ${result}!`);
  store.questionNumber++;
}

//function that gets triggered when the start quiz button is clicked
function handleStartQuiz() {
  $('.startQuiz').click((event) => {
    console.log('Start quiz has been clicked');
    html = loadQuiz();
    main();
  });
}


//function that gets triggered when the user submits an answer
function handleSubmit() {
  $('.question-form').submit(event => {
    event.preventDefault();
    console.log('Answer submit was clicked');
    let userAnswer = $('input[name="answer"]:checked').val();
    answerCheck(userAnswer);
    main();
  });
   
}
//function that gets triggered when the user clicks the button for the next question
function handleNextQuestion() {
  $('.nextQuestion').click(function(event) {
    console.log( `clicked to load question ${store.questionNumber + 1}`);
    if(store.questionNumber < 7) {
      html = loadQuiz();
    } else {
      endPage();
    }
    main();
  });
}

//function that gets triggered when the restart quiz button is clicked
function handleRestart() {
  $('.restartQuiz').click(function(event) {
    console.log('Restart quiz has been clicked');
    html = loadQuiz();
    main();
  });
}

function main(){
  renderQuizApp();
  handleStartQuiz();
  handleSubmit();
  handleNextQuestion();
  handleRestart();
}

$(main());
const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  let questionContainer = document.querySelector('.question-container')
   questionContainer.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve) {setTimeout(function() {resolve(question)} , time)})
}

function removeQuestion() {
  return new Promise(function() {
  let questionContainer = document.querySelector('.question-container')
  questionContainer.innerHTML = ''})
  // toggleTrueAndFalseButtons()
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

let counter = 0

function trueAndFalseButtons () {
   return document.querySelector('.true-false-list').querySelectorAll('.btn')
 // console.log(btn);
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn) {
    // console.log("pre-toggle", btn)
    btn.classList.toggle('hide')
    // console.log("post-toggle", btn)
    }
  )
}

function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

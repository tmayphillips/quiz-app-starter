/* your quiz builder functionality goes here */

let inputQuestion = document.getElementById('input-question')
let answerA = document.getElementById('input-answer-a')
let answerB = document.getElementById('input-answer-b')
let answerC = document.getElementById('input-answer-c')
let answerD = document.getElementById('input-answer-d')
let correctAnswer =  document.getElementById('input-answer-correct').value


let addQuestion = () => {
    questions.push({'question':inputQuestion.value, 'choiceA': answerA.value, 'choiceB': answerB.value, 'choiceC': answerC.value, 'choiceD':answerD.value, 'answer': correctAnswer.value})
    localStorage.setItem('questions', JSON.stringify(questions))
    console.log(questions)
    getQuestions()
    console.log(questionBank)
}
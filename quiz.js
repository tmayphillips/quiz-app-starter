//Your quiz questions array of objects goes here
let count = 0
let scoreCount = 0

let header = document.querySelector('.header')
let title = document.getElementById('title') 
let questionCount = document.getElementById('question-count')
let startSection = document.getElementById('start-section')
let questionSection = document.getElementById('question-section')
let scoreSection = document.getElementById('score-section')
let info = document.getElementById('info')
let question = document.getElementById('question')
let choiceA = document.getElementById('choice-a')
let choiceB = document.getElementById('choice-b')
let choiceC = document.getElementById('choice-c')
let choiceD = document.getElementById('choice-d')
let submitBtn = document.getElementById('submit-button')
let nextBtn = document.getElementById('next-button')
let scoreBtn = document.getElementById('score-button')

getQuestions()

let displayQuestion = () => {
    info.innerHTML = ''
    questionCount.innerHTML = `${count + 1} of ${totalQuestions}`
    startSection.style.display = 'none'
    scoreSection.style.display = 'none'
    nextBtn.style.display = 'none'
    scoreBtn.style.display = 'none'
    questionSection.style.display = 'flex' 
    submitBtn.style.display = 'inline-block'
    question.innerHTML = questionBank[count].question
    choiceA.innerHTML = questionBank[count].choiceA
    choiceB.innerHTML = questionBank[count].choiceB
    choiceC.innerHTML = questionBank[count].choiceC
    choiceD.innerHTML = questionBank[count].choiceD
}

let displayScore = () => {
    let feedback = ''
    let score = document.getElementById('score')
    startSection.style.display = 'none'
    questionSection.style.display = 'none'
    scoreSection.style.display = 'block'
    if ((scoreCount / totalQuestions) > 0.7) {
        feedback = 'Great job!'
    }
    else {
        feedback = 'Better luck next time!'
    }
    score.innerHTML = `You answered ${scoreCount} out of ${totalQuestions}! 
        ${feedback}`
    questionCount.innerHTML = ''
    count = 0
    scoreCount = 0
}

let radioCheck = () => {
    let radios = document.getElementsByName("listGroupAnswers");

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log(questionBank[count].choiceA)
            console.log(`comparison ${i+1} and ${questionBank[count].answer}`)
            if ((i+1) === Number(questionBank[count].answer)) {
                info.innerHTML = "You are correct."
                scoreCount++
            }
            else {
                info.innerHTML = "Sorry, that is not the correct answer."
            }
            radios[i].checked = false;
            count++
            return true;
        }
    }
}

let submit = () => {
    if (!radioCheck()) { info.innerHTML = 'Please choose an answer' }
    else {
        if (count < questionBank.length) {
            submitBtn.style.display = 'none'
            nextBtn.style.display = 'inline-block'
        } else if (count === questionBank.length) {
            submitBtn.style.display = 'none'
            scoreBtn.style.display = 'inline-block'
        }
    }
}
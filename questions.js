//Your quiz functionality goes here
let questions = []
let questionBank = []
let totalQuestions = 0

let getQuestions = () => {
    if (localStorage.getItem("questions") === null) {
        questions = [
            {question:'What is the capital of Texas', choiceA:'Houston', choiceB:'Dallas', choiceC:'Austin', choiceD:'Amarillo', answer:3},
            {question:'What is the capital of Florida', choiceA:'Tallahassee', choiceB:'Jacksonville', choiceC:'Miami', choiceD:'Tampa', answer:1},
            {question:'What is the capital of Alabama', choiceA:'Huntsville', choiceB:'Birmingham', choiceC:'Mobile', choiceD:'Montgomery', answer:4},
            {question:'What is the capital of Alaska', choiceA:'Fairbanks', choiceB:'College', choiceC:'Juneau', choiceD:'Anchorage', answer:3},
            {question:'What is the capital of Arizona', choiceA:'Mesa', choiceB:'Phoenix', choiceC:'Tucson', choiceD:'Scottsdale', answer:2}
        ]
    } else {
        questions = JSON.parse(localStorage.getItem('questions'))
    }
    
    let shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    
    questionBank = shuffle(questions)
    totalQuestions = questionBank.length
}

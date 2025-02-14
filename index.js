const questionArray = [
    {
        questionStatement: "what is the capital of france?",
        answers: ["London", "paris", "berlin", "rome"],
        correctanswer: "paris",

    },
    {
        questionStatement: "which planet is known as the red planet?",
        answers: ["venus", "mars", "jupiter", "saturn"],
        correctanswer: "mars",
    },
    {
        questionStatement: "who painted the mona lisa?",
        answers: ["pablo picasso", "leonardo da vinci", "vincent van gogh", "michelangelo"],
        correctanswer: "lenardo da vinci",
    },
    {
        questionStatement: "what is the largest mammal in the world?",
        answers: ["elephant", "giraffe", "blue whale", "hippopotamus"],
        correctanswer: "blue whale",
    },
    {
        questionStatement: "which gas is responsible for the greenhouse effect?",
        answers: ["carbon dioxide", "oxygen", "nitrogen", "helium"],
        correctanswer: "carbon dioxide",
    }

];

document.addEventListener("DOMContentLoaded", () => {
    const allanswers = document.getElementById("allanswers")
    const questionElement = document.getElementById("question");

    let score = 0
    let currentQuestion = 0
   
    function loadQuestion() {
        questionElement.innerHTML = questionArray[currentQuestion].questionStatement;
        allanswers.innerHTML ="";
        questionArray[currentQuestion].answers.forEach((option) => {
        const answerButton = document.createElement("button");
        answerButton.innerHTML = option;
      
        answerButton.addEventListener("click", () => {
            selectOption(option)
        })
        allanswers.appendChild(answerButton);
    });
}
    function selectOption(selectedOption) {
         if (selectedOption === questionArray[currentQuestion].correctanswer) {
             score++
        }
        currentQuestion++;
        if(currentQuestion < questionArray.length){
            loadQuestion()
        } else{
            showResult()
        }
        // loadQuestion() 
    }
    function showResult(){
        const resultElement = document.getElementById("result");
        allanswers.style.display="none";
        questionElement.style.display="none";

        const reappearbutton = document.getElementById("reappear");
        reappearbutton.style.display = "block";

        reappearbutton.addEventListener("click",()=>{
            allanswers.style.display="flex";
            questionElement.style.display="block";
            reappearbutton.style.display = "none";
            resultElement.innerHTML = ""
            currentQuestion = 0 ;
            score =0;
            loadQuestion();
        })
        // const resultElement = document.getElementById("result");
        resultElement.innerHTML = `you scored ${score} out of ${questionArray.length}`
    }
    loadQuestion();
    
});

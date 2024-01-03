import { useState } from 'react';
import './App.css';
import congrationsIMG from './imgsrc/5167655.png'
import defeatIMG from './imgsrc/download.png'
function App() {
  const questions = [
    {
      questionText: "Which planet is known as the Red Planet?",
      answerOptions: [
        { answerText: "Venus", isCorrect: false },
        { answerText: "Mars", isCorrect: true },
        { answerText: "Jupiter", isCorrect: false },
        { answerText: "Saturn", isCorrect: false }
      ]
    },
    {
      questionText: "Who painted the Mona Lisa?",
      answerOptions: [
        { answerText: "Vincent van Gogh", isCorrect: false },
        { answerText: "Leonardo da Vinci", isCorrect: true },
        { answerText: "Pablo Picasso", isCorrect: false },
        { answerText: "Michelangelo", isCorrect: false }
      ]
    },
    {
      questionText: "What is the largest mammal in the world?",
      answerOptions: [
        { answerText: "Elephant", isCorrect: false },
        { answerText: "Blue Whale", isCorrect: true },
        { answerText: "Giraffe", isCorrect: false },
        { answerText: "Hippopotamus", isCorrect: false }
      ]
    },
    {
      questionText: "Who wrote the play 'Romeo and Juliet'?",
      answerOptions: [
        { answerText: "William Shakespeare", isCorrect: true },
        { answerText: "Charles Dickens", isCorrect: false },
        { answerText: "Jane Austen", isCorrect: false },
        { answerText: "Mark Twain", isCorrect: false }
      ]
    },
    {
      questionText: "Which country is known as the Land of the Rising Sun?",
      answerOptions: [
        { answerText: "China", isCorrect: false },
        { answerText: "Japan", isCorrect: true },
        { answerText: "South Korea", isCorrect: false },
        { answerText: "Thailand", isCorrect: false }
      ]
    },
    {
      questionText: "What is the chemical symbol for gold?",
      answerOptions: [
        { answerText: "Au", isCorrect: true },
        { answerText: "Ag", isCorrect: false },
        { answerText: "Fe", isCorrect: false },
        { answerText: "Cu", isCorrect: false }
      ]
    },
    {
      questionText: "Who developed the theory of relativity?",
      answerOptions: [
        { answerText: "Isaac Newton", isCorrect: false },
        { answerText: "Albert Einstein", isCorrect: true },
        { answerText: "Stephen Hawking", isCorrect: false },
        { answerText: "Galileo Galilei", isCorrect: false }
      ]
    },
    {
      questionText: "What is the tallest mountain in the world?",
      answerOptions: [
        { answerText: "Mount Everest", isCorrect: true },
        { answerText: "K2", isCorrect: false },
        { answerText: "Mount Kilimanjaro", isCorrect: false },
        { answerText: "Mount McKinley (Denali)", isCorrect: false }
      ]
    },
    {
      questionText: "Which continent is the least populated?",
      answerOptions: [
        { answerText: "Europe", isCorrect: false },
        { answerText: "Asia", isCorrect: false },
        { answerText: "Australia", isCorrect: false },
        { answerText: "Antarctica", isCorrect: true }
      ]
    },
    {
      questionText: "Who was the first person to step on the moon?",
      answerOptions: [
        { answerText: "Neil Armstrong", isCorrect: true },
        { answerText: "Buzz Aldrin", isCorrect: false },
        { answerText: "Yuri Gagarin", isCorrect: false },
        { answerText: "Alan Shepard", isCorrect: false }
      ]
    }
  ];
  
// // length
  let [showScore, setShowScore] = useState(false)
  let [score, setScore] = useState(0)
  let [currentQuestion, setCurrentQuestion] = useState(0)

  let [congratsIMG, setCongratsIMG] = useState()
  let [succesfully, setSuccesfully] = useState('asf')
console.log(score);
  let handleClickonQuestion=(isScore) => {
    if(isScore){
      setScore(score+1)
    }
    
    if(score <= 6){
      setSuccesfully('defeat')
      setCongratsIMG(defeatIMG)
    } else {
      setCongratsIMG(congrationsIMG)
      setSuccesfully('setSuccesfully')
    }


    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }
  const starOverFunc = () => {
     setShowScore(false)
     setScore(0)
     setCurrentQuestion(0)
  }
  return (
    <div className="App">
      <div className='fullContainer'>
          {showScore ? (
            <div className='youScore'>
              <img className='img' src={congratsIMG} alt='congratsIMG'/>
              <h4 className='quizCompleted'>Quiz completed <span className='succesfully'>{succesfully}</span></h4>
              <p className='quizAttempt'>you attempt <span className='quizAttemptQuestions'>{questions.length} questions</span> and from that <span className='quizAttemptAnswer'>{score} answer</span> is correct.</p>
              <h1 className='startOver' onClick={() => starOverFunc()}>start over</h1>
              {/* <h1>You scored {score} out of {questions.length}</h1> */}
            </div>
            ): (
              <div className='questionContainer'>
                <h1 className='Quiz'>QUIZ</h1>
                <hr className='hr1'/>
                <div className='questionCount'>
                  <span>Question</span>
                  <span>{currentQuestion+1}/{questions.length}</span>
                </div>
                <hr className='hr2'/>
                <div className='questionTextContainer'>
                  <h1 className='questionText'>{currentQuestion+1}.{questions[currentQuestion].questionText}</h1>
                </div>
                <div className='questionAnswerSection'>
                  {questions[currentQuestion].answerOptions.map((item, index) => (
                    <div className='answerbox'>
                      <h1 className='answerCount' onClick={() => handleClickonQuestion(item.isCorrect)}>{index+1}</h1>
                      <h1 className='answerTexts'>{item.answerText}</h1>
                    </div>
                  ))}
                </div>
              </div>
          )}
      </div>
    </div>
  );
}

export default App;

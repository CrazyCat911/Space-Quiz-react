import "./App.css";
import questions from "./questions.json";
import { useState, useEffect } from "react";

export default function Quiz() {
  const [answer, setAnswer] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(questions[questionNumber]);
  useEffect(() => {
    return () => {
      setQuestion(questions[questionNumber]);
    };
  }, [questionNumber]);

  function isAnswerCorrect(answer) {
    let correctAnswers = questions[questionNumber].answers;
    // Checking for the contains answers
    let isCorrect = false;
    if (correctAnswers.contains != undefined) {
      correctAnswers.contains.forEach((checkingAnswer) => {
        if (answer.includes(checkingAnswer)) {
          isCorrect = true;
        }
      });
    }
    // Checking for the exactly answers
    if (correctAnswers.exactly != undefined) {
      correctAnswers.exactly.forEach((checkingAnswer) => {
        if (answer === checkingAnswer) {
          isCorrect = true;
        }
      });
    }
    // At the end
    return isCorrect;
  }

  function AnswerHandle(answer) {
    if (isAnswerCorrect(answer)) {
      setQuestionNumber(questionNumber + 1);
    }
  }

  return (
    <>
      <h1>{question.question}</h1>
      <input
        type={question.type}
        onChange={(event) => {
          setAnswer(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // console.log("ENTER the other function");
            AnswerHandle(answer);
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          AnswerHandle(answer);
        }}
      >
        Submit
      </button>
    </>
  );
}

// @ts-check
import React from "react";
import "./App.css";
import questions from "./questions.json";

function Question({ num }) {
  const question = questions[num];

  function checkAnswer(answer) {
    console.warn("Check answer not implemented");
  }

  return (
    <>
      <h1>{question.question}</h1>
      <input
        type={question[num]}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("ENTER the other function");
          }
        }}
      />
      <button type="button">Submit</button>
    </>
  );
}

export default function Quiz() {
  return <Question num={0} />;
}

import React from "react";
import { useQuizContext } from "../hooks/useQuizContext";

export default function StartScreen() {
  const {numQuestions, dispatch} = useQuizContext();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

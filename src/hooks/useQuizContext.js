import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizProvider was used outside the context");
  return context;
}

export { useQuizContext };

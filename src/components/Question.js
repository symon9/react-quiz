import { useQuizContext } from "../hooks/useQuizContext";
import Options from "./Options";

export default function Question() {
  const { questions, index } = useQuizContext();

  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

import { useState } from "react";

function App() {
  const questions = [
    {
      questionTitle: "O que é o Teste de Turing ?",
      answerOptions: [
        { answerText: "Teste que avalia quem é mais forte", isCorrect: false },
        {
          answerText: "Teste que avalia a inteligência das pessoas",
          isCorrect: false,
        },
        {
          answerText: "Teste que avalia a velocidade dos computadores",
          isCorrect: false,
        },
        {
          answerText:
            "Teste que avalia a capacidade de um software se comportar com inteligência similar à de humanos",
          isCorrect: true,
        },
      ],
    },
    {
      questionTitle: "Quem foi Alan Turing ?",
      answerOptions: [
        {
          answerText: "Advogado do Facebook que ganhava 50 milhões",
          isCorrect: false,
        },
        { answerText: "Programador do Twitter", isCorrect: false },
        { answerText: "Pai da Inteligência Artificial", isCorrect: true },
        {
          answerText: "Médico que criou a cura pro Coronavírus",
          isCorrect: false,
        },
      ],
    },
    {
      questionTitle: "Quando Alan Turing nasceu ?",
      answerOptions: [
        { answerText: "23/06/1912", isCorrect: true },
        { answerText: "23/03/1912", isCorrect: false },
        { answerText: "28/12/1919", isCorrect: false },
        { answerText: "25/03/1917", isCorrect: false },
      ],
    },
    {
      questionTitle: "Alan Turing morreu ?",
      answerOptions: [
        { answerText: "Sim, em 09/12/1980", isCorrect: false },
        { answerText: "Sim, em 06/07/1953", isCorrect: false },
        { answerText: "Não, ele ainda está vivo", isCorrect: false },
        { answerText: "Sim, em 07/06/1954", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const handleAnswerChoose = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-[#1f1a25] flex flex-col justify-center items-center h-screen">
      {showScore ? (
        <div className="flex flex-col text-white shadow-boxShadow justify-center items-center shadow border border-borderColor h-1/2 w-1/2 p-4 rounded-xl bg-background">
          <p className="text-white text-2xl">
            Você acertou {score} de {questions.length} questões
          </p>
        </div>
      ) : (
        <div className="flex flex-col text-white shadow-boxShadow shadow border border-borderColor h-1/2 w-1/2 p-4 rounded-xl bg-background">
          <div className="ml-2 flex h-[30%] flex-row justify-between">
            <div className="flex p-4 h-1/3 items-center justify-center rounded-full bg-[#5D00E8]">
              <p>{currentQuestion + 1}</p>
            </div>
            <h1 className="pt-2 underline underline-offset-2 text-xl">
              {questions[currentQuestion].questionTitle}
            </h1>
          </div>
          <div className="flex justify-between h-2/3 pt-2 pb-2 flex-col">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                onClick={() => handleAnswerChoose(answerOptions.isCorrect)}
                className="bg-[#8d4cee] rounded-lg p-2 hover:bg-[#5D00E8]"
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

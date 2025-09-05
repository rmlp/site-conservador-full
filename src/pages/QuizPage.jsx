// Arquivo: src/pages/QuizPage.jsx

import React, { useState, useEffect } from 'react';
import NavigationButton from '../components/NavigationButton'; // 1. IMPORTA O BOTÃO

// Ícones
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>;
const RestartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/></svg>;

// 2. RECEBE A FUNÇÃO "setCurrentPage" DO App.jsx
const QuizPage = ({ setCurrentPage }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  useEffect(() => {
    fetch('/data/quiz.json')
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  const handleAnswerClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);
    setShowExplanation(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setSelectedAnswer(null);
      setShowExplanation(false);
    }, 2500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowSocialLinks(false);
  };
  
  const handleAdvancedShare = async () => {
    const scoreText = `Eu acertei ${score} de ${questions.length} no Quiz do Pensamento Conservador!`;
    const siteUrl = window.location.href;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Resultado do Quiz: Pensamento Conservador',
                text: scoreText,
                url: siteUrl,
            });
        } catch (error) {
            console.log('Erro ao compartilhar', error);
        }
    } else {
        setShowSocialLinks(true);
    }
  };

  const getResultProfile = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { title: "Pensador Experiente", description: "Você demonstra um excelente conhecimento dos princípios conservadores!" };
    if (percentage >= 50) return { title: "Explorador Curioso", description: "Você tem uma boa base. Explore as outras seções para fortalecer seu conhecimento." };
    return { title: "Iniciante Interessado", description: "Você está no começo da sua jornada. O site é o lugar perfeito para aprender mais." };
  };
  
  if (questions.length === 0) {
    return <div>Carregando quiz...</div>;
  }

  return (
    <div className="py-20">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif text-slate-900">Quiz Interativo</h2>
        <p className="text-lg text-slate-600 mt-2">Teste os seus conhecimentos.</p>
      </div>
      <div className="container mx-auto max-w-2xl bg-white rounded-lg shadow-xl p-8">
        {showScore ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800">Quiz Finalizado!</h3>
            <p className="text-lg mt-4">Você acertou {score} de {questions.length} perguntas.</p>
            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-serif text-blue-800">{getResultProfile().title}</h4>
              <p className="text-slate-700 mt-2">{getResultProfile().description}</p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={restartQuiz} className="flex items-center justify-center bg-slate-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-slate-700 transition-colors">
                  <RestartIcon /> Refazer Quiz
                </button>
                <button onClick={handleAdvancedShare} className="flex items-center justify-center bg-white border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-md hover:bg-slate-100 transition-colors">
                    <ShareIcon /> Compartilhar Resultado
                </button>
              </div>

              {showSocialLinks && (
                  <div className="mt-4 p-4 border-t border-slate-200 w-full text-center">
                      <p className="text-sm text-slate-600 mb-3">Compartilhe em:</p>
                      <div className="flex justify-center items-center gap-4">
                          <a href={`https://api.whatsapp.com/send?text=Eu acertei ${score} de ${questions.length} no Quiz do Pensamento Conservador! Teste seus conhecimentos: ${window.location.href}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.89.001 2.235.654 4.288 1.902 6.043l-1.485 5.444 5.562-1.465z"/></svg>
                          </a>
                          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=Eu acertei ${score} de ${questions.length} no Quiz do Pensamento Conservador! Teste seus conhecimentos:`} target="_blank" rel="noopener noreferrer" className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.624 4.22 3.765 4.659-.693.188-1.442.23-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                          </a>
                      </div>
                  </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-serif text-slate-800">Pergunta {currentQuestion + 1}/{questions.length}</h3>
              <p className="text-lg mt-2 text-slate-700">{questions[currentQuestion].question}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].answers.map((answer, index) => {
                let buttonClass = 'bg-slate-100 hover:bg-slate-200 text-slate-800';
                if (selectedAnswer !== null) {
                  if (answer.isCorrect) buttonClass = 'bg-green-500 text-white';
                  else if (selectedAnswer === answer.isCorrect) buttonClass = 'bg-red-500 text-white';
                  else buttonClass = 'bg-slate-100 text-slate-800 opacity-50';
                }
                return (
                  <button key={index} onClick={() => handleAnswerClick(answer.isCorrect)} disabled={selectedAnswer !== null} className={`w-full p-4 rounded-lg font-semibold transition-all duration-300 ${buttonClass}`}>
                    {answer.text}
                  </button>
                );
              })}
            </div>
            {showExplanation && (
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-300">
                <p className="font-bold text-blue-800">Explicação:</p>
                <p className="text-slate-700 mt-1">{questions[currentQuestion].explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>
      {/* 3. ADICIONA O BOTÃO DE NAVEGAÇÃO NO FINAL */}
      {showScore && (
          <NavigationButton onClick={() => setCurrentPage('artigos')} text="Avançar para Artigos" />
      )}
    </div>
  );
};

export default QuizPage;
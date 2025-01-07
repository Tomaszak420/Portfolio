import React, { useEffect, useState } from 'react';
import './Project2.scss';

function Project2() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  async function fetchData() {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
      const data = await response.json();
      setQuestions(data.results);
      if (data.results.length > 0) {
        document.getElementById('py').innerHTML = data.results[0].question;
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const TorFButtons = document.querySelectorAll('.torf');
    if (currentQuestion >= 10) {
      TorFButtons.forEach(button => {
        button.disabled = true;
      });
    } else {
      TorFButtons.forEach(button => {
        button.disabled = false;
      });
    }
  }, [currentQuestion]);

  function nextQuestion() {
    setCurrentQuestion(prev => (prev >= 9 ? prev + 1 : prev + 1));
    if (currentQuestion < 9) {
      document.getElementById('py').innerHTML = questions[currentQuestion + 1].question;
    }
  }

  function checkAnswer(event) {
    const { value } = event.target;
    if (questions[currentQuestion].correct_answer === value) {
      setScore(prev => (prev >= 10 ? prev : prev + 1));
    }
    nextQuestion();
  }

  function startNewGame() {
    setQuestions([]);
    setScore(0);
    setCurrentQuestion(0);
    fetchData();
  }

  return (
    <div>
      <div id='gui'>
        <h4>Wynik: {score}</h4>
        {currentQuestion < 10 ? (
          <h4>Pytanie: {currentQuestion + 1}</h4>
        ) : (
          <h4>Pytanie: 10</h4>
        )}
      </div>
      <h4>Kategoria: {questions[currentQuestion < 10 ? currentQuestion : 9]?.category}</h4>
      <h2 id='py'> </h2>
      <div id='stery'>
        <button className='torf' onClick={checkAnswer} value="True">Prawda</button>
        <button className='torf' onClick={checkAnswer} value="False">Fałsz</button>
        <br />
        {currentQuestion >= 10 && (
          <button id='start' onClick={startNewGame} value="Start">
            Nowa Gra
          </button>
        )}
      </div>
    </div>
  );
}

export default Project2;

import React, { useState } from 'react';
import './App.css';

const choices = ['Rock', 'Paper', 'Scissors'];

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const outcome = determineWinner(choice, compChoice);

    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(outcome);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'Draw';
    if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      return 'You Win!';
    }
    return 'You Lose!';
  };

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)} className="choice-btn">
            {choice}
          </button>
        ))}
      </div>

      {userChoice && (
        <div className="results">
          <p><strong>You:</strong> {userChoice}</p>
          <p><strong>Computer:</strong> {computerChoice}</p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

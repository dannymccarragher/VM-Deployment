import './App.css'
import { useState } from 'react';

function App() {

  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [guessCount, setGuessCount] = useState(10);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess(event) {
    setGuess(event.target.value);
  }

  function checkGuess() {
    if (gameOver) return;

    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    if (guessNumber === targetNumber) {
      setMessage(`You guessed the number! It was ${targetNumber}!`);
      setGameOver(true);
    } else if (guessCount === 1) {
      setMessage(`Game Over! You ran out of guesses. The number was ${targetNumber}.`);
      setGuessCount(0);
      setGameOver(true);
    } else if (guessNumber < targetNumber) {
      setGuessCount(guessCount - 1);
      setMessage('Too low! Try a higher number.');
    } else {
      setGuessCount(guessCount - 1);
      setMessage('Too high! Try a lower number.');
    }
  }

  function playAgain() {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setGuessCount(10);
    setMessage('');
    setGameOver(false);
  }

  return (
    <>
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={handleGuess}
        disabled={gameOver}
        min="1"
        max="100"
      />
      <button onClick={checkGuess} disabled={gameOver}>Check</button>
      {message && <p>{message}</p>}
      <p>Guesses remaining: {guessCount}</p>
      {gameOver && <button onClick={playAgain}>Play Again</button>}
    </>
  )
}

export default App;

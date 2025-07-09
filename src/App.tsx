import React from 'react';
import Header from './components/Header';
import Feedback from './components/Feedback';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import Footer from './components/Footer';
import usePrimeGame from './hooks/usePrimeGame';

const App: React.FC = () => {
  const { guesses, feedback, handleGuess, resetGame, isGameOver } = usePrimeGame();

  return (
    <div className="app-container">
      <Header />
      <main className="game-area">
        <Feedback message={feedback} />
        <GuessInput onGuess={handleGuess} disabled={isGameOver} />
        <GuessList guesses={guesses} />
        {isGameOver && (
          <button onClick={resetGame} className="play-again-button">
            Play Again
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

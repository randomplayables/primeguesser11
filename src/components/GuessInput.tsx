import React, { useState } from 'react'
import { MIN_NUMBER, MAX_NUMBER } from '../constants'

interface GuessInputProps {
  onGuess: (guess: number) => void
  disabled: boolean
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const guess = parseInt(inputValue, 10)
    onGuess(guess)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-form">
      <input
        type="number"
        min={MIN_NUMBER}
        max={MAX_NUMBER}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={disabled}
        placeholder={`Enter a prime between ${MIN_NUMBER} and ${MAX_NUMBER}`}
        className="guess-input"
      />
      <button
        type="submit"
        disabled={disabled || inputValue.trim() === ''}
        className="guess-submit-button"
      >
        Guess
      </button>
    </form>
  )
}

export default GuessInput
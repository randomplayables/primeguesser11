import React from 'react'
import { Guess } from '../types'
import { MESSAGES } from '../constants'

interface GuessListProps {
  guesses: Guess[]
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  if (guesses.length === 0) return null

  return (
    <ul className="guess-list">
      {guesses.map((item, index) => {
        let resultText = ''
        if (item.result === 'low') resultText = MESSAGES.TOO_LOW
        else if (item.result === 'high') resultText = MESSAGES.TOO_HIGH
        else if (item.result === 'correct') resultText = MESSAGES.CORRECT

        return (
          <li key={index} className={`guess-item ${item.result}`}>
            Guess {index + 1}: {item.guess} - {resultText}
          </li>
        )
      })}
    </ul>
  )
}

export default GuessList
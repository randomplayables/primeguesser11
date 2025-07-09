import { useState, useEffect } from 'react'
import { initGameSession, saveGameData } from '../services/apiService'
import { generateRandomPrime } from '../utils/prime'
import { MIN_NUMBER, MAX_NUMBER, MESSAGES } from '../constants'
import { Guess } from '../types'

const usePrimeGame = (): {
  guesses: Guess[]
  feedback: string
  handleGuess: (guess: number) => void
  resetGame: () => void
  isGameOver: boolean
} => {
  const [target, setTarget] = useState<number>(() => generateRandomPrime(MIN_NUMBER, MAX_NUMBER))
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [feedback, setFeedback] = useState<string>('')
  const [isGameOver, setIsGameOver] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      const sessionData = await initGameSession()
      localStorage.setItem('gameSession', JSON.stringify(sessionData))
    })()
  }, [])

  const handleGuess = (guess: number) => {
    if (isGameOver) return
    if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
      setFeedback(MESSAGES.INVALID)
      return
    }
    let result: Guess['result']
    if (guess < target) {
      setFeedback(MESSAGES.TOO_LOW)
      result = 'low'
    } else if (guess > target) {
      setFeedback(MESSAGES.TOO_HIGH)
      result = 'high'
    } else {
      setFeedback(MESSAGES.CORRECT)
      result = 'correct'
      setIsGameOver(true)
    }
    const roundNumber = guesses.length + 1
    const roundData: Guess = { guess, result }
    setGuesses(prev => [...prev, roundData])
    saveGameData(roundNumber, roundData)
  }

  const resetGame = () => {
    setTarget(generateRandomPrime(MIN_NUMBER, MAX_NUMBER))
    setGuesses([])
    setFeedback('')
    setIsGameOver(false)
  }

  return { guesses, feedback, handleGuess, resetGame, isGameOver }
}

export default usePrimeGame
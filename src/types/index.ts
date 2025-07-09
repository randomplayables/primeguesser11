export type GuessResult = 'low' | 'high' | 'correct';

export interface Guess {
  guess: number;
  result: GuessResult;
}

export interface GameSession {
  sessionId: string;
}
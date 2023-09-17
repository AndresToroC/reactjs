import { createContext, useState } from 'react'
import { PropsContext, QuizContextType } from '../types/types'

import { loadQuizzes } from '../data/data'

export const QuizContext = createContext<QuizContextType | null>(null)

export const QuizProvider: React.FC<PropsContext> = ({ children }) => {
  const [quizzes] = useState(loadQuizzes)

  return (
    <QuizContext.Provider value={{ quizzes }}>
      { children }
    </QuizContext.Provider>
  )
}
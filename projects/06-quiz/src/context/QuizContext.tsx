import { createContext, useState } from 'react'
import { PropsContext, QuizContextType, QuizType } from '../types/types'

import { loadQuizzes } from '../data/data'

export const QuizContext = createContext<QuizContextType | null>(null)

export const QuizProvider: React.FC<PropsContext> = ({ children }) => {
  const [quizzes] = useState(loadQuizzes)
  const [quizSelected, setQuizSelected] = useState<QuizType>({
    id: '',
    name: '',
    description: '',
    questions: []
  })

  const findQuiz = (quizId: string) => {
    const quiz = quizzes.find(quiz => quiz.id === quizId)

    if (quiz) {
      setQuizSelected(quiz)
    }
  }

  return (
    <QuizContext.Provider value={{ quizzes, quizSelected, findQuiz }}>
      { children }
    </QuizContext.Provider>
  )
}
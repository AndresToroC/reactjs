import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { QuizContextType } from '../types/types'

export const useQuizContext = () => {
  const context = useContext(QuizContext) as QuizContextType

  return context
}

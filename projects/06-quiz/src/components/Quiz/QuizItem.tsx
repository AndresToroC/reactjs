import { Link, useParams } from 'react-router-dom'
import { useQuizContext } from '../../hook/useQuizContext'
import { useEffect } from 'react'
import { QuizQuestion } from './QuizQuestion'

export const QuizItem = () => {
  const { quizId } = useParams()
  const { findQuiz, quizSelected } = useQuizContext()

  useEffect(() => {
    if (quizId) {
      findQuiz(quizId)
    }
  }, [quizId, findQuiz])

  return (
    <>
      <Link to='/quiz' className='underline'>Regresar</Link>
      <h3 className='font-medium text-2xl'>Quiz: { quizSelected.name }</h3>
      <p className='text-base'><b className='text-2xl'>Description:</b> { quizSelected.description }</p>
      
      <QuizQuestion questions={ quizSelected.questions } />
    </>
  )
}

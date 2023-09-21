import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useQuizContext } from '../../hook/useQuizContext'
import { QuizQuestion } from './QuizQuestion'

export const QuizItem = () => {
  const { quizId } = useParams()
  const { findQuiz, quizSelected } = useQuizContext()

  const [isQuiestionActive, setIsQuiestionActive] = useState(false)

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
      
      {
        isQuiestionActive
          ? <QuizQuestion questions={ quizSelected.questions } />
          : <button onClick={ () => setIsQuiestionActive(true) } className='bg-blue-700 rounded-md py-3 text-white'>Iniciar</button>
      }
    </>
  )
}

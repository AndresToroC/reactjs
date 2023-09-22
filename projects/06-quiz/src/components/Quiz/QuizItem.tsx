import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useQuizContext } from '../../hook/useQuizContext'
import { QuizQuestion } from './QuizQuestion'
import { ResultComponent } from './ResultComponent'

export const QuizItem = () => {
  const { quizId } = useParams()
  const { findQuiz, quizSelected } = useQuizContext()

  const [isQuiestionActive, setIsQuiestionActive] = useState(false)
  const [isFinish, setIsFinish] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0)

  const handleIsFinish = (isFinishParam: boolean) => {
    setIsFinish(isFinishParam)
  }

  const handlePercentage = (percentageParam: number) => {
    setPercentage(percentageParam)
  }

  const handleTotalCorrectAnswer = (totalCorrectAnswerParam: number) => {
    setTotalCorrectAnswer(totalCorrectAnswerParam)
  }

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
        !isFinish
          ? 
            <>
              {
                isQuiestionActive
                  ? <QuizQuestion questions={ quizSelected.questions } 
                      setIsFinish={ handleIsFinish }
                      setPercentage={ handlePercentage }
                      setTotalCorrectAnswer={ handleTotalCorrectAnswer } />
                  : <button onClick={ () => setIsQuiestionActive(true) } className='bg-blue-700 rounded-md py-3 text-white'>Iniciar</button>
              }
            </>
          : <ResultComponent percentage={ percentage } totalCorrectAnswer={ totalCorrectAnswer } questions={ quizSelected.questions } />
      }
    </>
  )
}

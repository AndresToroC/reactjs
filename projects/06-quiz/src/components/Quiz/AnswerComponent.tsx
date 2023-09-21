import React from 'react'
import { AnswerType } from '../../types/types'

interface Props {
  answers: AnswerType[]
  answerSelected: string,
  indexQuestion: number,
  handleSelectAnswer: (indexQuestion: number, answer: AnswerType) => void
}

export const AnswerComponent: React.FC<Props> = ({ answers, answerSelected, indexQuestion, handleSelectAnswer }) => {
  return (
    <>
      <h3 className='mt-3 font-medium text-base mb-2'>Answers</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          answers.map((answer, i) => (
            <button key={ i }
              type='button'
              className={`border border-gray-300 p-5 rounded-md hover:scale-105 dark:border-gray-700 ${ answerSelected === answer.answer ? 'bg-green-500 dark:bg-green-700' :  '' }`} 
              onClick={ () => handleSelectAnswer(indexQuestion, answer) }>
              { answer.answer }
            </button>
          ))
        }
      </div>
    </>
  )
}

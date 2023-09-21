import { useState } from 'react'

import { QuestionType } from '../../types/types'

interface Props {
  questions: QuestionType[]
}

export const QuizQuestion: React.FC<Props> = ({ questions }) => {
  const [indexQuestion, setIndexQuestion] = useState(1)

  const question = questions[indexQuestion - 1]
  const totalQuestions = questions.length

  const nextQuestion = () => {
    setIndexQuestion(indexQuestion + 1)
  }

  const previousQuestion = () => {
    const previous = indexQuestion - 1

    if (previous) {
      setIndexQuestion(previous)
    }
  }

  const handleQuestionSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={ handleQuestionSubmit }>
        <h3 className='text-base mb-3'><b>Question:</b> { indexQuestion }/{ totalQuestions }</h3>
        <section className='border broder-gray-200 p-4 rounded-lg dark:border-gray-700 mb-2'>
          <h3 className='font-medium text-base'>Question: { question.question }</h3>
          <hr className='border-gray-200 dark:border-gray-700' />
          <h3 className='mt-3 font-medium text-base mb-2'>Answers</h3>
          {
            question.answers.map((answer, keyAnswer) => (
              <fieldset key={ keyAnswer } className='mb-2'>
                <input type='radio' name={`answer_${ keyAnswer }`} id={`answer_${ keyAnswer }`} value={ answer.answer } />
                <label htmlFor={`answer_${ keyAnswer }`}> { answer.answer }</label>
              </fieldset>
            ))
          }
        </section>
        
        <section className='flex gap-4'>
          <div className='flex-1'>
            <button className='w-full border border-gray-200 text-black hover:bg-gray-100 rounded-lg py-3 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:border-none font-bold' 
              onClick={ previousQuestion }>Previous</button>
          </div>
          <div className='flex-1'>
            {
              totalQuestions === indexQuestion
                ? <button className='w-full bg-blue-700 hover:bg-blue-600 rounded-lg py-3 text-white font-bold'>Send</button>
                : <button className='w-full bg-green-700 hover:bg-green-600 rounded-lg py-3 text-white font-bold' onClick={ nextQuestion }>Next</button>
            }
          </div>
        </section>
      </form>
    </>
  )
}

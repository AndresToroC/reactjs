import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { AnswerType, QuestionType } from '../../types/types'

interface Props {
  questions: QuestionType[]
}

const initialAnswer = {
  answer: '',
  isCorrect: false
}

export const QuizQuestion: React.FC<Props> = ({ questions }) => {
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [selectAnswers, setSelectAnswers] = useState<AnswerType[]>([initialAnswer])
  const [answerSelected, setAnswerSelected] = useState('')
  
  const question = questions[indexQuestion]
  const totalQuestions = questions.length  

  const nextQuestion = () => {
    if (answerSelected) {
      setIndexQuestion(indexQuestion + 1)
    } else {
      toast.info("Select an answer")
    }
  }

  const previousQuestion = () => {
    const previous = indexQuestion - 1

    if (previous >= 0) {
      setIndexQuestion(previous)
    }
  }

  const handleSelectAnswer = (indexQuestion: number, answer: AnswerType) => {
    const newArray = selectAnswers
    newArray[indexQuestion] = answer

    setSelectAnswers(newArray)
    setAnswerSelected(selectAnswers[indexQuestion] ? selectAnswers[indexQuestion].answer : initialAnswer.answer)
  }

  const handleQuestionSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    console.log(selectAnswers);
    
  }

  useEffect(() => {
    const selected = selectAnswers[indexQuestion] ? selectAnswers[indexQuestion].answer : initialAnswer.answer
    setAnswerSelected(selected)
  }, [indexQuestion, selectAnswers])
  
  return (
    <>
      <form onSubmit={ handleQuestionSubmit }>
        <h3 className='text-base mb-3'><b>Question:</b> { indexQuestion + 1 }/{ totalQuestions }</h3>
        <section className='border broder-gray-200 p-4 rounded-lg dark:border-gray-700 mb-2'>
          <h3 className='font-medium text-base'>Question: { question.question }</h3>
          <hr className='border-gray-200 dark:border-gray-700' />
          <h3 className='mt-3 font-medium text-base mb-2'>Answers</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
              question.answers.map((answer, i) => (
                <button key={ i } 
                  className={`border border-gray-300 p-5 rounded-md hover:scale-105 dark:border-gray-700 ${ answerSelected === answer.answer ? 'bg-green-500 dark:bg-green-700' :  '' }`} 
                  onClick={ () => handleSelectAnswer(indexQuestion, answer) }>
                  { answer.answer }
                </button>
              ))
            }
          </div>
        </section>
        
        <section className='flex gap-4'>
          <div className='flex-1'>
            <button className='w-full border border-gray-200 text-black hover:bg-gray-100 rounded-lg py-3 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:border-none font-bold' 
              onClick={ previousQuestion }>Previous</button>
          </div>
          <div className='flex-1'>
            {
              totalQuestions === indexQuestion + 1
                ? <button className='w-full bg-blue-700 hover:bg-blue-600 rounded-lg py-3 text-white font-bold'>Send</button>
                : <button className='w-full bg-green-700 hover:bg-green-600 rounded-lg py-3 text-white font-bold' onClick={ nextQuestion }>Next</button>
            }
          </div>
        </section>
      </form>
    </>
  )
}

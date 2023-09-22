import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { AnswerType, QuestionType } from '../../types/types'
import { AnswerComponent } from './AnswerComponent'

interface Props {
  questions: QuestionType[],
  setIsFinish: (isFinish: boolean) => void,
  setPercentage: (percentage: number) => void,
  setTotalCorrectAnswer: (totalCorrectAnswer: number) => void
}

const initialAnswer = {
  answer: '',
  isCorrect: false
}

export const QuizQuestion: React.FC<Props> = ({ questions, setIsFinish, setPercentage, setTotalCorrectAnswer }) => {
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

    let sumAvarage = 0
    let totalAnswer = 0
    const average = 100 / totalQuestions
    
    selectAnswers.map(answer => {
      if (answer.isCorrect) {
        sumAvarage += average
        totalAnswer++
      }
    })

    setPercentage(sumAvarage)
    setTotalCorrectAnswer(totalAnswer)

    setIsFinish(true)
  }

  useEffect(() => {
    const selected = selectAnswers[indexQuestion] ? selectAnswers[indexQuestion].answer : initialAnswer.answer
    setAnswerSelected(selected)
  }, [indexQuestion, selectAnswers])
  
  return (
    <>
      <h3 className='text-base mb-3'><b>Question:</b> { indexQuestion + 1 }/{ totalQuestions }</h3>
      <section className='border broder-gray-200 p-4 rounded-lg dark:border-gray-700 mb-2'>
        <h3 className='font-medium text-base'>Question: { question.question }</h3>
        <hr className='border-gray-200 dark:border-gray-700' />
          <AnswerComponent 
            answers={ question.answers } 
            answerSelected={ answerSelected }
            indexQuestion={ indexQuestion }
            handleSelectAnswer={ handleSelectAnswer } />
      </section>
      
      <section className='flex gap-4'>
        <div className='flex-1'>
          <button type='button' className='w-full border border-gray-200 text-black hover:bg-gray-100 rounded-lg py-3 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:border-none font-bold' 
            onClick={ previousQuestion }>Previous</button>
        </div>
        <div className='flex-1'>
          {
            totalQuestions === indexQuestion + 1
              ? <button type='button' className='w-full bg-blue-700 hover:bg-blue-600 rounded-lg py-3 text-white font-bold' onClick={ handleQuestionSubmit }>Send</button>
              : <button type='button' className='w-full bg-green-700 hover:bg-green-600 rounded-lg py-3 text-white font-bold' onClick={ nextQuestion }>Next</button>
          }
        </div>
      </section>
    </>
  )
}

import { QuestionType } from '../../types/types'

interface Props {
  questions: QuestionType[]
}

export const QuizQuestion: React.FC<Props> = ({ questions }) => {
  return (
    <>
      {
        questions.map((question, keyQuestion) => (
          <section key={ keyQuestion } className='border broder-gray-200 p-4 rounded-lg dark:border-gray-700'>
            <h3 className='font-medium text-base'>Question: { question.question }</h3>
            <hr className='border-gray-200 dark:border-gray-700' />
            <h3 className='mt-3 font-medium text-base mb-2'>Answers</h3>
            {
              question.answers.map((answer, keyAnswer) => (
                <fieldset key={ keyAnswer } className='mb-2'>
                  <input type='radio' name={`answer_${ keyQuestion }`} id={`answer_${ keyQuestion }_${ keyAnswer }`} value={ answer.answer } />
                  <label htmlFor={`answer_${ keyQuestion }_${ keyAnswer }`}> { answer.answer }</label>
                </fieldset>
              ))
            }
          </section>
        ))
      }
    </>
  )
}

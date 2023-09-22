import { QuestionType } from '../../types/types'
import { AlertIcon, CheckIcon, ErrorIcon } from '../Icons'

interface Props {
  percentage: number,
  totalCorrectAnswer: number,
  questions: QuestionType[]
}

export const ResultComponent: React.FC<Props> = ({ percentage, totalCorrectAnswer, questions }) => {
  const totalQuestions = questions.length
  
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-7'>
        <div className='col-span-2'></div>
        <div className='border border-gray-200 p-5 rounded-2xl col-span-3 text-center'>
          <div className='flex justify-center'>
            {
              percentage >= 80
                ? <CheckIcon />
                : percentage <= 40
                  ? <ErrorIcon />
                  : <AlertIcon />
            }
          </div>
          <h3 className='font-bold text-3xl mb-5'>
            {
                percentage >= 80
                  ? <p>Successfully!</p>
                  : percentage <= 40
                    ? <p>Error!</p>
                    : <p>Successful!</p>
              }  
          </h3>
          <h1 className='text-2xl mb-8'>{ percentage } %</h1>
          <p className='text-base'><b className='text-2xl'>Correct Answer:</b> { totalCorrectAnswer }/{ totalQuestions }</p>
        </div>
        <div className='col-span-2'></div>
      </section>
    </>
  )
}

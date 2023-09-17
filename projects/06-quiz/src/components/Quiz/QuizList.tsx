import { QuizType } from '../../types/types'

interface Props {
  quiz: QuizType
}

export const QuizList: React.FC<Props> = ({ quiz }) => {
  return (
    <section className='border border-gray-200 p-4 rounded-lg dark:border-gray-700 hover:scale-105 ease-in duration-500'>
      <h3 className='text-lg underline'>{ quiz.name }</h3>
      <br />
      { quiz.description }
    </section>
  )
}

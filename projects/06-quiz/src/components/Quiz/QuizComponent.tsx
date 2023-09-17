import { useQuizContext } from "../../hook/useQuizContext"
import { QuizList } from "./QuizList"



export const QuizComponent = () => {
  const { quizzes } = useQuizContext()

  return (
    <>
      <h3 className='font-medium text-2xl'>List of Quiz</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          quizzes.map((quiz, i) => (
            <QuizList key={ i } quiz={ quiz } />
          ))
        }
      </div>
    </>
  )
}

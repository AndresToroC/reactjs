import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { AuthComponent } from '../components/Auth/AuthComponent';
import { QuizComponent } from '../components/Quiz/QuizComponent';
import { ProtectedRouter } from './ProtectedRouter';
import { useUserContext } from '../hook/useUserContext';
import { PublicRouter } from './PublicRouter';
import { QuizItem } from '../components/Quiz/QuizItem';

export const Router = () => {
  const { user } = useUserContext() 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRouter user={ user } />,
      children: [
        {
          path: '/',
          element: <AuthComponent />
        }
      ]
    },
    {
      path: '/',
      element: <ProtectedRouter user={ user } />,
      children: [
        {
          path: '/quiz',
          element: <QuizComponent />,
        },
        {
          path: '/quiz/:quizId',
          element: <QuizItem />,
        }
      ]
    },
  ])  

  return (
    <RouterProvider router={ router } />
    // <BrowserRouter>
    //   <Routes>

    //     <Route element={<PublicRouter user={ user } />}>
    //       <Route path="/" element={<AuthComponent />} />
    //     </Route>

    //     <Route element={<ProtectedRouter user={ user } />}>
    //       <Route path="/quiz" element={<QuizComponent />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { AuthComponent } from '../components/Auth/AuthComponent';
import { QuizComponent } from '../components/Quiz/QuizComponent';
import { ProtectedRouter } from './ProtectedRouter';
import { useUserContext } from '../hook/useUserContext';
import { PublicRouter } from './PublicRouter';

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

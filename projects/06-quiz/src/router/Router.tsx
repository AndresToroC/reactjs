import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { AuthComponent } from '../components/Auth/AuthComponent';
import { QuizComponent } from '../components/Quiz/QuizComponent';
import { ProtectedRouter } from './ProtectedRouter';
import { useUserContext } from '../hook/useUserContext';

export const Router = () => {
  const { user } = useUserContext()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthComponent />,
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
  ]);

  return (
    <RouterProvider router={ router } />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<AuthComponent />} />

    //     <Route element={<ProtectedRouter />}>
    //       <Route path="/quiz" element={<QuizComponent />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

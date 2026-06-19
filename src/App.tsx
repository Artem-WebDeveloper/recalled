import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import AppLayout from './ui/AppLayout';
import Add from './pages/Add';
import Study from './pages/Study';
import Words from './pages/Words';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: AppLayout,
      children: [
        { index: true, element: <Navigate to="/words" replace /> },
        { path: 'words', Component: Words, index: true },
        { path: 'add', Component: Add },
        { path: 'study', Component: Study },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

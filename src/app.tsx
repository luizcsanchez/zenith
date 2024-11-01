import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Router Dom!</div>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

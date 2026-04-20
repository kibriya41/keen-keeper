import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
   Component: RootLayout,
   children:[
    {
      path:"/",
      element: <h2>Home Page</h2>
    },
    {
      path:"/timeline",
      element: <h2>Time line page</h2>
    },
    {
      path:"/stats",
      element: <h2>stats page</h2>
    },
    
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)

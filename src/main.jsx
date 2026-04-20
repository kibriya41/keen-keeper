import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';
import NotFound from './pages/notFound/NotFound';
import HomePage from './pages/home/HomePage';
import Timeline from './pages/timeline/Timeline';
import Stats from './pages/stats/stats';

const router = createBrowserRouter([
  {
    path: "/",
   Component: RootLayout,
   children:[
    {
      path:"/",
      Component: HomePage
    },
    {
      path:"/timeline",
      element: <Timeline />
    },
    {
      path:"/stats",
      element: <Stats />
    },
   ],
   errorElement: <NotFound />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)

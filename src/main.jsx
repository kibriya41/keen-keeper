import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import RoutLayout from './layout/RootLayout';
import NotFound from './pages/notFound/NotFound';
import HomePage from './pages/home/HomePage';
import Timeline from './pages/timeline/Timeline';
import Stats from './pages/stats/Stats';
import { router } from './router/Routers';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)

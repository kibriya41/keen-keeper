import { createBrowserRouter, Route } from "react-router";
import HomePage from "../pages/home/HomePage";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import NotFound from "../pages/notFound/NotFound";
import RoutLayout from "../layout/RootLayout";
import FriendsDetails from "../pages/friendsDetails/FriendsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
   Component: RoutLayout,
   children:[
    {
      path:"/",
      Component: HomePage,
    },
    {
      path: "/:id",
      element:<FriendsDetails />
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
  //  errorElement: <NotFound />
  },
]);
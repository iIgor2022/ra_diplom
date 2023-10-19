import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/root";
import TopSales from "./components/TopSales/topSales";
import About from "./components/About/aboutStore";
import Contacts from "./components/Contacts/contacts";
import NotFound from "./components/NotFound/notFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'about',
        element: <TopSales content={<About />} />
      },
      {
        path: 'contacts',
        element: <TopSales content={<Contacts />} />
      },
      {
        path: '*',
        element: <TopSales content={<NotFound />} />
      }
    ]
  }
])

export default router;
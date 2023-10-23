import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Root from './components/Root/root';
import TopSales from './components/TopSales/topSales';
import About from './components/About/aboutStore';
import Contacts from './components/Contacts/contacts';
import NotFound from './components/NotFound/notFound';
import MainElement from './components/Main/main';
import Catalog from './components/Catalog/catalog';
import CatalogItemDetails from './components/CatalogItemDetails/catalogItemDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainElement />,
        children: [
          {
            path: '/',
            element: <Catalog />,
          },
        ],
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'about',
        element: <TopSales content={<About />} />,
      },
      {
        path: 'contacts',
        element: <TopSales content={<Contacts />} />,
      },
      {
        path: 'catalog/:id',
        element: <CatalogItemDetails />,
      },
      {
        path: '*',
        element: <TopSales content={<NotFound />} />,
      },
    ],
  },
]);

export default router;

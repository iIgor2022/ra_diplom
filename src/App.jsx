import './App.css';
import { RouterProvider } from 'react-router';
import React from 'react';
import router from './router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

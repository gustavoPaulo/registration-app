import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './App.jsx';
import PesquisaPage from './pages/PesquisaPage.jsx';
import CadastroPage from './pages/CadastroPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <PaginaNaoEncontrada />,
  },
  {
    path: '/pesquisa',
    element: <PesquisaPage />,
  },
  {
    path: '/cadastro',
    element: <CadastroPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

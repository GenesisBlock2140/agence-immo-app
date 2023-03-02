import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Annonce } from './pages/Annonce/Annonce';

import AnnonceProvider from './context/annonceContext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { Search } from './pages/Search/Search';
import { Footer } from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "annonce/:annonceId",
    element: <Annonce />
  },
  {
    path: "search",
    element: <Search />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnnonceProvider>
      <RouterProvider router={router} />
      <Footer />
    </AnnonceProvider>
  </React.StrictMode>,
)

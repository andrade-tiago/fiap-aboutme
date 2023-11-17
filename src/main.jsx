import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Experiencia from './routes/Experiencia.jsx'
import Formacao from './routes/Formacao.jsx'
import Hobbies from './routes/Hobbies.jsx'
import Erro from './routes/Erro.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro />,
    children: [
      {path: '/', element: <Home />},
      {path: 'experiencia', element: <Experiencia />},
      {path: 'formacao', element: <Formacao />},
      {path: 'hobbies', element: <Hobbies />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

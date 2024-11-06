import Certificado from './components/pages/Certificado/Certificado'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/pages/Home/Home'
import Projetos from './components/pages/Projetos/Projetos'
import Navegation from './components/Component/Navegation/Navegation'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projetos',
    element: <Projetos />
  },
  {
    path: '/cursos',
    element: <Certificado />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
